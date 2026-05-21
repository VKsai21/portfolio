export default function RadialGlow() {
  return (
    <div
      className="
        absolute
        inset-0
        -z-20
        opacity-40
      "
      style={{
        background: `
          radial-gradient(
            circle at 80% 10%,
            rgba(124,58,237,0.08),
            transparent 30%
          ),
          radial-gradient(
            circle at 20% 90%,
            rgba(6,182,212,0.05),
            transparent 30%
          )
        `,
      }}
    />
  );
}