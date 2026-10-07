"use client";

import React from "react";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Animation Variants
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

const Executives = () => {
  const directors = [
    {
      name: "Mr Otunba Sola Mogaji, FCA",
      title: "Director",
    },
    {
      name: "Alhaji Rasaki Muritala, Bsc, FCA, FCTI",
      title: "Director",
    },
    {
      name: "Asiwaju Kunle Kalejaye SAN",
      title: "(Chairman Board of Directors)",
    },
    {
      name: "Chief C.A Ogunkoya",
      title: "Director",
    },
    {
      name: "Mr Micheal Owope FCA",
      title: "Independent Director",
    },
    {
      name: "Mr Sunmola J. Olawale MCIB, FCIB",
      title: "Director",
    },
  ];

  const executive = [
    {
      name: "Mr Odegbemi Benjamin O",
      title: "(Managing Director)",
    },
    {
      name: "Mrs Sodipo Abosede Oyindamola",
      title: "(Branch Manager)",
    },
    {
      name: "Mr Adebajo Abiodun Emmanuel",
      title: "(Head of Operations)",
    },
    {
      name: "Mrs Akinwande Abosede",
      title: "(Head of IT)",
    },
    {
      name: "Mr Adeola Taiwo",
      title: "(Head of Credit)",
    },
    {
      name: "Mrs Oluwo Olayinka Abosede",
      title: "(Company Secretary)",
    },
  ];

  return (
    <section
      className={`${ibmPlexSans.className} bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24`}
    >
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            BOARD OF DIRECTORS
        ====================================================== */}
        <div>
          {/* Section Heading */}
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39246a]">
              Leadership & Governance
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Board of Directors
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 tracking-wide text-gray-600 sm:text-base">
              Our Board provides strategic direction, strong governance, and
              responsible oversight, ensuring that Catland remains committed to
              sound financial practices and sustainable growth.
            </p>
          </motion.div>

          {/* Board Grid */}
          <motion.div 
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {directors?.map(({ name, title }, index) => {
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/4.5] overflow-hidden bg-[#39246a]/5">
                    <div className="flex h-full items-center justify-center text-sm text-gray-400">
                      <Image
                        src={`/direc_${index + 1}.jpeg`}
                        alt={`Director ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-[#39246a] shadow-sm">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <p className="mt-1 text-sm font-medium text-[#39246a]">
                      {title}
                    </p>
                    <div className="mt-5 h-px bg-gray-100" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* =====================================================
            EXECUTIVE MANAGEMENT
        ====================================================== */}
        <div className="mt-24 border-t border-gray-100 pt-20 lg:mt-32">
          {/* Section Heading */}
          <motion.div 
            className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39246a]">
                Management Team
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Executive Leadership
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 tracking-wide text-gray-600 lg:justify-self-end">
              Our executive team brings together experienced professionals
              responsible for translating our strategy into meaningful results
              and delivering value to the customers and communities we serve.
            </p>
          </motion.div>

          {/* Executive Grid */}
          <motion.div 
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {executive?.map(({ name, title }, index) => {
              return (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <div className="relative aspect-[3/3.5] overflow-hidden rounded-3xl bg-[#39246a]/5">
                    <div className="flex h-full items-center justify-center text-sm text-gray-400">
                      <Image
                        src={`/exec_${index + 1}.jpg`}
                        alt={`Executive ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16">
                      <span className="text-xs font-medium uppercase tracking-wider text-white/70">
                        Executive Management
                      </span>
                    </div>
                  </div>

                  <div className="px-2 pt-5">
                    <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                    <p className="mt-1 text-sm font-medium text-[#39246a]">
                      {title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Executives;