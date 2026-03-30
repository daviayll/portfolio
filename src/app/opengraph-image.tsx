import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex" }}>
          <span
            style={{
              color: "#666",
              fontSize: 18,
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Antoni Davia
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              color: "#f5f0e8",
              fontSize: 68,
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            E-Commerce Automation.
          </div>
          <div
            style={{
              color: "#888",
              fontSize: 26,
              fontFamily: "system-ui, sans-serif",
              fontWeight: 400,
              maxWidth: 800,
            }}
          >
            {SITE.description}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
