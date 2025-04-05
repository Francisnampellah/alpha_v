import { NextResponse } from 'next/server';
import { getEventById } from '@/controllers/eventController';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const event = await getEventById(context.params.id);
    
    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error('Error fetching event details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch event details' },
      { status: 500 }
    );
  }
} 