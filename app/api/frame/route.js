// app/api/frame/route.js
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const base = "https://chibipurple-b9wq-2n8z67z9z-yazumichans-projects.vercel.app";

  return NextResponse.json({
    version: "vNext",
    image: `${base}/chibi.png`,
    title: "Chibi Purple Mini App",
    description: "Mini app Chibi Purple di Farcaster.",
    buttons: [
      {
        label: "Open App",
        action: "link",
        target: base
      },
      {
        label: "Mint",
        action: "post"
      }
    ],
    post_url: `${base}/api/frame`
  });
}

export async function POST() {
  const base = "https://chibipurple-b9wq-2n8z67z9z-yazumichans-projects.vercel.app";

  return NextResponse.json({
    version: "vNext",
    image: `${base}/chibi.png`,
    title: "Mint Success!",
    description: "Terima kasih sudah mint!",
    buttons: [
      {
        label: "Back",
        action: "link",
        target: base
      }
    ]
  });
}

