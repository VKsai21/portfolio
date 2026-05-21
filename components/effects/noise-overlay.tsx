export default function NoiseOverlay() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.03]
        mix-blend-soft-light
        -z-10
      "
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}