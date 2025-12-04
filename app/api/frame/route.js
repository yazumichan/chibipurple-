// app/api/frame/route.js
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://chibipurple-b9wq.vercel.app";

  return NextResponse.json({
    type: "frame",
    version: "vNext",
    title: "Chibi Purple Mini App",
    description: "Drama gambar ini judul mini app Chibi Purple Name",
    image: "https://chibipurple-b9wq.vercel.app/chibi.png",
    
    buttons: [
      {
        label: "Open",
        action: "open",
        target: base
      },
      {
        label: "Mint",
        action: "mint",
        mint_address: "0x8A3De524F153282D66150c46CD5191D24a6aEdC1",
        mint_price: "0.0001"
      }
    ],
    post_url: `${base}/api/frame/post`
  });
}
export async function POST() {
  return new Response(
    `
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://your-domain.vercel.app/chibi.png" />
          <meta property="fc:frame:button:1" content="Done!" />
        </head>
      </html>
    `,
    {
      headers: { "Content-Type": "text/html" }
    }
  );
}
