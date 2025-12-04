// app/layout.js
export const metadata = new URL("https://chibipurple-b9wq-2n8z67z9z-yazumichans-projects.vercel.app"),
  }
  title: "Chibi Purple",
  description: "Mini app Chibi Purple Frame"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
