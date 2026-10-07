"use client";

import React from 'react';
import { Target, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  display: "swap", 
});

// --- ANIMATION VARIANTS ---

// Controls the stagger between the left (Mission) and right (Vision) panes
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 0.2s delay before the Vision side animates in
    },
  },
};

// Controls the smooth upward slide and fade for each pane
const paneVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const MissionVision = () => {
  return (
    <section className={`${ibmPlexSans.className} lg:py-16 bg-white border-y border-gray-100 overflow-hidden`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Split pane container */}
        <motion.div 
          className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Mission Section */}
          <motion.div 
            variants={paneVariants}
            className="flex-1 py-10 md:py-0 md:pr-16 lg:pr-24 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-200 flex-shrink-0"
              >
                <Target className="w-6 h-6 text-[#39246a]" />
              </motion.div>
              <h2 className="text-sm font-bold tracking-widest text-[#39246a] uppercase">
                Our Mission
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Value-Driven Financial Services
            </h3>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
              <p>
                To deliver simple but quality savings and credit services that suit the needs of our various customers while also giving maximum value to other stakeholders.
              </p>
              <p>
                We are committed to bridging the financial gap by providing accessible, innovative, and tailored banking solutions. Through transparent operations and a customer-first approach, we empower individuals to achieve financial stability and ensure sustainable, long-term growth for our investors and the communities we serve.
              </p>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div 
            variants={paneVariants}
            className="flex-1 py-10 md:py-0 md:pl-16 lg:pl-24 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-200 flex-shrink-0"
              >
                <Compass className="w-6 h-6 text-slate-700" />
              </motion.div>
              <h2 className="text-sm font-bold tracking-widest text-slate-700 uppercase">
                Our Vision
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Empowering MSMEs in Nigeria
            </h3>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
              <p>
                To become one of the best MFBs in Nigeria in terms of delivery of quality and affordable financial services to the micro, small, and medium-sized enterprises (MSMEs).
              </p>
              <p>
                We envision a future where every ambitious entrepreneur has the reliable financial backing required to scale their business. By setting the gold standard in microfinance, we strive to be the primary catalyst for grassroots economic development, wealth creation, and lasting prosperity across the nation.
              </p>
            </div>
          </motion.div>

        </motion.div>
        
      </div>
    </section>
  );
};

export default MissionVision;