import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '../../../../lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { applicationId, instrumentId } = await request.json();

    if (!applicationId || !instrumentId) {
      return NextResponse.json(
        { message: 'Application ID and Instrument ID are required' },
        { status: 400 }
      );
    }

    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application) {
      return NextResponse.json(
        { message: 'Application not found' },
        { status: 404 }
      );
    }

    if (application.status !== 'APPROVED') {
      return NextResponse.json(
        { message: 'Application must be in APPROVED status to assign an instrument' },
        { status: 400 }
      );
    }

    const instrument = await prisma.instrument.findUnique({
      where: { id: instrumentId },
    });

    if (!instrument) {
      return NextResponse.json(
        { message: 'Instrument not found' },
        { status: 404 }
      );
    }

    if (instrument.status !== 'AVAILABLE') {
      return NextResponse.json(
        { message: 'Instrument must be AVAILABLE to be assigned' },
        { status: 400 }
      );
    }

    const result = await prisma.$transaction(async (tx: any) => {
      const updatedApplication = await tx.application.update({
        where: { id: applicationId },
        data: { 
          status: 'ASSIGNED',
          reviewedById: session.user?.id || 'admin-id',
        },
      });

      const updatedInstrument = await tx.instrument.update({
        where: { id: instrumentId },
        data: { status: 'ASSIGNED' },
      });

      const assignment = await tx.instrumentAssignment.create({
        data: {
          applicationId,
          instrumentId,
          status: 'ACTIVE',
          assignedById: session.user?.id || 'admin-id',
        },
      });

      await tx.auditLog.create({
        data: {
          action: 'INSTRUMENT_ASSIGNED',
          details: `Instrument ${instrument.brand} ${instrument.type} assigned to application`,
          entityType: 'APPLICATION',
          entityId: applicationId,
          userId: session.user?.id || 'admin-id',
        },
      });

      return { updatedApplication, updatedInstrument, assignment };
    });

    return NextResponse.json({
      message: 'Instrument assigned successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error assigning instrument:', error);
    return NextResponse.json(
      { message: 'An error occurred while assigning the instrument' },
      { status: 500 }
    );
  }
}
