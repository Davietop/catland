import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { IBM_Plex_Sans } from "next/font/google";


const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  display: "swap", 
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${ibmPlexSans.className} bg-[#3b266b] pt-16 pb-8 border-t-4 border-[#edebf1]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Brand & Trust */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6">
              Catland <span className="text-[#edebf1]">MFB</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering MSMEs and individuals with accessible, quality
              financial services to foster sustainable socio-economic
              development across Nigeria.
            </p>
            <div className="bg-[#edebf1] p-4 rounded-lg border border-slate-700">
              <p className="text-xs text-black">
                Licensed by the{" "}
                <strong className="text-black">
                  Central Bank of Nigeria (CBN)
                </strong>
                .
                <br />
                Deposits insured by the{" "}
                <strong className="text-black">NDIC</strong>.
              </p>
            </div>
          </div>

          {/* Column 2: Core Products */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Our Products
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Modified Daily Contribution (MDC)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Catland Micro Loan (CML)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Asset Finance Loan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Zero Balance Savings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Payroll Lending
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Management Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Help & FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Get in Touch
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#edebf1] flex-shrink-0 mt-0.5" />
               <div className="flex flex-col gap-y-3">
                <div>
                  <p className="text-sm text-white">Corporate Head Office</p>
                   <span className="text-slate-400 text-sm">
                  Opposite College of Health Technology (Ogun State Polytechnic of Health and Allied Sciences), Ilese-Ijebu, Ogun State.
                </span>
                </div>
                <div>
                  <p className="text-sm text-white">Branch Office</p>
                   <span className="text-slate-400 text-sm">
                  Behind Erunwon Police Station, Atan Road, Erunwon Ijebu, Ogun State
                </span>
                </div>
               </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#edebf1] flex-shrink-0" />
               <div className="flex flex-col">
                 <a
                  href="tel:+234 816 331 6825"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +234 (0) 816 331 6825
                </a>
                 <a
                  href="tel:+234 816 331 6825"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +234 (0) 816 331 6825
                </a>
                 <a
                  href="tel:+234 805 615 2167"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +234 (0) 805 615 2167
                </a>
                 <a
                  href="tel:+234 816 175 1912"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +234 (0) 816 175 1912
                </a>
               </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#edebf1] flex-shrink-0" />
                <a
                  href="mailto:hello@catlandmfb.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
               support@catlandmfbltd.com.ng
                </a>
              </li>
            </ul>

         
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#edebf1] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Catland Microfinance Bank. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Security Information
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
