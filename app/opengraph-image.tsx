import { ImageResponse } from "next/og";

export const alt = "Rane Gray";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at top left, rgba(200, 169, 110, 0.28), transparent 34%), radial-gradient(circle at top right, rgba(142, 164, 162, 0.2), transparent 24%), linear-gradient(180deg, #191715 0%, #11100f 100%)",
          color: "#f5efe2",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: 84,
              lineHeight: 1,
            }}
          >
            Rane Gray
          </div>
          <div
            style={{
              color: "#d2ccc1",
              display: "flex",
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 920,
            }}
          >
            Perception, manipulation, and autonomy systems built for real
            hardware.
          </div>
        </div>

        <div
          style={{
            color: "#9f9a91",
            display: "flex",
            fontSize: 28,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>ranegray.com</div>
          <div style={{ display: "flex" }}>github.com/ranegray</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
