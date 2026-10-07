"use client";
import { useState } from "react";
import Link from "next/link";
import { IBM_Plex_Sans } from "next/font/google";


const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  display: "swap", 
});


import { usePathname } from "next/navigation";
import { links } from "./pcNav";
import Image from "next/image";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);

  return (
    <div className={`${ibmPlexSans.className} xl:hidden`}>
      {/* Top Floating Navbar */}
      <header className="absolute top-4 left-0 w-full z-50 px-4">
        <div className="flex items-center justify-between px-5  rounded-full bg-white/90 backdrop-blur-md border border-white/20">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center text-white">
              <Image
                src="/cat_logo.png"
                alt="Catland"
                width={100}
                height={1}
                className="relative z-30"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center gap-x-2">
            <button
              onClick={toggleSidebar}
              className="text-[#39246a] transition-colors duration-200"
              aria-label={open ? "Close sidebar" : "Open sidebar"}
            >
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop + Animated Sidebar */}
      <div className="relative z-40">
        {/* Backdrop */}
        {open && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-8/12 h-screen bg-white  z-50 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-24 flex flex-col">
            {[...links].map(({ name, link }) => {
              const isActive = pathname === link;
              return (
                <Link
                  key={name}
                  href={link}
                  className="flex relative items-center border-b border-gray-700"
                  onClick={closeSidebar}
                >
                  {isActive && (
                    <div className="h-full w-[4px] z-10 bg-[#39246a] absolute left-0"></div>
                  )}
                  <div className={`flex relative items-center px-4 py-6 pl-8 ${isActive ? "bg-[#39246a] w-full " : ""} `}>
                    <span
                      className={`text-lg font-bold ${isActive ? "text-white " : "text-[#39246a]"}`}
                    >
                      {name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
