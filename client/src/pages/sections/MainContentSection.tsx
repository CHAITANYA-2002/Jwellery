import { Button } from "@/components/ui/button";

const featuredArtifacts = [
  {
    name: "The Aurelius Chain",
    price: "$1,240",
    material: "SILVER ALLOY | 18K GOLD PLATED",
    image: "/figmaAssets/the-aurelius-chain---detailed-gold-link-necklace.png",
  },
  {
    name: "Molten Hoops",
    price: "$890",
    material: "SILVER ALLOY | 18K GOLD PLATED",
    image: "/figmaAssets/molten-hoops---textured-gold-earrings.png",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <main className="relative w-full">

      {/* HERO */}
      <section className="relative flex h-screen w-full items-end overflow-hidden border-b-[3px] border-[#1d1c12]">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url(/figmaAssets/close-up-of-artisanal-gold-jewelry-on-a-person.png)] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(29,28,18,0.75)_0%,rgba(29,28,18,0.1)_60%,rgba(29,28,18,0)_100%)]" />
        </div>
        <div className="relative z-10 w-full px-16 pb-20">
          <div className="flex w-full items-end justify-between">
            <div className="flex flex-col items-start gap-10">
              <h1 className="[font-family:'Noto_Serif',Helvetica] text-[88px] font-normal leading-[1.0] tracking-[-4px] text-[#fef9e9]">
                Gold In Every
                <br />
                Hand
              </h1>
              <div className="flex items-center gap-4">
                <Button
                  data-testid="button-explore-collection"
                  className="h-auto rounded-none border-2 border-[#1d1c12] bg-[#795900] px-12 py-5 [font-family:'Manrope',Helvetica] text-sm font-bold leading-5 tracking-[1.40px] text-white hover:bg-[#6d5100]"
                >
                  EXPLORE COLLECTION
                </Button>
                <Button
                  data-testid="button-the-story"
                  variant="outline"
                  className="h-auto rounded-none border-2 border-[#fef9e9] bg-transparent px-12 py-5 [font-family:'Manrope',Helvetica] text-sm font-bold leading-5 tracking-[1.40px] text-[#fef9e9] hover:bg-[#fef9e9] hover:text-[#1d1c12]"
                >
                  THE STORY
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 text-right">
              <p className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[2px] text-[#ffdea0]">
                HERITAGE GRADE
              </p>
              <p className="[font-family:'Noto_Serif',Helvetica] text-lg font-normal text-[#fef9e9cc] max-w-[260px] leading-[1.6]">
                Handcrafted by master artisans since 1987
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTIFACTS */}
      <section id="collection" className="w-full bg-[#f8f3e4] px-16 py-28">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="flex w-full items-end justify-between mb-16">
            <h2 className="[font-family:'Noto_Serif',Helvetica] text-5xl font-normal tracking-[0] text-[#1d1c12]">
              Featured Artifacts
            </h2>
            <a
              href="#"
              data-testid="link-view-all"
              className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.40px] text-[#795900] border-b border-[#795900] pb-0.5 hover:text-[#1d1c12] hover:border-[#1d1c12] transition-colors"
            >
              VIEW ALL
            </a>
          </div>

          <div className="grid w-full grid-cols-2 gap-8">
            {featuredArtifacts.map((artifact) => (
              <article
                key={artifact.name}
                data-testid={`card-artifact-${artifact.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="group border-[3px] border-[#1d1c12] bg-white"
              >
                <div className="overflow-hidden border-b-[3px] border-[#1d1c12]">
                  <div
                    className="h-[520px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${artifact.image})` }}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col items-start gap-5 p-10">
                  <div className="flex w-full items-center justify-between">
                    <h3 className="[font-family:'Noto_Serif',Helvetica] text-3xl font-normal text-[#1d1c12]">
                      {artifact.name}
                    </h3>
                    <p className="[font-family:'Manrope',Helvetica] text-xl font-normal text-[#795900]">
                      {artifact.price}
                    </p>
                  </div>
                  <p className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.20px] text-[#43664b]">
                    {artifact.material}
                  </p>
                  <Button
                    data-testid={`button-acquire-${artifact.name.replace(/\s+/g, '-').toLowerCase()}`}
                    variant="outline"
                    className="h-auto w-full rounded-none border-2 border-[#1d1c12] bg-transparent px-4 py-4 [font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.20px] text-[#1d1c12] hover:bg-[#1d1c12] hover:text-white transition-colors"
                  >
                    ACQUIRE ITEM
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMISATION */}
      <section id="commission" className="w-full border-y-4 border-[#1d1c12] bg-[#43664b]">
        <div className="mx-auto w-full max-w-[1600px] grid grid-cols-2 items-stretch">
          <div className="flex flex-col justify-center gap-10 px-16 py-24">
            <p className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[4.80px] text-[#ffdea0]">
              COMMISSIONED WORK
            </p>
            <h2 className="[font-family:'Noto_Serif',Helvetica] text-6xl font-normal leading-[1.1] text-[#fef9e9]">
              Customisation
              <br />
              available
            </h2>
            <p className="[font-family:'Manrope',Helvetica] text-lg font-normal leading-[1.8] text-[#fef9e9cc] max-w-sm">
              Every piece tells a unique story. Work directly with our master artisans to create a legacy piece designed exclusively for you.
            </p>
            <div>
              <Button
                data-testid="button-book-consultation"
                className="h-auto rounded-none border-2 border-[#fef9e9] bg-[#795900] px-12 py-6 [font-family:'Manrope',Helvetica] text-base font-bold tracking-[1.60px] text-white hover:bg-[#6d5100]"
              >
                BOOK CONSULTATION
              </Button>
            </div>
          </div>

          <div className="relative border-l-4 border-[#1d1c12]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/figmaAssets/jeweler-working-on-a-custom-piece.png)" }}
            />
            <div className="absolute inset-0 bg-[#79590015]" />
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section id="story" className="w-full bg-[#e7e2d3] py-32 px-16">
        <div className="mx-auto w-full max-w-[1600px] flex items-center gap-24">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-16 w-16 bg-[#795900]" />
              <div
                className="relative h-56 w-56 bg-cover bg-center"
                style={{ backgroundImage: "url(/figmaAssets/the-founder-portrait.png)" }}
              />
              <div className="absolute -bottom-5 -right-5 h-16 w-16 border-2 border-[#1d1c12]" />
            </div>
          </div>

          <figure className="flex flex-col gap-10 max-w-2xl">
            <blockquote className="[font-family:'Noto_Serif',Helvetica] text-4xl font-normal leading-[1.4] text-[#1d1c12]">
              &quot;The beauty of Mani D&apos;Oro lies in the intentional imperfection. We do not chase machine-made precision; we chase the soul of the hand.&quot;
            </blockquote>
            <figcaption className="flex flex-col gap-1">
              <p className="[font-family:'Manrope',Helvetica] text-xs font-bold tracking-[1.20px] text-[#795900]">
                ELENA MORETTI
              </p>
              <p className="[font-family:'Manrope',Helvetica] text-[10px] font-normal tracking-[1.00px] text-[#43664b]">
                FOUNDER &amp; CREATIVE DIRECTOR
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="h-1 w-full bg-[linear-gradient(90deg,rgba(121,89,0,1)_0%,rgba(218,172,69,1)_50%,rgba(121,89,0,1)_100%)]" />
    </main>
  );
};
