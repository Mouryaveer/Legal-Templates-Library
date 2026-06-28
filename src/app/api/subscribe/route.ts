import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email, templateId, source, website } = body;

    // 1. Honeypot check (Spam protection)
    if (website) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // 3. Setup client IP and user agent metadata
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "";

    // Log the subscription to console
    console.log(`New lead subscription registered: ${cleanEmail} from IP ${ip}`);

    // Try storing in Supabase if URL and anon key are available
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseServiceKey && supabaseUrl !== "https://your-project.supabase.co") {
      try {
        const supabase = createAdminClient();
        
        // Check if lead already exists for this template/source
        const { data: existingLead } = await supabase
          .from("leads")
          .select("id")
          .eq("email", cleanEmail)
          .eq("template_id", templateId || null)
          .maybeSingle();

        if (!existingLead) {
          await supabase.from("leads").insert({
            email: cleanEmail,
            template_id: templateId || null,
            ip_address: ip,
            user_agent: userAgent,
            source: source || "download",
          });
        }
      } catch (dbError) {
        console.error("Database storage failed, falling back gracefully:", dbError);
      }
    }

    return NextResponse.json(
      { success: true, message: "Subscription successful." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
