import MintButton from "../components/MintButton";

export default function Page() {
  return (
    <div>
      <h1>Chibi Purple Miniapp</h1>
      <MintButton />
    </div>
  );
}
export const dynamic = "force-static";

export const metadata = {
  openGraph: {
    title: "Chibi Purple",
    images: ["https://your-domain.vercel.app/chibi.png"]
  }
};

export default function Frame() {
  return (
    <html>
      <head>
        {/* FRAME META TAGS */}
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="https://your-domain.vercel.app/chibi.png"
        />
        <meta property="fc:frame:image:aspect_ratio" content="1:1" />

        <meta property="fc:frame:button:1" content="Mint Chibi" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta
          property="fc:frame:post_url"
          content="https://your-domain.vercel.app/api/mint"
        />
      </head>

      <body
        style={{
          background: "#d9b3ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh"
        }}
      >
        <img
          src="/chibi.png"
          alt="Chibi Purple"
          style={{ width: "300px", borderRadius: "20px" }}
        />
      </body>
    </html>
  );
          }
