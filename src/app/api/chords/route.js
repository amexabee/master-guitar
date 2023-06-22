import { NextResponse } from 'next/server';
import chords from './data.json';

export async function GET(request) {
  return NextResponse.json(chords);
}
