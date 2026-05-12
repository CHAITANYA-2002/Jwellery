import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";

export const ManiDOroHome = (): JSX.Element => {
  return (
    <main className="w-full bg-[#fef9e9]">
      <MainContentSection />
      <FooterSection />
    </main>
  );
};
