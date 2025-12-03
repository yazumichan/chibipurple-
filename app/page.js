// app/page.js
export default function Page() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        gap: 24
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: 24,
          borderRadius: 12,
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
        }}
      >
        <h1>Chibi Purple Frame</h1>
        <p>Endpoint frame: <code>/api/frame</code></p>
        <img
          src="/chibi1.png"
          alt="Chibi Purple"
          style={{ width: 220, borderRadius: 12 }}
        />
      </div>
    </main>
  );
}
