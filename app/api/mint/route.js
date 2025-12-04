
import { NextResponse } from "next/server";
import { createPublicClient, http } from "viem";
import { base, baseSepolia } from "viem/chains";

export async function POST(request) {
  const { username } = await request.json();

  // Generate dynamic image URL with username
  const imageUrl = `https://chibipurple.vercel.app/api/render?name=${encodeURIComponent(username)}`;

  // ————————————
  // Mint NFT via Zora
  // ————————————

  // Contoh transaksi dummy
  const txHash = "0x" + Math.random().toString(16).substring(2);

  return NextResponse.json({
    success: true,
    hash: txHash,
    image: imageUrl,
  });
}
