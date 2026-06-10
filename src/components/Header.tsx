export default function Header() {
  return (
    <header className="flex shrink-0 gap-[var(--col-gap)] items-center mb-[var(--header-panel-gap)]">
      <div className="layout-sidebar flex justify-center">
        <div className="profile-photo-brackets shrink-0">
          <div className="profile-photo-image-box">
            <div className="profile-photo-image-clip">
              <img
                src="/portfolio-selfie.png"
                alt="Watisunep Ozukum"
                className="profile-photo-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 min-w-0 gap-[var(--col-gap)] items-end">
        <div className="header-title-column flex-1 min-w-0 flex flex-col gap-1">
          <h1 className="header-title-name font-display font-bold text-primary leading-tight whitespace-nowrap uppercase">
            Watisunep Ozukum
          </h1>
          <p className="font-display font-bold text-primary text-heading-role leading-tight uppercase">
            Product Designer / Design Engineer
          </p>
        </div>
        <div className="layout-right shrink-0" aria-hidden="true" />
      </div>
    </header>
  );
}
