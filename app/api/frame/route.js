export async function GET() {
  return Response.json({
    type: "frame",
    version: "vNext",
    image: "https://chibipurple-b9wq.vercel.app/chibi1.png",
    buttons: [
      { label: "Next", action: "post" }
    ]
  });
}
import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      frames: [
        {
          version: "vNext",
          image: "https://chibipurple-b9wq.vercel.app/chibi.png",

          buttons: [
            {
              label: "Open",
              action: "link",
              target: "https://chibipurple-b9wq.vercel.app"
            },
            {
              label: "Mint",
              action: "mint",
              target: "https://chibipurple-b9wq.vercel.app"
            }
          ]
        }
      ]
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
