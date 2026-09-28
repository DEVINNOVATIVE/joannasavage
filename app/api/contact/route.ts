import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, telephone, message, serviceType } = body

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const humanAnswer = String(body.humanCheck || '').trim()
    if (humanAnswer !== '4') {
      return NextResponse.json({ error: 'Human verification failed' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: (Number(process.env.SMTP_PORT) || 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}${serviceType ? ` — ${serviceType}` : ''}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Telephone: ${telephone || 'Not provided'}`,
        `Service: ${serviceType || 'General Enquiry'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0b1818;">New enquiry from ${firstName} ${lastName}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #a8865c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</td><td style="padding: 8px 0;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #a8865c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0b1818;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #a8865c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Telephone</td><td style="padding: 8px 0;">${telephone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #a8865c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service</td><td style="padding: 8px 0;">${serviceType || 'General Enquiry'}</td></tr>
          </table>
          <h3 style="color: #0b1818; margin-top: 24px;">Message</h3>
          <p style="line-height: 1.6; color: #526064;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
