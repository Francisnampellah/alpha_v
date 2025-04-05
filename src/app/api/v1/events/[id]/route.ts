import { NextResponse } from 'next/server';
import { getEventById } from '@/controllers/eventController';
import type { NextRequest } from 'next/server';

type Props = {
  params: {
    id: string;
  };
};

export async function GET(
  _request: NextRequest,
  { params }: Props
) {
  try {
    const event = await getEventById(params.id);

    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    console.error('Error fetching event details:', (error as Error).message);
    return NextResponse.json(
      { error: 'Failed to fetch event details' },
      { status: 500 }
    );
  }
}
