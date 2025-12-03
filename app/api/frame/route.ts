import { NextResponse } from "next/server";

export async function GET() {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="og:title" content="Chibi Purple Mint" />
      <meta property="og:image" content="https://chibipurple-b9wq.vercel.app/chibi.png" />

      <!-- FRAME V2 -->
      <meta name="fc:frame" content="vNext" />
      <meta name="fc:frame:image" content="https://chibipurple-b9wq.vercel.app/chibi.png" />
      <meta name="fc:frame:button:1" content="Mint 0.0001 BASE" />
      <meta name="fc:frame:button:1:action" content="mint" />
      <meta name="fc:frame:button:1:target" content="eip155:8453:0x8A3De524F153282D66150c46CD5191D24a6aEdC1" />
      <meta name="fc:frame:button:1:mint:price" content="0.0001" />
    </head>
    <body></body>
    </html>
  `;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" },
  });
}

export const dynamic = "force-dynamic";
