"use client";

import React from "react";
import { IBM_Plex_Sans } from "next/font/google";
import MissionVision from "@/components/mission";
import { motion } from "framer-motion";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Animation Variants for clean, reusable animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const Story = () => {
  return (
    <div className={`${ibmPlexSans.className} mt-10 px-4 lg:px-10`}>
      <div className="mx-auto max-w-7xl mb-10">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39246a]/70">
            Our Journey
          </span>

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#39246a] sm:text-4xl lg:text-5xl">
            15+ Years of Transformation:
            <span className="block">Our Journey of Impact and Growth</span>
          </h1>

          <p className="mt-5 text-sm leading-relaxed tracking-wide text-gray-600 sm:text-base lg:text-lg">
            From a community bank to a licensed microfinance institution,
            Catland has evolved with a commitment to financial inclusion, local
            enterprise, and sustainable socio-economic development.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Timeline / Milestones */}
          <motion.div 
            className="rounded-3xl bg-[#39246a] p-6 text-white mt-4 md:mt-0 sm:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-xl font-semibold sm:text-2xl">
              Key Milestones
            </motion.h2>

            <div className="mt-8 space-y-8">
              {/* 1991 */}
              <motion.div variants={fadeInUp} className="relative border-l border-white/30 pl-6">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-white" />
                <p className="text-sm font-semibold text-white/70">26 March 1991</p>
                <h3 className="mt-1 text-lg font-semibold">The Beginning</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Incorporated as Ilese Community Bank Nigeria Limited.
                </p>
              </motion.div>

              {/* 2007 */}
              <motion.div variants={fadeInUp} className="relative border-l border-white/30 pl-6">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-white" />
                <p className="text-sm font-semibold text-white/70">18 July 2007</p>
                <h3 className="mt-1 text-lg font-semibold">Microfinance Transformation</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Registered as Catland Microfinance Bank Limited with RC No. 162074.
                </p>
              </motion.div>

              {/* CBN */}
              <motion.div variants={fadeInUp} className="relative border-l border-white/30 pl-6">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-white" />
                <p className="text-sm font-semibold text-white/70">25 September 2007</p>
                <h3 className="mt-1 text-lg font-semibold">CBN Operating License</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Obtained a provisional operating license from the Central Bank
                  of Nigeria and commenced operations.
                </p>
              </motion.div>

              {/* Erunwon */}
              <motion.div variants={fadeInUp} className="relative pl-6">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-white" />
                <h3 className="text-lg font-semibold">Expanding Our Reach</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Established a branch in Erunwon, Ogun State, with the
                  requisite approval from the Central Bank of Nigeria.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Story / Description */}
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#39246a]">
                Who We Are
              </span>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                Building financial opportunities at the grassroots
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6 space-y-5 text-sm leading-8 tracking-wide text-gray-600 sm:text-base">
              <p>
                Catland MFB was incorporated on 26th March 1991 as Ilese
                Community Bank Nigeria Limited. It was subsequently converted to
                a microfinance bank and registered as Catland Microfinance Bank
                Limited with RC No. 162074 on 18th July 2007.
              </p>
              <p>
                The bank obtained a provisional operating license from the
                Central Bank of Nigeria (CBN) on 25th September 2007 and
                commenced operations as a microfinance bank.
              </p>
              <p>
                Today, Catland provides microfinance banking services including
                savings, credit, and other permissible financial services to
                economically active low-income individuals, micro enterprises,
                and small and medium-sized enterprises (SMEs).
              </p>
            </motion.div>

            {/* Impact Box */}
            <motion.div variants={fadeInUp} className="mt-8 rounded-2xl border border-[#39246a]/10 bg-[#39246a]/5 p-5 sm:p-6">
              <p className="text-base font-medium leading-relaxed text-[#39246a] sm:text-lg">
                Our mission is to promote financial inclusion, support local
                businesses, and foster sustainable socio-economic development
                across the communities we serve.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="rounded-2xl bg-[#39246a]/5 p-5 text-center">
            <p className="text-3xl font-bold text-[#39246a]">15+</p>
            <p className="mt-1 text-sm text-gray-600">Years of Transformation</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-2xl bg-[#39246a]/5 p-5 text-center">
            <p className="text-3xl font-bold text-[#39246a]">1991</p>
            <p className="mt-1 text-sm text-gray-600">Founded</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-2xl bg-[#39246a]/5 p-5 text-center">
            <p className="text-3xl font-bold text-[#39246a]">SMEs</p>
            <p className="mt-1 text-sm text-gray-600">Supporting Local Businesses</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Wrapping the custom component so it fades in too */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <MissionVision />
      </motion.div>

      <section className={`${ibmPlexSans.className} py-16 lg:px-10 lg:py-24`}>
        <div className="mx-auto">
          {/* Section Header */}
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39246a]">
              Our Core Values
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              The principles behind
              <span className="text-[#39246a]"> every decision we make.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 tracking-wide text-gray-600 sm:text-base">
              Our values define how we serve our customers, support businesses,
              and create meaningful impact in the communities we serve.
            </p>
          </motion.div>

          {/* Values Layout */}
          <motion.div 
            className="mt-14 grid gap-5 lg:grid-cols-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Featured Value */}
            <motion.div 
              variants={slideInLeft} 
              className="relative overflow-hidden rounded-[2rem] bg-[#39246a] p-8 text-white sm:p-10 lg:col-span-5 lg:p-12"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[40px] border-white/5" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[50px] border-white/5" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="text-sm font-medium tracking-[0.2em] text-white/60">01</span>
                  <h3 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl">
                    Customer<br />First
                  </h3>
                  <p className="mt-6 max-w-sm text-sm leading-7 text-white/75 sm:text-base">
                    We put our customers at the heart of everything we do,
                    creating simple, quality financial solutions that respond to
                    their real needs and aspirations.
                  </p>
                </div>

                <div className="mt-12">
                  <div className="h-px w-full bg-white/20" />
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">
                    People • Trust • Service
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Other Values */}
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {/* Value 02 */}
              <motion.div variants={fadeInUp} className="group rounded-[2rem] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#39246a]/20 hover:shadow-xl sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-[#39246a]/40">02</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39246a]/10 text-sm font-bold text-[#39246a] transition-colors group-hover:bg-[#39246a] group-hover:text-white">
                    ↗
                  </div>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">Integrity</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  We build lasting relationships through honesty,
                  accountability, responsible practices, and transparent
                  operations.
                </p>
              </motion.div>

              {/* Value 03 */}
              <motion.div variants={fadeInUp} className="group rounded-[2rem] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#39246a]/20 hover:shadow-xl sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-[#39246a]/40">03</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39246a]/10 text-sm font-bold text-[#39246a] transition-colors group-hover:bg-[#39246a] group-hover:text-white">
                    ↗
                  </div>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">Accessibility</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  We work to bridge the financial gap by making reliable and
                  affordable financial services accessible to individuals and
                  businesses.
                </p>
              </motion.div>

              {/* Value 04 */}
              <motion.div variants={fadeInUp} className="group rounded-[2rem] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#39246a]/20 hover:shadow-xl sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-[#39246a]/40">04</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39246a]/10 text-sm font-bold text-[#39246a] transition-colors group-hover:bg-[#39246a] group-hover:text-white">
                    ↗
                  </div>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">Innovation</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  We continually seek smarter and more effective ways to deliver
                  financial solutions that evolve with our customers and their
                  businesses.
                </p>
              </motion.div>

              {/* Value 05 */}
              <motion.div variants={fadeInUp} className="group rounded-[2rem] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#39246a]/20 hover:shadow-xl sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-[#39246a]/40">05</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39246a]/10 text-sm font-bold text-[#39246a] transition-colors group-hover:bg-[#39246a] group-hover:text-white">
                    ↗
                  </div>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-900">Empowerment</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  We provide the financial support and opportunities individuals
                  and MSMEs need to achieve stability, grow their businesses,
                  and create wealth.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Statement */}
          <motion.div 
            className="mt-6 rounded-[2rem] border border-[#39246a]/10 bg-[#39246a]/5 px-6 py-8 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#39246a]/60">
                Our Commitment
              </p>
              <p className="mt-2 max-w-3xl text-lg font-semibold leading-relaxed text-[#39246a] sm:text-xl">
                Creating lasting financial value for people, businesses, and
                communities.
              </p>
            </div>

            <div className="mt-5 hidden shrink-0 lg:block">
              <div className="h-12 w-12 rounded-full border border-[#39246a]/20" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Story;
