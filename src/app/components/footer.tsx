"use client";
import React from "react";
import Link from "next/link";
import LogoSVG from "@/app/assets/image/logo.svg";
import Facebook from "@/app/assets/image/facebook.svg";
import Linkedin from "@/app/assets/image/linkedin.svg";
import Twitter from "@/app/assets/image/twitter.svg";
import Youtube from "@/app/assets/image/youtube.svg";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-between py-8">
          {/* Column 1: Logo */}
          <div className="mb-6 md:mb-0">
            <LogoSVG />
          </div>
          {/* Column 2: Company Information */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              CYNES VIETNAM TECHNOLOGY JOINT STOCK COMPANY
            </h3>
            <p>
              <span className="text-[#19CAFF]">Headquarters Address:</span> 35,
              Alley 41, Lane 210 <br /> Đội Cấn Street, Đội Cấn Ward, Ba Đình
              District, Hanoi
            </p>
            <p>
              {" "}
              <span className="text-[#19CAFF]">Hotline:</span> 0369 390 009
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-between py-4 border-t">
          {/* Column 1: Copyright */}
          <div className="mb-4 md:mb-0 text-[#19CAFF]">
            <p>&copy; 2023 Cynes. All rights reserved.</p>
          </div>
          {/* Column 2: Secondary Menu */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4 text-[#717EA0]">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookies">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          {/* Column 3: Social Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="#" aria-label="Youtube">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
