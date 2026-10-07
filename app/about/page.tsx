'use client'

import Hero from "./hero";
import Navbar from "@/components/page-section/navbar";
import React from "react";
import { useState } from "react";
import Info from "./info";
import Footer from "@/components/page-section/footer";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <>
      <div className="relative h-fit ">
        <Navbar />
        <div className="absolute inset-0 bg-[#39246a]" />
        <Hero activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <Info activeTab={activeTab} onTabChange={setActiveTab} />

      <Footer/>
    </>
  );
}
