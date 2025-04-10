import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '../../../../lib/prisma';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user?.role || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const applications = await prisma.application.findMany({
      include: {
        reviewedBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        instrumentAssignments: {
          include: {
            instrument: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      applications,
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { message: 'An error occurred while fetching applications' },
      { status: 500 }
    );
  }
}
