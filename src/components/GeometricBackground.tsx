export default function GeometricBackground() {
  return (
    <div
      className="geometric-background pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/geometric-element-left-dy.svg"
        alt=""
        className="geometric-element-img geometric-element-left-img absolute top-0 h-auto w-[clamp(400px,43.75vw,630px)] max-w-none"
        draggable={false}
      />
      <img
        src="/geometric-element-right.svg"
        alt=""
        className="geometric-element-img geometric-element-right-img absolute bottom-0 h-auto w-[clamp(400px,43.75vw,630px)] max-w-none"
        draggable={false}
      />
    </div>
  );
}
