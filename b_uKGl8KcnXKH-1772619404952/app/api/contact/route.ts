import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Visi lauki ir obligāti." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Nederīga e-pasta adrese." },
        { status: 400 }
      )
    }

    const emailSubject = subject
      ? `${subject} — no ${name}`
      : `Jauns ziņojums no ${name}`

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "KrastWeb <onboarding@resend.dev>",
        to: "info@krastweb.com",
        subject: emailSubject,
        reply_to: email,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Jauns ziņojums no mājaslapas</h2>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Vārds:</strong> ${name}</p>
            <p><strong>E-pasts:</strong> ${email}</p>
            ${subject ? `<p><strong>Tēma:</strong> ${subject}</p>` : ""}
            <p><strong>Ziņojums:</strong></p>
            <p style="background: #f9f9f9; padding: 16px; border-radius: 8px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #999; font-size: 12px;">Nosūtīts no KrastWeb mājaslapas kontaktformas.</p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Resend API error:", errorData)
      return NextResponse.json(
        { error: "Neizdevās nosūtīt ziņojumu." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Servera kļūda. Lūdzu, mēģiniet vēlāk." },
      { status: 500 }
    )
  }
}
