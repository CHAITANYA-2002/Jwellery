import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredArtifacts = [
  {
    name: "The Aurelius Chain",
    titleLines: ["The Aurelius", "Chain"],
    price: "$1,240",
    material: "SILVER ALLOY | 18K GOLD PLATED",
    image: "/figmaAssets/the-aurelius-chain---detailed-gold-link-necklace.png",
  },
  {
    name: "Molten Hoops",
    titleLines: ["Molten Hoops"],
    price: "$890",
    material: "SILVER ALLOY | 18K GOLD PLATED",
    image: "/figmaAssets/molten-hoops---textured-gold-earrings.png",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <main className="relative w-full">
      <section className="relative flex min-h-[751px] w-full items-end overflow-hidden border-b-[3px] border-[#1d1c12] bg-[#fef9e9]">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url(/figmaAssets/close-up-of-artisanal-gold-jewelry-on-a-person.png)] bg-cover bg-[50%_50%]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(29,28,18,0.6)_0%,rgba(29,28,18,0)_100%)]" />
        </div>
        <div className="relative z-10 w-full px-6 py-12">
          <div className="mx-auto flex w-full max-w-[1920px] flex-col items-start gap-8">
            <header className="flex w-full max-w-2xl flex-col items-start">
              <h1 className="[font-family:'Noto_Serif',Helvetica] text-6xl font-normal leading-[75px] tracking-[-3.00px] text-[#fef9e9]">
                Gold In Every
                <br />
                Hand
              </h1>
            </header>
            <div className="flex w-full flex-col items-start gap-4">
              <Button className="h-auto rounded-none border-2 border-[#1d1c12] bg-[#795900] px-10 py-5 [font-family:'Manrope',Helvetica] text-sm font-bold leading-5 tracking-[1.40px] text-white hover:bg-[#6d5100]">
                EXPLORE COLLECTION
              </Button>
              <Button
                variant="outline"
                className="h-auto rounded-none border-2 border-[#fef9e9] bg-transparent px-10 py-5 [font-family:'Manrope',Helvetica] text-sm font-bold leading-5 tracking-[1.40px] text-[#fef9e9] hover:bg-[#fef9e9] hover:text-[#1d1c12]"
              >
                THE STORY
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f8f3e4] px-6 py-24">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col items-start gap-16">
          <header className="flex w-full items-end">
            <div className="flex flex-1 flex-col items-start">
              <h2 className="[font-family:'Noto_Serif',Helvetica] text-4xl font-normal leading-10 tracking-[0] text-[#1d1c12]">
                Featured Artifacts
              </h2>
            </div>
          </header>
          <div className="grid w-full grid-cols-1 gap-12">
            {featuredArtifacts.map((artifact) => (
              <Card
                key={artifact.name}
                className="rounded-none border-[3px] border-[#1d1c12] bg-white shadow-none"
              >
                <CardContent className="p-0">
                  <div className="border-b-[3px] border-[#1d1c12]">
                    <div
                      className="h-[417px] w-full bg-cover bg-[50%_50%]"
                      style={{ backgroundImage: `url(${artifact.image})` }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-4 p-8">
                    <div className="flex w-full items-start justify-between gap-4">
                      <h3 className="[font-family:'Noto_Serif',Helvetica] text-3xl font-normal leading-9 tracking-[0] text-[#1d1c12]">
                        {artifact.titleLines.map((line, index) => (
                          <span key={`${artifact.name}-line-${index}`}>
                            {line}
                            {index < artifact.titleLines.length - 1 && <br />}
                          </span>
                        ))}
                      </h3>
                      <p className="[font-family:'Manrope',Helvetica] whitespace-nowrap text-xl font-normal leading-7 tracking-[0] text-[#795900]">
                        {artifact.price}
                      </p>
                    </div>
                    <p className="[font-family:'Manrope',Helvetica] text-xs font-bold leading-4 tracking-[1.20px] text-[#43664b]">
                      {artifact.material}
                    </p>
                    <Button
                      variant="outline"
                      className="h-auto w-full rounded-none border-2 border-[#1d1c12] bg-transparent px-4 py-4 [font-family:'Manrope',Helvetica] text-xs font-bold leading-4 tracking-[1.20px] text-[#1d1c12] hover:bg-[#1d1c12] hover:text-white"
                    >
                      ACQUIRE ITEM
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full border-y-4 border-[#1d1c12] bg-[#43664b] py-24">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-16 px-6">
          <div className="flex w-full flex-col items-start gap-6">
            <header className="flex w-full flex-col items-start gap-6">
              <p className="[font-family:'Manrope',Helvetica] text-xs font-bold leading-4 tracking-[4.80px] text-[#ffdea0]">
                COMMISSIONED WORK
              </p>
              <h2 className="[font-family:'Noto_Serif',Helvetica] text-5xl font-normal leading-[60px] tracking-[0] text-[#fef9e9]">
                Customisation
                <br />
                available
              </h2>
            </header>
            <p className="max-w-md [font-family:'Manrope',Helvetica] text-lg font-normal leading-[29.2px] tracking-[0] text-[#fef9e9cc]">
              Every piece tells a unique story. Work
              <br />
              directly with our master artisans to
              <br />
              create a legacy piece designed
              <br />
              exclusively for you.
            </p>
            <Button className="h-auto rounded-none border-2 border-[#fef9e9] bg-[#795900] px-12 py-6 [font-family:'Manrope',Helvetica] text-base font-bold leading-6 tracking-[1.60px] text-white hover:bg-[#6d5100]">
              BOOK CONSULTATION
            </Button>
          </div>
          <div className="w-full border-[10px] border-[#79590033] p-4">
            <div className="h-[290px] w-full bg-[url(/figmaAssets/jeweler-working-on-a-custom-piece.png)] bg-cover bg-[50%_50%]" />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#e7e2d3] px-0 py-24">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center px-6">
          <div className="relative z-[1] flex flex-col items-start pb-12">
            <div className="relative inline-flex flex-col items-start">
              <div className="absolute -left-4 -top-4 h-12 w-12 bg-[#795900]" />
              <div className="relative h-32 w-32 bg-[url(/figmaAssets/the-founder-portrait.png)] bg-cover bg-[50%_50%]" />
              <div className="absolute -bottom-4 -right-4 h-12 w-12 border-2 border-[#1d1c12]" />
            </div>
          </div>
          <figure className="inline-flex max-w-screen-md flex-col items-start gap-8">
            <blockquote className="w-full text-center [font-family:'Noto_Serif',Helvetica] text-3xl font-normal leading-[41.2px] tracking-[0] text-[#1d1c12]">
              &quot;The beauty of Mani
              <br />
              D&apos;Oro lies in the
              <br />
              intentional
              <br />
              imperfection. We do not
              <br />
              chase machine-made
              <br />
              precision; we chase the
              <br />
              soul of the hand.&quot;
            </blockquote>
            <figcaption className="flex w-full flex-col items-start gap-1">
              <div className="flex w-full flex-col items-center">
                <p className="[font-family:'Manrope',Helvetica] text-center text-xs font-bold leading-4 tracking-[1.20px] text-[#795900]">
                  ELENA MORETTI
                </p>
              </div>
              <div className="flex w-full flex-col items-center">
                <p className="[font-family:'Manrope',Helvetica] text-center text-[10px] font-normal leading-[15px] tracking-[1.00px] text-[#43664b]">
                  FOUNDER &amp; CREATIVE DIRECTOR
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="h-1 w-full bg-[linear-gradient(90deg,rgba(121,89,0,1)_0%,rgba(218,172,69,1)_50%,rgba(121,89,0,1)_100%)]" />
    </main>
  );
};
