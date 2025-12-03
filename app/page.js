export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f9e6ff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      textAlign: "center"
    }}>
      
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        maxWidth: "500px"
      }}>
        <h1 style={{
          fontSize: "32px",
          marginBottom: "10px",
          color: "#b300ff"
        }}>
          💜 Chibi Purple Frame
        </h1>

        <p style={{
          fontSize: "18px",
          color: "#444",
          marginBottom: "20px"
        }}>
          Frame API kamu sudah berjalan dengan baik!
        </p>

        <a 
          href="/api/frame"
          style={{
            background: "#b300ff",
            color: "white",
            padding: "12px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            display: "inline-block",
            marginTop: "10px"
          }}
        >
          👉 Cek API Frame
        </a>
      </div>
    </div>
  );
            }
