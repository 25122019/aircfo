import { NextResponse } from 'next/server';

export async function GET() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="8" fill="#2563eb"/>
      <path d="M16 6L6 26H11L16 16L21 26H26L16 6Z" fill="white"/>
      <path d="M11 20H21" stroke="white" stroke-width="2"/>
    </svg>
  `.trim();

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
}
