import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import { getTemplateBySlug } from "@/lib/data/templates";
import { createAdminClient } from "@/lib/supabase/admin";

const execAsync = promisify(exec);

const DEFAULT_VALUES: Record<string, string> = {
  // Common placeholders
  "Date": "16/11/2024",
  "Company": "Turn2Law",
  "Name": "AKSHAY KUMAR",
  "Jurisdiction": "Chennai, Tamil Nadu, India",
  "Term": "1 Year",
  "Governing_Law": "This Agreement shall be governed by and construed in accordance with the laws of India.",
  
  // NDA specific
  "Confidential_Info_Description": "all proprietary software architectures, AI models, client lists, and legal workflows.",

  // Offer Letter specific
  "Position": "Product Manager Intern",
  "Start_Date": "29 August 2025",
  "Salary": "Rs. 3,60,000 per annum",
  "Manager_Name": "Yash Phoghat",
  "Response_Date": "20 November 2024",
  "HR_Manager": "Priya Sharma",
  "Benefits_Description": "The role includes professional health insurance cover, remote work allowance, and travel reimbursements.",

  // Contract specific
  "Client_Name": "LegalTech Enterprises Ltd",
  "Contract_Creation_Date": "16/11/2024",
  "Service_Description": "AI-powered document generation catalog integration and custom workflow training.",
  "Payment_Amount": "Rs. 2,50,000",
  "Payment_Schedule": "50% upfront retainer, 50% upon final codebase delivery.",
  "End_Date": "31 December 2026",
  "Termination_Clause": "Either party may terminate with 30 days prior written notice if milestones are unmet.",

  // MOU specific
  "PartyA_Name": "Turn2Law Technologies",
  "PartyB_Name": "SRM Innovation Labs",
  "Purpose": "to collaborate on developing open-source AI legal models and legal aid document systems.",
  "Confidentiality": "All shared data shall remain strictly confidential.",

  // IP Agreement specific
  "IP_Description": "all patents, copyrights, source code, designs, and algorithms created for Turn2Law.",

  // Onboarding Letter specific
  "Employee_Name": "AKSHAY KUMAR",
  "Emp_ID": "T2L-AI-026",
  "Role": "Product Manager Intern",
  "Joining_Date": "29 August 2025",
  "Document_Date": "16/11/2024"
};

// LaTeX special characters escape mapping
function escapeLatex(text: string): string {
  const map: Record<string, string> = {
    "\\": "\\textbackslash{}",
    "&": "\\&",
    "%": "\\%",
    "$": "\\$",
    "#": "\\#",
    "_": "\\_",
    "{": "\\{",
    "}": "\\}",
    "~": "\\textasciitilde{}",
    "^": "\\textasciicircum{}",
  };
  return text.split("").map((char) => map[char] || char).join("");
}

