"use client";

import { useState } from "react";
import { siwf } from "../lib/farcaster";

export default function MintButton() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  const connectFarcaster = async () => {
    const user = await siwf.signIn();
    setUsername(user.username);
  };

  const mintNFT = async () => {
    setLoading(true);

    const res = await fetch("/api/mint", {
      method: "POST",
      body: JSON.stringify({ username }),
    });

    const data = await res.json();
    setLoading(false);

    alert("Mint Success: " + data.hash);
  };

  return (
    <div>
      {!username && (
        <button onClick={connectFarcaster}>
          Connect Farcaster
        </button>
      )}

      {username && (
        <button onClick={mintNFT}>
          {loading ? "Minting..." : "Mint NFT"}
        </button>
      )}
    </div>
  );
}

