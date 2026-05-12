export const NavbarSection = (): JSX.Element => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 bg-[#fef9e9] border-b-[3px] border-[#1d1c12]">
      <nav className="flex items-center gap-10">
        <a
          href="#collection"
          data-testid="link-collection"
          className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.40px] text-[#1d1c12] hover:text-[#795900] transition-colors"
        >
          COLLECTION
        </a>
        <a
          href="#commission"
          data-testid="link-commission"
          className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.40px] text-[#1d1c12] hover:text-[#795900] transition-colors"
        >
          COMMISSION
        </a>
      </nav>

      <a href="/" data-testid="link-logo" className="absolute left-1/2 -translate-x-1/2">
        <h1 className="[font-family:'Noto_Serif',Helvetica] text-2xl font-normal tracking-[0] text-[#1d1c12]">
          Mani D&apos;Oro
        </h1>
      </a>

      <nav className="flex items-center gap-10">
        <a
          href="#story"
          data-testid="link-story"
          className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.40px] text-[#1d1c12] hover:text-[#795900] transition-colors"
        >
          THE STORY
        </a>
        <a
          href="#contact"
          data-testid="link-contact"
          className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.40px] text-[#1d1c12] hover:text-[#795900] transition-colors"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
};
