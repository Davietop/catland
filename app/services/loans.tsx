"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Banknote, 
  HandCoins, 
  BriefcaseBusiness, 
  Car,
  CheckCircle2
} from 'lucide-react';
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const loanProducts = [
  {
    tabTitle: "Payroll Lending",
    cardTitle: "Payroll Lending",
    description: "A loan product specifically for salary earners who do not domicile their salary with Catland MFB.",
    features: [
      "Direct salary deduction for repayment",
      "Quick enrollment and processing"
    ],
    ctaText: "LEARN MORE",
    icon: <Banknote className="w-16 h-16 text-[#F3F4F6] drop-shadow-md" strokeWidth={1.5} />,
    theme: {
      primary: "bg-teal-600",
      light: "bg-teal-50",
      gradient: "from-teal-400 to-teal-600",
      text: "text-teal-800",
      button: "bg-teal-600 hover:bg-teal-700"
    },
    stepClass: "lg:mt-0" // Step 1
  },
  {
    tabTitle: "Micro Loan",
    cardTitle: "Catland Micro Loan (CML)",
    description: "A weekly savings scheme tailored to provide essential business funding.",
    features: [
      "Contribute 10%, we loan 100% of required funds",
      "Repayment spread over 12 weeks",
      "Flexibility in collateral taken"
    ],
    ctaText: "APPLY NOW",
    icon: <HandCoins className="w-16 h-16 text-[#F3F4F6] drop-shadow-md" strokeWidth={1.5} />,
    theme: {
      primary: "bg-amber-500",
      light: "bg-amber-50",
      gradient: "from-amber-400 to-amber-500",
      text: "text-amber-700",
      button: "bg-amber-500 hover:bg-amber-600"
    },
    stepClass: "lg:mt-12" // Step 2
  },
  {
    tabTitle: "Term Loan",
    cardTitle: "Short/Medium Term Loan",
    description: "Designed to boost working capital for active Current Account holders.",
    features: [
      "Duration between 3 to 12 months",
      "Low interest on reasonable turnover",
      "Regular repayment reduces overall interest"
    ],
    ctaText: "GET RATES",
    icon: <BriefcaseBusiness className="w-16 h-16 text-[#F3F4F6] drop-shadow-md" strokeWidth={1.5} />,
    theme: {
      primary: "bg-fuchsia-800",
      light: "bg-fuchsia-50",
      gradient: "from-fuchsia-700 to-fuchsia-900",
      text: "text-fuchsia-900",
      button: "bg-fuchsia-800 hover:bg-fuchsia-900"
    },
    stepClass: "lg:mt-24" // Step 3
  },
  {
    tabTitle: "Asset Finance",
    cardTitle: "Asset Finance",
    description: "Purchase commercial or domestic assets with our financing support.",
    features: [
      "6 to 12 months duration",
      "Low interest rate",
      "Assets bought in bank's name, ownership reverts upon payment"
    ],
    ctaText: "FINANCE ASSET",
    icon: <Car className="w-16 h-16 text-[#F3F4F6] drop-shadow-md" strokeWidth={1.5} />,
    theme: {
      primary: "bg-emerald-700",
      light: "bg-emerald-50",
      gradient: "from-emerald-600 to-emerald-800",
      text: "text-emerald-800",
      button: "bg-emerald-700 hover:bg-emerald-800"
    },
    stepClass: "lg:mt-12" // Step 4 (Rising back up)
  }
];

export default function LoansWaterfall() {
  return (
    <section className={`${ibmPlexSans.className} relative h-fit bg-white py-10 px-4 sm:px-6 lg:px-8 overflow-hidden `}>
      
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="0.5" className="text-amber-700" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative w-full mx-auto">
        
        {/* Section Header with Fade Up Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 lg:mb-14"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 drop-shadow-sm">
            Loans & Credit
          </h2>
          <p className="text-sm uppercase tracking-widest text-slate-600 font-semibold">
            Explore our comprehensive loans & credit portfolio
          </p>
        </motion.div>

        {/* Horizontal Waterfall Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-4 xl:gap-6 pb-12 w-full">
          
          {/* Continuous flowing timeline line behind cards (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent -z-10 transform -translate-y-1/2 opacity-50"></div>

          {loanProducts.map((product, index) => (
            <motion.div 
              key={index} 
              /* Staggered entrance animation */
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className={`w-full flex-1 flex flex-col items-center group transition-transform duration-500 hover:-translate-y-2 ${product.stepClass}`}
            >

              {/* Main Card Body */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-4 pb-8 w-full flex flex-col h-full relative z-20">
                
                {/* Visual Icon Block */}
                <div className={`w-full aspect-[4/3] rounded-2xl bg-[#3b266b] flex items-center justify-center mb-6 shadow-inner relative overflow-hidden`}>
                  {/* Subtle inner gloss effect */}
                  <div className="absolute inset-0 bg-white opacity-10 bg-gradient-to-b from-white/30 to-transparent"></div>
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                    {product.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col px-2">
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 leading-tight">
                    {product.cardTitle}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 min-h-[3rem] leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${product.theme.text}`} />
                        <span className="text-sm text-slate-700 font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}