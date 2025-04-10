import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } }
) {
  try {
    const { token } = params;

    if (!token) {
      return NextResponse.json(
        { message: 'Token is required' },
        { status: 400 }
      );
    }

    const application = await prisma.application.findUnique({
      where: {
        token,
        tokenRevoked: false,
        tokenExpiresAt: {
          gt: new Date(),
        },
      },
      select: {
        id: true,
        status: true,
        instrumentPreference: true,
        createdAt: true,
        instrumentAssignments: {
          where: {
            status: {
              not: 'REVOKED',
            },
          },
          select: {
            id: true,
            status: true,
            instrument: {
              select: {
                type: true,
                brand: true,
              },
            },
          },
        },
      },
    });

    if (!application) {
      return NextResponse.json(
        { message: 'Application not found or token has expired' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      application,
    });
  } catch (error) {
    console.error('Error fetching application status:', error);
    return NextResponse.json(
      { message: 'An error occurred while fetching application status' },
      { status: 500 }
    );
  }
}
