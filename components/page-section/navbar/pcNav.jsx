"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const paths = {
  home: "/",

  about: "/about",

  


  contact: "/contact",

  services: "/services",
};

export const links = [
  {
    name: "About Us",

    link: paths.about,
  },

 {
    name: "Services",

    link: paths.services,
  },
  {
    name: "Contact Us",

    link: paths.contact,
  },

 

  
];

const PcNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center absolute top-6 left-0 z-50 px-4">
      <nav
        className={`hidden xl:flex justify-between items-center w-full max-w-7xl px-8  rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-white ${ibmPlexSans.className}`}
      >
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/cat_logo.png"
            alt="Catland"
            width={120}
            height={1}
            className="relative z-30"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-x-8 text-sm font-bold">
          {links.map(({ name, link }) => {
            const active = pathname === link;
            return (
              <li key={name} className="flex items-center">
                <Link
                  href={link}
                  className={` ${
                    active ? "font-bold text-[#39246a]" : "text-[#39246a]"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-x-6 text-sm font-medium">
          
          <Link
            href="/signin"
            className="border border-[#39246a] hover:border-[#39246a] bg-[#39246a] text-white hover:bg-white hover:text-[#39246a] font-medium py-2 px-6 rounded-full transition duration-300"
          >
           Create an Account
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default PcNav;
