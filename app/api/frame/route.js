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
