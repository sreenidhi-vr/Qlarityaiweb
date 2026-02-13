import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get("title") || "QlarityAI — Clarity Delivered by AI";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0A0F2C 0%, #1A1F4A 40%, #2B3DE0 100%)",
          color: "#ffffff",
          fontSize: 58,
          fontWeight: 700,
          textAlign: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 80,
            }}
          >
            Q
          </div>
        </div>
        <div
          style={{
            maxWidth: "900px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        <p
          style={{
            fontSize: 28,
            marginTop: 20,
            opacity: 0.85,
            fontWeight: 400,
          }}
        >
          Clarity Delivered by AI
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
