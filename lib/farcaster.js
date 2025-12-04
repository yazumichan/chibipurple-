import { SignInWithFarcaster } from "@farcaster/auth-kit";

export const siwf = new SignInWithFarcaster({
  rpcUrl: "https://mainnet.optimism.io", 
  domain: "chibipurple.vercel.app",
  redirectUrl: "https://chibipurple.vercel.app",
});

