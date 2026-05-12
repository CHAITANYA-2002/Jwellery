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
    <footer id="contact" className="w-full border-t-4 border-[#1d1c12] bg-[#f8f3e4]">
      <div className="mx-auto w-full max-w-[1600px] px-16 pt-20 pb-10">

        <div className="grid grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col gap-8">
            <h2 className="[font-family:'Noto_Serif',Helvetica] text-2xl font-normal text-[#1d1c12]">
              Mani D&apos;Oro
            </h2>
            <p className="[font-family:'Manrope',Helvetica] text-sm font-normal leading-[1.7] text-[#43664b] max-w-[240px]">
              A digital atelier specializing in heritage-grade jewelry crafted for the modern individual.
            </p>
            <img
              className="h-5 w-auto"
              alt="Mani D'Oro signature"
              src="/figmaAssets/container-1.svg"
            />
          </div>

          {footerGroups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="flex flex-col gap-8"
            >
              <h3 className="[font-family:'Noto_Serif',Helvetica] text-lg font-normal text-[#795900]">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="[font-family:'Manrope',Helvetica] text-sm font-normal tracking-[1.40px] text-[#43664b] hover:text-[#1d1c12] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="bg-[#1d1c121a] mb-8" />

        <div className="flex items-center justify-between">
          <p className="[font-family:'Manrope',Helvetica] text-[10px] font-normal tracking-[2px] text-[#43664b]">
            © 2024 MANI D&apos;ORO. ALL RIGHTS RESERVED.
          </p>
          <p className="[font-family:'Manrope',Helvetica] text-[10px] font-normal tracking-[2px] text-[#43664b]">
            WEBSITE MANAGED BY HQBLOCKS.IN
          </p>
        </div>
      </div>
    </footer>
  );
};
