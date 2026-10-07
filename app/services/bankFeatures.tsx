"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Wallet, Coins } from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function BankingFeatures() {
  return (
    <section
      className={`${ibmPlexSans.className} bg-white min-h-screen py-4 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TOP SECTION: Accounts Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Image Placeholder */}
          <div className="lg:w-1/3 h-64 lg:h-auto relative bg-slate-200 overflow-hidden">
            <Image
              src="/account.jpg"
              alt="Customer service representative with client"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Accounts Content */}
          <div className="lg:w-2/3 p-4 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Current Account */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#F8F9FA] rounded-lg">
                  <Wallet className="w-5 h-5 text-[#39246a]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Current Account
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                A standard deposit account enabling the use of cheques and
                everyday business transactions.
              </p>
              <ul className="space-y-3">
                {[
                  "Overdrafts allowed on this account",
                  "Deposit other banks' cheques for clearing",
                  "Lower COT may be negotiated",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 text-[#3b266b] shrink-0"
                      fill="currentColor"
                      stroke="white"
                    />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modified Daily Contribution */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#F8F9FA] rounded-lg">
                  <Coins className="w-5 h-5 text-[#39246a]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Modified Daily
                  <br />
                  Contribution
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                A Daily Savings Scheme with the added benefit of accessing loans
                to boost sales.
              </p>
              <ul className="space-y-3">
                {[
                  "Doorstep collection of daily savings",
                  "Simple, flexible loan terms",
                  "Obtain loan after just 1 month of regular savings",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 text-[#3b266b] shrink-0"
                      fill="currentColor"
                      stroke="white"
                    />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* MIDDLE SECTION: Digital Banking Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="bg-[#3b266b] rounded-2xl shadow-lg p-4 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-10"
        >
          {/* Left: Info */}
          <div className="lg:w-1/2 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Digital Banking Everywhere
            </h2>
            <p className="text-blue-100 text-sm mb-8 leading-relaxed max-w-md">
              Bank securely from your phone anytime, anywhere. Download our
              Mobile App or use our fast USSD code.
            </p>

            <ul className="space-y-3">
              {[
                "Money Transfer",
                "Airtime and Data Bundles",
                "Pay Bills",
                "Account History",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    stroke="#1e327d"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: USSD Box */}
          <div className="lg:w-1/2 w-full flex lg:justify-end">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 w-full max-w-md backdrop-blur-sm text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Catland USSD Code
              </h3>
              <p className="text-xs text-blue-200 mb-6">
                Transfer money instantly using our dedicated shortcode.
              </p>

              <div className="bg-[#0f1940] rounded-lg p-4 border border-blue-800/50">
                <span className="text-amber-400 font-mono text-base md:text-xl font-bold tracking-wider">
                  *347*38*Acct No*Amount#
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM SECTION: Security Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 lg:p-8 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="md:w-2/3">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Your Funds are Safe and Secure
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
              Catland Microfinance Bank Ltd. is fully licensed by the Central
              Bank of Nigeria (CBN). All customer deposits are insured by the
              Nigeria Deposit Insurance Corporation (NDIC).
            </p>
          </div>

          <div className="md:w-1/3 flex items-center md:justify-end gap-6 shrink-0">
            {/* Text logos representing the NDIC and CBN badges */}
            <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-md font-bold text-[#1a365d] text-lg tracking-wide">
              <Image
                src="/ndic-.svg"
                alt="NDIC Logo"
                width={1}
                height={1}
                className="h-8 w-[60px] object-contain"
              />
            </div>
            <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-md font-bold text-emerald-600 text-lg tracking-wide">
              <Image
                src="/cbn.svg"
                alt="Licensed Logo 1"
                width={1}
                height={1}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}