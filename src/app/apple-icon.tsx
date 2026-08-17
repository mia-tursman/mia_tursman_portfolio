import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5C6E4E",
          color: "#FAF3E4",
          fontSize: 84,
          fontWeight: 700,
        }}
      >
        MT
      </div>
    ),
    { ...size },
  );
}
