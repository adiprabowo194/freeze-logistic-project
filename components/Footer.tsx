"use client";

import Logo from "./TopNavbar";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Footer() {
  const [active, setActive] = useState(false);
  // link active
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "font-semibold text-blue-500"
      : "text-[#0F253C] hover:text-blue-500 transition-colors";

  return (
    <div className="navbar py-4 z-50">
      <div className="container mx-auto px-4 pt-4">
        <div className="flex md:flex-row flex-col items-center justify-between bg-white mx-auto">
          <Logo />
          <div className="w-full flex md:flex-row flex-col  md:items-center justify-end text-[#0F253C]">
            {/* ================= MENU ================= */}
            {/* <ul className="flex flex-row gap-8 py-2 md:py-0 mx-auto md:mx-0 justify-center"> */}
            <ul className={` flex flex-row gap-12 py-2 md:py-0 mx-auto `}>
              <li>
                <Link
                  href="/whyUs"
                  className={`${linkClass("/whyUs")}  font-medium `}
                >
                  Why Us?
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className={`${linkClass("/services")} font-medium `}
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/tracking"
                  className={`${linkClass("/tracking")} font-medium `}
                >
                  Tracking
                </Link>
              </li>
            </ul>
            {/* ================= copyright ================= */}
            <div className="mx-auto">
              <div className="flex gap-2 text-center">
                <i className="ri-copyright-line"></i>2026 Freeze Logistics Pty
                Ltd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
