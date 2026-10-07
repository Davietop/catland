"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  TrendingUp,
  GraduationCap,
  Landmark,
  Check,
} from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const savingsData = [
  {
    title: "Greater Tomorrow Savings",
    description:
      "Enhancing parents & guardians in facilitating their children's educational or business needs.",
    features: [
      "Minimum daily saving of ₦200",
      "Daily, weekly, or monthly contributions",
      "Minimum Tenor: 1 year with attractive interest",
    ],
    icon: <Users className="w-6 h-6 " />,
    headerColor: "bg-[#3b266b]",
    buttonStyle: "bg-[#39246a] text-white ",
  },
  {
    title: "Target Savings",
    description:
      "Save towards specific goals like a new phone, household items, car, school fees, or solar setup.",
    features: [
      "Open with zero balance",
      "5% interest after 6 months (no withdrawals)",
      "Zero maintenance charges",
    ],
    icon: <Target className="w-6 h-6" />,
    headerColor: "bg-[#3b266b]",
    buttonStyle: "bg-[#39246a] text-white ",
  },
  {
    title: "Fixed Investment",
    description:
      "Targeted at customers saving for building projects, weddings, or business expansion.",
    features: [
      "Minimum opening balance: ₦5,000",
      "Negotiable interest rates and duration",
      "Access to loans after 50% contribution",
    ],
    icon: <TrendingUp className="w-6 h-6 " />,
    headerColor: "bg-[#3b266b]",
    buttonStyle: "bg-[#39246a] text-white ",
  },
  {
    title: "Corper Savings",
    description:
      "A specialized account designed for Youth Corpers and students to build financial discipline.",
    features: [
      "Open with zero balance",
      "5% interest after 6 months of active saving",
      "Flexible daily, weekly, or monthly savings",
    ],
    icon: <GraduationCap className="w-6 h-6 " />,
    headerColor: "bg-[#3b266b]",
    buttonStyle: "bg-[#39246a] text-white ",
  },
  {
    title: "Term Deposit",
    description:
      "An investment account offering attractive interest rates depending on the amount and duration.",
    features: [
      "Highly competitive returns",
      "Receive or send money online easily",
    ],
    icon: <Landmark className="w-6 h-6 " />,
    headerColor: "bg-[#3b266b]",
    buttonStyle: "bg-[#39246a] text-white ",
  },
];

export default function SavingsInvestments() {
  return (
    <section
      className={`${ibmPlexSans.className} min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-8xl mx-auto">
        
        {/* Section Header with Fade Up Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 lg:mb-14"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 drop-shadow-sm">
            Savings & Investments
          </h2>
          <p className="text-sm uppercase tracking-widest text-slate-600 font-semibold">
            Secure your future with flexible, high-yield plans
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {savingsData.map((item, index) => (
            <motion.div
              key={index}
              /* Staggered entrance animation based on index */
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100"
            >
              {/* Colored Top Bar */}
              <div className={`h-3 w-full ${item.headerColor}`}></div>

              <div className="p-6 flex-grow flex flex-col">
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-gray-50 text-[#39246a] rounded-lg">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[3rem]">
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-4 h-4 text-[#39246a] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}