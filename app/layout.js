// app/layout.js
export const metadata = {
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
