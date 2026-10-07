"use client";

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, PhoneCall, Mail } from 'lucide-react';
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  display: "swap", 
});

const FAQSection = () => {
  const faqs = [
    {
      value: "item-1",
      question: "How does the Modified Daily Contribution (MDC) work?",
      answer: "MDC is designed for daily income earners and market traders. You commit to a convenient daily savings amount, which our staffs collect directly from your business premises. You can withdraw your lump sum at the end of the cycle, or use your contribution history to qualify for a business loan."
    },
    {
      value: "item-2",
      question: "What do I need to qualify for a Catland Micro Loan (CML)?",
      answer: "We prioritize your business cash flow over heavy collateral. To qualify, your business should be actively operating for at least six months. You will need an active Catland account with a consistent transaction history, a valid means of identification, your BVN, and a reliable guarantor."
    },
    {
      value: "item-3",
      question: "I don't have capital to start banking. Can I open an account?",
      answer: "Absolutely. Our Zero Balance Savings Account is built specifically to promote financial inclusion. You can open and operate this account with exactly zero naira as an initial deposit. There are no hidden maintenance fees—just a simple, accessible way to start saving."
    },
    {
      value: "item-4",
      question: "How does the Asset Finance Loan help my business?",
      answer: "If you need to buy income-generating equipment—such as delivery vehicles, industrial generators, or production machinery—we can finance the purchase. Catland buys the asset on your behalf, and you repay in structured installments while actively using the equipment to grow your business."
    },
    {
      value: "item-5",
      question: "Are my funds secure with Catland Microfinance Bank?",
      answer: "Yes, your funds are completely secure. Catland strictly adheres to the regulatory guidelines of the Central Bank of Nigeria (CBN), and all customer deposits are fully insured by the Nigeria Deposit Insurance Corporation (NDIC)."
    }
  ];

  return (
    <section className={`${ibmPlexSans.className} py-16 bg-white`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Pinned Header & Support CTA */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold tracking-widest text-[#39246a] uppercase mb-3">
                Support & Answers
              </h2>
              <h3 className="text-3xl font-bold text-[#39246a] mb-4 leading-tight">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Find quick answers to common questions about our accounts, loans, and daily contribution services.
              </p>
              
              {/* Help Box */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-[#39246a] mb-2">
                  Still have questions?
                </h4>
                <p className="text-gray-500 text-sm mb-6">
                  Our customer success team is ready to help you with your specific banking needs.
                </p>
                <div className="space-y-4">
                  <a href="tel:+2348000000000" className="flex items-center gap-3 text-[#39246a]  font-medium transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#edebf1] flex items-center justify-center">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    Call Support
                  </a>
                  <a href="mailto:support@catlandmfb.com" className="flex items-center gap-3 text-[#39246a]  font-medium transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#edebf1] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Accordion Cards */}
          <div className="lg:w-3/3">
            <Accordion.Root 
              className="w-full space-y-4" 
              type="single" 
              defaultValue="item-1" 
              collapsible
            >
              {faqs.map((faq) => (
                <Accordion.Item 
                  key={faq.value} 
                  value={faq.value} 
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 focus-within:ring-2 focus-within:ring-[#39246a] focus-within:ring-offset-2"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group flex flex-1 items-center justify-between px-6 py-6 text-left text-lg font-semibold text-gray-900 focus:outline-none">
                      <span className="pr-8">{faq.question}</span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex flex-shrink-0 items-center justify-center group-data-[state=open]:bg-[#39246a] group-data-[state=open]:border-[#39246a] transition-colors duration-300">
                        <ChevronDown 
                          className="w-5 h-5 text-gray-500 group-data-[state=open]:text-white transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" 
                          aria-hidden="true" 
                        />
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  
                  <Accordion.Content className="overflow-hidden text-gray-600 text-base leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <div className="px-6 pb-6 pt-0 border-t border-gray-50 mx-6 mt-2">
                      <p className="pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default FAQSection;