import { NextRequest, NextResponse } from "next/server";

// Set N8N_WEBHOOK_URL in Vercel environment variables
// Name the webhook: kkw-landing-lead
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, childName, phone, email, ageGroups } = body;

  if (!firstName || !lastName || !phone || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (N8N_WEBHOOK_URL) {
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "kkw-landing",
          firstName,
          lastName,
          childName: childName || "",
          phone,
          email,
          ageGroups: ageGroups || [],
          submitted_at: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("Failed to send to n8n:", err);
    }
  }

  return NextResponse.json({ success: true });
}
