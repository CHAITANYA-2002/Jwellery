import { NavbarSection } from "./sections/NavbarSection";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";

export const ManiDOroHome = (): JSX.Element => {
  return (
    <div className="w-full bg-[#fef9e9]">
      <NavbarSection />
      <div className="pt-[73px]">
        <MainContentSection />
        <FooterSection />
      </div>
    </div>
  );
};
