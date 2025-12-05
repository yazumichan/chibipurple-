import MintButton from "../components/MintButton";

export const dynamic = "force-static";

export const metadata = {
  openGraph: {
    title: "Chibi Purple",
    images: ["https://your-domain.vercel.app/chibi.png"],
  },
};

export default function Page() {
  return (
    <div>
      <h1>Chibi Purple Miniapp</h1>
      <MintButton />
    </div>
  );
}
