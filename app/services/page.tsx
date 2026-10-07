import Navbar from "@/components/page-section/navbar";
import React from "react";
import Hero from "./hero";
import SavingsInvestments from "./savings";

import LoansWaterfall from "./loans";
import Footer from "@/components/page-section/footer";
import BankingFeatures from "./bankFeatures";

export default function Services() {
  return (
    <>
      <div className="relative h-fit bg-[url('/services.jpg')] bg-cover bg-left bg-no-repeat">
        <Navbar />
        <div className="absolute inset-0 bg-black/80" />
        <Hero />
      </div>

      <>
        <LoansWaterfall />
        <SavingsInvestments />

        <BankingFeatures />
        <Footer />
      </>
    </>
  );
}
