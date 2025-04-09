import { Resend } from 'resend';
import prisma from '../../lib/prisma';

const EmailStatus = {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED',
  RETRY: 'RETRY'
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const emailLog = await prisma.emailLog.create({
      data: {
        to,
        subject,
        body: html,
        status: EmailStatus.PENDING,
      },
    });

    const { data, error } = await resend.emails.send({
      from: 'Kurt Storey Foundation <noreply@kurtfoundation.org>',
      to,
      subject,
      html,
    });

    if (error) {
      await prisma.emailLog.update({
        where: { id: emailLog.id },
        data: {
          status: EmailStatus.FAILED,
          failedAt: new Date(),
        },
      });
      return { success: false, error };
    }

    await prisma.emailLog.update({
      where: { id: emailLog.id },
      data: {
        status: EmailStatus.SENT,
        sentAt: new Date(),
      },
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}

export async function retryEmail(emailLogId: string) {
  try {
    const emailLog = await prisma.emailLog.findUnique({
      where: { id: emailLogId },
    });

    if (!emailLog) {
      return { success: false, error: 'Email log not found' };
    }

    if (emailLog.retryCount >= 3) {
      return { success: false, error: 'Maximum retry attempts reached' };
    }

    const { data, error } = await resend.emails.send({
      from: 'Kurt Storey Foundation <noreply@kurtfoundation.org>',
      to: emailLog.to,
      subject: emailLog.subject,
      html: emailLog.body,
    });

    if (error) {
      await prisma.emailLog.update({
        where: { id: emailLog.id },
        data: {
          status: EmailStatus.FAILED,
          failedAt: new Date(),
          retryCount: { increment: 1 },
        },
      });
      return { success: false, error };
    }

    await prisma.emailLog.update({
      where: { id: emailLog.id },
      data: {
        status: EmailStatus.SENT,
        sentAt: new Date(),
        retryCount: { increment: 1 },
      },
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email retry error:', error);
    return { success: false, error };
  }
}
