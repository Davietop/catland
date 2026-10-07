"use client";

import React from 'react';
import { Users, Sprout, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  display: "swap", 
});

// --- ANIMATION VARIANTS ---

/** @type {import("framer-motion").Variants} */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each element appearing
    },
  },
};

/** @type {import("framer-motion").Variants} */
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

const WhyChooseUs = () => {
  const features = [
    {
      title: "Championing Financial Inclusion",
      description: "We are dedicated to serving economically active individuals and MSMEs, ensuring that everyone has access to the banking tools they need to succeed.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Accessible & Tailored Products",
      description: "From Zero Balance Accounts to Modified Daily Contributions (MDC), our solutions are uniquely designed to be simple, affordable, and suited to your reality.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50"
    },
    {
      title: "Comprehensive Credit Options",
      description: "Whether you need Asset Finance to scale operations or a Micro Loan to boost working capital, we provide the reliable credit backing your business requires.",
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      bgColor: "bg-amber-50"
    },
    {
      title: "Sustainable Economic Impact",
      description: "Our vision is to be one of Nigeria's premier microfinance banks by fostering grassroots local business development and delivering maximum value to all stakeholders.",
      icon: <Sprout className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className={`${ibmPlexSans.className} py-16 bg-[#3b266b] text-white overflow-hidden`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Container wrapping both columns */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Left Column: Main Narrative (Treated as the first item in the stagger) */}
          <motion.div variants={itemVariants} className="lg:w-2/4">
            <h2 className="text-sm font-bold tracking-widest text-white uppercase mb-3">
              Why Choose Us
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-white">
              Empowering your financial future, every single day.
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We go beyond traditional banking. Our primary goal is to promote financial inclusion and foster sustainable socio-economic development within our communities by delivering quality, affordable financial services.
            </p>
            
            {/* Animated Call to Action Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white cursor-pointer text-[#39246a] font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Open an Account Today
            </motion.button>
          </motion.div>

          {/* Right Column: Features Grid */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }} // Subtle lift on hover
                className="bg-[#edebf1] p-8 rounded-2xl border border-transparent hover:border-[#39246a]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-default"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#39246a] mb-3">
                  {feature.title}
                </h4>
                <p className="text-[#39246a]/80 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;