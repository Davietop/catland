"use client"; // Required if you are using Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import {
  PiggyBank,
  Banknote,
  Car,
  Wallet,
  Landmark,
  CreditCard,
  GraduationCap,
  BookMarked,
  Lock,
  ArrowRightLeft,
} from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// --- ANIMATION VARIANTS ---

// Controls the staggered timing of the cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // 0.15s delay between each card animating in
    },
  },
};

// Controls the actual animation of each individual card
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

// Controls the header text animation
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProductsServices = () => {
  const services = [
    {
      title: "Modified Daily Contribution (MDC)",
      description:
        "Flexible, incremental daily savings tailored for active traders and micro-businesses.",
      icon: <PiggyBank className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Catland Micro Loan (CML)",
      description:
        "Accessible, fast-turnaround financing to boost working capital for growing enterprises.",
      icon: <Banknote className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
    },
    {
      title: "Asset Finance Loan",
      description:
        "Structured funding designed specifically for the acquisition of equipment and fixed assets.",
      icon: <Car className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
    },
    {
      title: "Zero Balance Savings Account",
      description:
        "A frictionless entry-level account requiring no minimum operating balance.",
      icon: <Wallet className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Ordinary Savings Account",
      description:
        "Our standard, highly secure savings account featuring competitive interest yields.",
      icon: <Landmark className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Catland Payroll Lending",
      description:
        "Salary-backed cash advances and personal loans tailored for employed professionals.",
      icon: <CreditCard className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
    },
    {
      title: "Catland Greater Tomorrow Savings",
      description:
        "A dedicated, long-term savings plan designed to secure your children's educational future.",
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
      bgColor: "bg-amber-50",
    },
    {
      title: "Current Account (With Cheques)",
      description:
        "A highly flexible checking account built to handle daily corporate or personal transaction volumes.",
      icon: <BookMarked className="w-6 h-6 text-slate-600" />,
      bgColor: "bg-slate-50",
    },
    {
      title: "Terms Deposit Account",
      description:
        "High-yield, fixed-term investment accounts to maximize returns on surplus funds.",
      icon: <Lock className="w-6 h-6 text-amber-600" />,
      bgColor: "bg-amber-50",
    },
    {
      title: "Inland Money Transfers",
      description:
        "Fast, secure, and reliable domestic funds routing and remittance services.",
      icon: <ArrowRightLeft className="w-6 h-6 text-slate-600" />,
      bgColor: "bg-slate-50",
    },
  ];

  return (
    <section className={`${ibmPlexSans.className} py-16 bg-white overflow-hidden`}>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        
        {/* Animated Header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          

           
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 drop-shadow-sm">
           Financial Services
          </h2>
          <p className="text-sm uppercase tracking-widest text-slate-600 font-semibold">
                Comprehensive financial solutions tailored to support your personal
            growth and business success.
          </p>
       
        </motion.div>

        {/* Animated Grid Container */}
        <motion.div
          className="flex flex-wrap items-stretch gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }} // Lifts the card up slightly on hover
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex flex-col bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-lg ${service.bgColor} flex-shrink-0 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsServices;