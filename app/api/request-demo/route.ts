import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const { name, email, company } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    console.log("[v0] Demo request received:", { name, email, company: company || "Not provided" })

    try {
      const { data, error } = await resend.emails.send({
        from: "QlarityAI <onboarding@resend.dev>",
        to: ["info@qlarityai.in"],
        subject: "New Demo Request - QlarityAI",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7c3aed;">New Demo Request Received</h2>
            <p>A new demo request has been submitted with the following details:</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Company:</strong> ${company || "Not provided"}</p>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">Please reach out to schedule their demo session.</p>
          </div>
        `,
      })

      if (error) {
        console.error("[v0] Resend error:", error)
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
      }

      console.log("[v0] Email sent successfully:", data)
      return NextResponse.json({ success: true, message: "Demo request sent successfully" })
    } catch (emailError) {
      console.error("[v0] Error sending email:", emailError)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
  } catch (error) {
    console.error("[v0] Error processing demo request:", error)
    return NextResponse.json({ error: "Failed to process demo request" }, { status: 500 })
  }
}
