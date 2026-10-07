import { IBM_Plex_Sans } from "next/font/google";

import Image from "next/image";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  display: "swap", 
});

export default function Hero() {
  return (
    <section className={`${ibmPlexSans.className} relative w-full mt-[60px] lg:mt-16 overflow-hidden`}>
      <div className="relative h-[500px] w-full md:h-[500px] lg:h-[700px]">
      
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto w-full px-2 md:px-10">
            <div className="flex items-center justify-center flex-col text-white">
             
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-center lg:text-6xl">
                Empowering People, Growing Businesses,<br className="hidden md:flex"/> & Strengthening
                Communities.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-center text-white/90 sm:text-lg md:text-xl">
                Accessible microfinance solutions designed to help individuals,
                microenterprises, and SMEs save,<br className="hidden lg:flex"/> access credit, and build
                sustainable businesses.
              </p>

               <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm font-bold text-
                [#39246a] bg-white/90 backdrop-blur-md py-3 px-6 lg:px-8 rounded-full border border-white/20 shadow-sm">
                  
                  <span className="text-[#39246a]">Licensed by</span>
                  
                  {/* Template: Coat of Arms Logo */}
                  <Image 
                    src="/cbn.svg" 
                    alt="Licensed Logo 1" 
                    width={1}
                    height={1}
                    className="h-6 lg:h-8 w-auto object-contain" 
                  />
                  
                  {/* Template: CBN Shield Logo */}
                  <Image 
                    src="/ndpr.png" 
                    alt="CBN Logo" 
                      width={1}
                    height={1}
                    className="h-6 lg:h-8 w-auto object-contain" 
                  />

                  <span className="text-[#39246a] ml-2 md:ml-4">Insured by</span>
                  
                  {/* Template: NDIC Logo */}
                  <Image
                    src="/ndic-.svg" 
                    alt="NDIC Logo" 
                      width={1}
                    height={1}
                    className="h-6 lg:h-8 w-[60px] object-contain" 
                  />

                </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
