import { NextRequest, NextResponse } from "next/server";
import { getTemplateBySlug } from "@/lib/data/templates";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateDocx } from "@/lib/docx/generator";
import { getTemplateBuilder } from "@/lib/docx/templates";

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

    // ── Generate professional DOCX document ──
    const builder = getTemplateBuilder(slug);

    if (builder) {
      try {
        const content = builder();
        const docxBuffer = await generateDocx(content);

        const filename = `${template.slug}.docx`;
        return new NextResponse(new Uint8Array(docxBuffer), {
          status: 200,
          headers: {
            "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "Content-Disposition": `attachment; filename="${filename}"`,
            "Cache-Control": "no-store, must-revalidate",
          },
        });
      } catch (docxError) {
        console.error("DOCX generation failed:", docxError);
        return NextResponse.json(
          { error: "Failed to generate document. Please try again." },
          { status: 500 }
        );
      }
    }

    // Fallback: template exists in data but has no DOCX builder yet
    return NextResponse.json(
      { error: "This template is currently being upgraded. Please check back soon." },
      { status: 503 }
    );
  } catch (error) {
    console.error("Download API error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
