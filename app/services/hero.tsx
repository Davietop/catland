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
               
                 
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-center ">
               Understanding your goals,  Crafting your solutions <br className="hidden md:flex"/>& Securing your future.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-center text-white/90 sm:text-lg md:text-xl">
               We make microfinance banking simple for you without compromising on quality.<br/> Explore our Special Savings Schemes and Loan Products.
              </p>

               <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm font-bold text-[#39246a] bg-white/90 cursor-pointer backdrop-blur-md py-3 px-6 rounded-full border border-white/20 ">
                  
                 Explore our services

                </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
