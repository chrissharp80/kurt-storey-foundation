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

    const instruments = await prisma.instrument.findMany({
      include: {
        instrumentAssignments: {
          include: {
            application: true,
          },
        },
      },
      orderBy: {
        type: 'asc',
      },
    });

    return NextResponse.json({
      instruments,
    });
  } catch (error) {
    console.error('Error fetching instruments:', error);
    return NextResponse.json(
      { message: 'An error occurred while fetching instruments' },
      { status: 500 }
    );
  }
}
