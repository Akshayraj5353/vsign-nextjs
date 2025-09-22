import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] text-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid gap-10 md:gap-0 grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start">
          <nav className="flex flex-wrap gap-4 md:gap-6 font-medium justify-center md:justify-start">
            {footerLinks.main.map(({ label, href }) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {footerLinks.social.map(({ label, href, icon }) => (
              <Link key={label} href={href}>
                <Image src={icon} alt={label} width={24} height={24} />
              </Link>
            ))}
          </div>

          {/* Address */}
          <p className="text-sm leading-6 max-w-xs">
            Plot No. 27 &amp; 28, Rd Number 1, Samathapuri Colony, New Nagole
            Colony,
            <br />
            Samathapuri, Nagole, Hyderabad, Telangana 500035
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <Image
            src="/vsignlogo.svg"
            alt="V Sign Logo"
            width={220}
            height={90}
          />
          <Image src="/iso.png" alt="ISO 9001:2015" width={100} height={80} />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-sm justify-center text-sm sm:text-base">
              <Image src="/phone.svg" alt="Phone" width={18} height={18} />
              <span className="font-semibold">99087 06363</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-sm justify-center text-sm sm:text-base">
              <Image src="/phone.svg" alt="Phone" width={18} height={18} />
              <span className="font-semibold">99490 66700</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-sm justify-center text-xs sm:text-sm">
              <span>info@vsignpvtltd.com</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-sm justify-center text-xs sm:text-sm">
              <span>contact@vsignpvtltd.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-600 space-y-2 md:space-y-0">
          <p className="text-center md:text-left">
            © 2022 V Sign Pvt Ltd – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
