import { IBM_Plex_Sans } from "next/font/google";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

interface HeroTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export default function zHero({ activeTab, onTabChange }: HeroTabsProps) {
  const plugin = Autoplay({
    delay: 2000,
    stopOnInteraction: true,
  });
  return (
    <section
      className={`${ibmPlexSans.className} relative w-full mt-[100px] lg:mt-[150px]  overflow-hidden`}
    >
      {/* 1. Replaced fixed h-[500px] with min-h for mobile so content doesn't overflow */}
      <div className="relative  w-full  h-[600px] md:h-[550px]">
        {/* 2. Added bottom padding (pb-[280px]) on mobile to guarantee the absolute Carousel won't overlap the text */}
        <div className=" flex flex-col items-center justify-center   lg:pb-0">
          <div className="mx-auto w-full px-4 ">
            <div className="flex items-center justify-center flex-col text-white">
              <h1 className="text-3xl font-bold  leading-tight sm:text-4xl text-center  mx-auto">
                Driving Financial Inclusion & Fostering Grassroots Growth
              </h1>

              <p className="mt-5 text-sm leading-relaxed text-center text-white/90 sm:text-base md:text-xl max-w-6xl  mx-auto mb-4">
                We provide accessible, high-quality microfinance solutions
                tailored for economically active individuals and MSMEs. At
                Catland, we do not just hold your money we actively support
                local businesses to build sustainable socio-economic development
                across Nigeria
              </p>

              <Tabs value={activeTab} onValueChange={onTabChange} className=" ">
                <TabsList
                  className="
      grid h-auto  grid-cols-2
      gap-2 rounded-2xl
      bg-[#39246a]/10 p-2
      sm:grid-cols-2
      md:grid-cols-3
      md:rounded-full
      md:bg-[#39246a]/10
      md:p-2
    "
                >
                  <TabsTrigger
                    value="story"
                    className={`
       rounded-full
        text-center text-sm font-medium
        whitespace-normal
        transition-all p-3
        sm:px-5 
        ${
          activeTab === "story"
            ? " !bg-white !text-[#39246a]  "
            : "!bg-transparent !text-white border-white hover:!bg-[#39246a]/10"
        }
      `}
                  >
                    The CATLAND story
                  </TabsTrigger>

                  <TabsTrigger
                    value="executives"
                    className={`
         rounded-full
        text-center text-sm font-medium
        whitespace-normal
        transition-all
        sm:px-5 
        ${
          activeTab === "executives"
            ? " !bg-white !text-[#39246a] "
            : "!bg-transparent !text-white border-white hover:!bg-[#39246a]/10"
        }
      `}
                  >
                    Boards and Executives
                  </TabsTrigger>

                

                  <TabsTrigger
                    value="awards"
                    className={`
         rounded-full 
        text-center text-sm font-medium
        whitespace-normal p-3
        transition-all
        sm:px-5 
        ${
          activeTab === "awards"
            ? " !bg-white !text-[#39246a] "
            : "!bg-transparent !text-white border-white hover:!bg-[#39246a]/10"
        }
      `}
                  >
                    Awards
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* 4. Moved Carousel out of the text div to make it sit flush with the main container */}
          <Carousel
            plugins={[plugin]}
            className="mx-auto relative top-[100px] md:top-[50px]  left-0 right-0 w-full  max-w-8xl px-2 md:px-10"
            onMouseEnter={plugin.stop}
            onMouseLeave={plugin.reset}
          >
            <CarouselContent className="-ml-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full h-[250px] sm:h-[300px] pl-4 sm:basis-1/2 lg:basis-1/4"
                >
                  <Card
                    className="relative h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat rounded-xl"
                    style={{
                      backgroundImage: `url('/catland_${index + 1}.jpeg')`,
                    }}
                  >
                    <CardContent className="relative z-10 flex h-full items-center justify-center p-6"></CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
