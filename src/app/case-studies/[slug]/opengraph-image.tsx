import { ImageResponse } from "next/og";
import { getCaseStudy } from "@/lib/mdx";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type Props = {
  params: { slug: string };
};

export default async function Image({ params }: Props) {
  let title = "Case Study";
  let summary = "";

  try {
    const { frontmatter } = getCaseStudy(params.slug);
    title = frontmatter.title;
    summary = frontmatter.summary ?? "";
  } catch {
    // fallback to defaults
  }

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
          <span
            style={{
              color: "#444",
              fontSize: 16,
              fontFamily: "monospace",
              letterSpacing: "0.1em",
            }}
          >
            Case Study
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#f5f0e8",
              fontSize: 52,
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          {summary && (
            <div
              style={{
                color: "#888",
                fontSize: 24,
                fontFamily: "system-ui, sans-serif",
                fontWeight: 400,
                maxWidth: 800,
              }}
            >
              {summary}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
