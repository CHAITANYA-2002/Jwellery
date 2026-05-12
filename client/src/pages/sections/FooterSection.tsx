import { Separator } from "@/components/ui/separator";

const footerGroups = [
  {
    title: "The Brand",
    links: ["Brand Story", "Our Process", "Journal"],
  },
  {
    title: "Assistance",
    links: ["Contact", "Shipping", "Returns"],
  },
  {
    title: "Social",
    links: ["Instagram", "Pinterest"],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer id="contact" className="w-full border-t-[3px] border-[#1d1c12] bg-[#fef9e9]">
      <div className="mx-auto max-w-[1280px] px-12 pt-16 pb-10">
        <div className="grid grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <h2 className="[font-family:'Noto_Serif',Helvetica] text-2xl font-normal text-[#1d1c12]">
              Mani D&apos;Oro
            </h2>
            <p className="[font-family:'Manrope',Helvetica] text-sm font-normal leading-[1.8] text-[#43664b]">
              A digital atelier specializing in heritage-grade jewelry crafted for the modern individual.
            </p>
            <img
              src="/figmaAssets/container-1.svg"
              alt="Mani D'Oro signature"
              className="h-5 w-auto"
            />
          </div>

          {/* Nav Columns */}
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-6">
              <h3 className="[font-family:'Noto_Serif',Helvetica] text-lg font-normal text-[#795900]">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="[font-family:'Manrope',Helvetica] text-sm font-normal tracking-[1.20px] text-[#43664b] hover:text-[#1d1c12] transition-colors uppercase"
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