// Clean LaTeX markup to produce a readable fallback text document
function cleanLatexToText(latex: string): string {
  let text = latex;

  const beginIndex = text.indexOf("\\begin{document}");
  if (beginIndex !== -1) {
    text = text.substring(beginIndex + "\\begin{document}".length);
  }

  text = text.replace(/\\end\{document\}/g, "");
  text = text.replace(/\\graphicspath\{[^}]*\}/g, "");
  text = text.replace(/\\pagenumbering\{[^}]*\}/g, "");
  text = text.replace(/\\thispagestyle\{[^}]*\}/g, "");
  text = text.replace(/\\definecolor\{[^}]*\}\{[^}]*\}\{[^}]*\}/g, "");
  text = text.replace(/\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g, "");
  text = text.replace(/\\includegraphics\[[^\]]*\]\{[^}]*\}/g, "");
  text = text.replace(/\\includegraphics\{[^}]*\}/g, "");
  text = text.replace(/\\begin\{flushright\}[\s\S]*?\\end\{flushright\}/g, "");
  text = text.replace(/\\begin\{flushleft\}[\s\S]*?\\end\{flushleft\}/g, "");
  text = text.replace(/\\begin\{tabular\}[\s\S]*?\\end\{tabular\}/g, "");
  text = text.replace(/\\noindent/g, "");
  text = text.replace(/\\selectfont/g, "");
  text = text.replace(/\\linespread\{[^}]*\}/g, "");
  text = text.replace(/\\vfill/g, "\n");
  text = text.replace(/\\hfill/g, " ");
  text = text.replace(/\\vspace\*?\{[^}]*\}/g, "\n");
  text = text.replace(/\\hspace\*?\{[^}]*\}/g, " ");
  text = text.replace(/\\\[[^\]]*\]/g, "\n");
  text = text.replace(/\\\\\s*/g, "\n");
  text = text.replace(/\\par/g, "\n\n");
  text = text.replace(/\\rule\{[^}]*\}\{[^}]*\}/g, "");
  text = text.replace(/\\textbf\{([^}]+)\}/g, "$1");
  text = text.replace(/\\textit\{([^}]+)\}/g, "$1");
  text = text.replace(/\\texttt\{([^}]+)\}/g, "$1");
  text = text.replace(/\\textsf\{([^}]+)\}/g, "$1");
  text = text.replace(/\\textrm\{([^}]+)\}/g, "$1");
  text = text.replace(/\\MakeUppercase\{([^}]+)\}/g, (_, p1) => p1.toUpperCase());
  text = text.replace(/\{\\fontsize\{[^}]*\}\{[^}]*\}\s*([^\}]+)\}/g, "$1");
  text = text.replace(/\{\\(large|Large|LARGE|huge|Huge|small|tiny)\s*([^\}]+)\}/g, "$2");
  text = text.replace(/\\(large|Large|LARGE|huge|Huge|small|tiny)\b/g, "");
  text = text.replace(/\\begin\{itemize\}[^\]]*\]?/g, "");
  text = text.replace(/\\end\{itemize\}/g, "");
  text = text.replace(/\\begin\{enumerate\}[^\]]*\]?/g, "");
  text = text.replace(/\\end\{enumerate\}/g, "");
  text = text.replace(/\\item\s+/g, "\n  - ");
  text = text.replace(/``/g, '"');
  text = text.replace(/''/g, '"');
  text = text.replace(/`/g, "'");
  text = text.replace(/\\&/g, "&");
  text = text.replace(/\\%/g, "%");
  text = text.replace(/\\_/g, "_");
  text = text.replace(/\\#/g, "#");
  text = text.replace(/\\~/g, "~");
  text = text.replace(/\\\{/g, "{");
  text = text.replace(/\\\}/g, "}");
  text = text.replace(/\n{3,}/g, "\n\n");
  
  return text.trim();
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required." }, { status: 400 });
    }

    const template = await getTemplateBySlug(slug);

    if (!template) {
      return NextResponse.json({ error: "Template not found." }, { status: 404 });
    }

    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";

    console.log(`Processing download for template: ${template.title} from IP ${ip}`);

    // Update download stats in Supabase if credentials are valid
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseServiceKey && supabaseUrl !== "https://your-project.supabase.co") {
      try {
        const supabase = createAdminClient();
        await supabase.rpc("increment_download_count", { t_id: template.id });
        await supabase.from("downloads").insert({
          template_id: template.id,
          ip_address: ip,
        });
      } catch (dbError) {
        console.error("Failed to log download to database, proceeding:", dbError);
      }
    }

    // 3. Compiled LaTeX Generation Workflow
    if (template.tex_file) {
      const docGenDir = "C:\\Users\\moury\\Coding\\Turn2Law\\documentGeneration-master\\docgen";
      const templatePath = path.join(docGenDir, "templates", template.tex_file);

      // Create a unique temporary path inside the workspace to execute pdflatex
      const uniqueId = Math.random().toString(36).substring(2, 10);
      const compileDir = path.join(process.cwd(), "tmp", `compile_${uniqueId}`);
      
      try {
        // Create build directories
        await fs.mkdir(compileDir, { recursive: true });
        const compileImagesDir = path.join(compileDir, "images");
        await fs.mkdir(compileImagesDir, { recursive: true });

        // Copy all background images to compile environment
        const sourceImagesDir = path.join(docGenDir, "images");
        const imageFiles = await fs.readdir(sourceImagesDir);
        for (const file of imageFiles) {
          await fs.copyFile(
            path.join(sourceImagesDir, file),
            path.join(compileImagesDir, file)
          );
        }

        // Read template LaTeX code
        let texContent = await fs.readFile(templatePath, "utf-8");

        // Substitute placeholders with escaped default/user variables
        Object.entries(DEFAULT_VALUES).forEach(([key, value]) => {
          const escapedVal = escapeLatex(value);
          texContent = texContent.replace(new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g"), escapedVal);
        });

        // Write populated LaTeX code to compile folder
        const texFilePath = path.join(compileDir, "document.tex");
        await fs.writeFile(texFilePath, texContent, "utf-8");

        // Execute pdflatex compilation twice (for reference coordinates to settle)
        const cmd = `pdflatex -interaction=nonstopmode -output-directory="${compileDir}" "${texFilePath}"`;
        
        console.log(`Compiling LaTeX template to PDF: Pass 1`);
        await execAsync(cmd);
        console.log(`Compiling LaTeX template to PDF: Pass 2`);
        await execAsync(cmd);

        // Read compiled PDF
        const pdfPath = path.join(compileDir, "document.pdf");
        const pdfBuffer = await fs.readFile(pdfPath);

        // Cleanup temporary folders asynchronously
        fs.rm(compileDir, { recursive: true, force: true }).catch((err) =>
          console.error("Failed to clean up temp build folder:", err)
        );

        // Deliver the beautifully compiled PDF template!
        const filename = `${template.slug}.pdf`;
        return new NextResponse(pdfBuffer, {
          status: 200,
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${filename}"`,
            "Cache-Control": "no-store, must-revalidate",
          },
        });
      } catch (latexCompileError) {
        console.error("LaTeX compilation failed. Falling back to clean text download:", latexCompileError);
        
        // If compilation fails, clean up temp dir
        fs.rm(compileDir, { recursive: true, force: true }).catch(() => {});
        
        // Fall back to clean parsed text outline
        try {
          const rawContent = await fs.readFile(templatePath, "utf-8");
          const cleanContent = cleanLatexToText(rawContent);
          const finalContent = `============================================================\n` +
                               `TURN2LAW LEGAL TEMPLATES LIBRARY\n` +
                               `Document: ${template.title}\n` +
                               `Category: ${template.category?.name || "General"}\n` +
                               `============================================================\n\n` +
                               cleanContent;
                               
          const textBuffer = Buffer.from(finalContent, "utf-8");
          return new NextResponse(textBuffer, {
            status: 200,
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Content-Disposition": `attachment; filename="${template.slug}.txt"`,
            },
          });
        } catch (fallbackError) {
          console.error("Fallback file reading failed:", fallbackError);
        }
      }
    }

    // Default Fallback outline template
    const headerLines = [
      `============================================================`,
      `TURN2LAW LEGAL TEMPLATES LIBRARY`,
      `Document: ${template.title}`,
      `Category: ${template.category?.name || "General"}`,
      `Generated: ${new Date().toLocaleDateString()}`,
      `Disclaimer: Drafted for reference. Review with counsel before use.`,
      `============================================================\n`,
    ];

    const bodyContent = [
      `1. PURPOSE AND INTENT`,
      template.purpose || "For standard business operations.",
      `\n2. WHO SHOULD USE THIS`,
      template.who_should_use || "Companies, founders, and legal counsel.",
      `\n3. WHEN TO USE`,
      template.when_to_use || "At the initiation of relevant business activities.",
      `\n4. PRINCIPAL COVENANTS & CLAUSES`,
      ...template.key_clauses.map((clause, index) => `${index + 1}. ${clause}\n   [Standard Legal Language for ${clause} goes here...]`),
      `\n5. KEY PROTECTIONS & BENEFITS`,
      ...template.benefits.map((benefit) => `- ${benefit}`),
      `\n=================== END OF REFERENCE DOCUMENT ===================`,
      `To generate fully automated, custom-drafted contracts, visit Turn2Law DocEngine.`,
    ];

    const fileContent = [...headerLines, ...bodyContent].join("\n");
    const buffer = Buffer.from(fileContent, "utf-8");

    const filename = `${template.slug}.txt`;

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Download API error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
