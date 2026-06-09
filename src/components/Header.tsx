export default function Header() {
  return (
    <header className="flex shrink-0 gap-[var(--col-gap)] items-start">
      <div className="layout-sidebar flex justify-center mb-8">
        <div className="shrink-0 w-[clamp(100px,10.4vw,150px)] aspect-square border border-primary overflow-hidden">
          <img
            src="/portfolio-selfie.png"
            alt="Watisunep Ozukum"
            className="block w-full h-full object-cover grayscale-[20%]"
          />
        </div>
      </div>

      <div className="flex flex-1 min-w-0 gap-[var(--col-gap)] items-start">
        <div className="flex-1 min-w-0 flex flex-col gap-1 mb-8">
          <h1 className="font-display font-bold text-primary text-heading-name leading-tight whitespace-nowrap uppercase">
            Watisunep Ozukum
          </h1>
          <p className="font-display font-bold text-primary text-heading-role leading-tight uppercase">
            Design Engineer
          </p>
        </div>
        <div className="layout-right shrink-0" aria-hidden="true" />
      </div>
    </header>
  );
}
