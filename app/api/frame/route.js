import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    type: "frame",
    version: "vNext",
    image: "https://chibipurple-b9wq.vercel.app/chibi.png",
    buttons: [
      {
        label: "Mint 0.0001 BASE",
        action: "mint",
        mint_address: "0x8A3De524F153282D66150c46CD5191D24a6aEdC1",
        mint_price: "0.0001"
      }
    ]
  });
}

export const dynamic = "force-dynamic";
