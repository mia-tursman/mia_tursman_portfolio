import { ImageResponse } from "next/og";
import { contact } from "@/lib/contact";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#F2E8D5",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9D543B",
          }}
        >
          {contact.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 700,
            color: "#5C6E4E",
            marginTop: 28,
          }}
        >
          {contact.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#4E5E42",
            marginTop: 36,
            maxWidth: 820,
          }}
        >
          Accessible UX, AI-assisted workflows, and non-profit UX research.
        </div>
      </div>
    ),
    { ...size },
  );
}
