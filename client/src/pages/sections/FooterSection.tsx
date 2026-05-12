import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerGroups = [
  {
    title: "The Brand",
    links: ["BRAND STORY", "OUR PROCESS", "JOURNAL"],
  },
  {
    title: "Assistance",
    links: ["CONTACT", "SHIPPING", "RETURNS"],
  },
  {
    title: "Social",
    links: ["INSTAGRAM", "PINTEREST"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full self-stretch border-t-4 border-[#1d1c12] bg-[#f8f3e4]">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col px-12 py-20">
        <div className="flex w-full flex-col gap-12">
          <section className="flex flex-col items-start">
            <h2 className="[font-family:'Liberation_Serif-Regular',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#1d1c12]">
              Mani D&apos;Oro
            </h2>
            <p className="mt-[31px] max-w-[289.38px] [font-family:'Manrope',Helvetica] text-sm font-normal leading-[22.8px] tracking-[0] text-[#43664b]">
              A digital atelier specializing in heritage-grade
              <br />
              jewelry crafted for the modern individual.
            </p>
            <img
              className="mt-[42px] h-5 w-full"
              alt="Container"
              src="/figmaAssets/container-1.svg"
            />
          </section>
          {footerGroups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="flex w-full flex-col items-start gap-6"
            >
              <h3 className="[font-family:'Noto_Serif',Helvetica] text-lg font-normal leading-7 tracking-[0] text-[#795900]">
                {group.title}
              </h3>
              <ul className="flex w-full flex-col items-start gap-4">
                {group.links.map((link) => (
                  <li key={link} className="w-full">
                    <Button
                      variant="ghost"
                      className="h-auto p-0 [font-family:'Manrope',Helvetica] text-sm font-normal leading-5 tracking-[1.40px] text-[#43664b] hover:bg-transparent hover:text-[#43664b] justify-start"
                    >
                      {link}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="w-full px-12 py-8">
        <Separator className="mb-8 bg-[#1d1c121a]" />
        <div className="flex w-full justify-center">
          <p className="w-[272.75px] text-center [font-family:'Manrope',Helvetica] text-[10px] font-normal leading-[15px] tracking-[2px] text-[#43664b]">
            © 2024 MANI D&apos;ORO. WEBSITE MANAGED BY
            <br />
            HQBLOCKS.IN
          </p>
        </div>
      </div>
    </footer>
  );
};
