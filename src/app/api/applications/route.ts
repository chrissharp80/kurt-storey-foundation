import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import prisma from '../../../lib/prisma';
import { sendEmail } from '../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const { name, email, instrumentPreference, message } = await request.json();

    if (!name || !email || !instrumentPreference || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const token = randomBytes(32).toString('hex');
    const tokenExpiresAt = new Date();
    tokenExpiresAt.setDate(tokenExpiresAt.getDate() + 30); // Token expires in 30 days

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name,
          email,
          role: 'APPLICANT',
          status: 'ACTIVE',
        },
      });
    }

    const application = await prisma.application.create({
      data: {
        message,
        instrumentPreference,
        status: 'PENDING',
        token,
        tokenExpiresAt,
      },
    });

    await prisma.auditLog.create({
      data: {
        action: 'APPLICATION_CREATED',
        details: `Application created for ${instrumentPreference}`,
        entityType: 'APPLICATION',
        entityId: application.id,
        userId: user.id,
      },
    });

    await sendEmail({
      to: email,
      subject: 'Your Kurt Storey Foundation Application',
      html: `
        <h1>Application Received</h1>
        <p>Dear ${name},</p>
        <p>Thank you for applying to the Kurt Storey Foundation. Your application for a ${instrumentPreference} has been received and is being reviewed.</p>
        <p>You can check the status of your application at any time using this link:</p>
        <p><a href="${process.env.NEXTAUTH_URL}/status/${token}">Check Application Status</a></p>
        <p>This link is unique to your application and will expire in 30 days.</p>
        <p>Best regards,<br>The Kurt Storey Foundation Team</p>
      `,
    });

    return NextResponse.json({
      message: 'Application submitted successfully',
      token,
    });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your application' },
      { status: 500 }
    );
  }
}
