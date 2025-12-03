export async function GET() {
  return Response.json({
    frame: {
      version: "vNext",
      image: "https://chibipurple-b9wq.vercel.app/chibi1.png",
      buttons: [
        { label: "Open", action: "post" },
        { label: "Mint", action: "post" }
      ],
      post_url: "https://chibipurple-b9wq.vercel.app/api/frame"
    }
  });
}

