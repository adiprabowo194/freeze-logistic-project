"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

type NavbarLinkProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavbarLink({ active, setActive }: NavbarLinkProps) {
  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  const handleClose = () => {
    setActive(false);
  };

  // 🔒 Lock scroll saat menu aktif
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  // link active
  const menus = [
    { name: "Home", path: "/" },
    { name: "Why Us?", path: "/whyUs" },
    { name: "Services", path: "/services" },
    { name: "Tracking", path: "/tracking" },
  ];
  const pathname = usePathname();
  const linkClass = (path: string) => {
    return pathname === path
      ? "md:text-blue-500 text-[#0F253C] font-bold px-4 py-4 bg-white rounded-2xl"
      : "text-white md:text-[#0F253C]";
  };

  return (
    <>
      <div className="w-2/3 flex items-center justify-end md:justify-between">
        {/* ================= MENU ================= */}
        <ul
          className={`
        flex flex-col items-center justify-center gap-12
        fixed top-20 left-0 right-0 bottom-0
        bg-blue-500
        w-full py-10
        transition-all duration-300

        ${active ? "flex opacity-100" : "hidden opacity-0"}

        md:flex md:static md:flex-row md:justify-start
        md:bg-transparent md:w-auto md:py-0
        md:opacity-100
        z-50
      `}
        >
          <li>
            <Link
              href="/"
              onClick={handleClose}
              className={`
              font-medium transition-colors duration-200
              ${linkClass("/")}
              hover:text-blue-500
            `}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/whyUs"
              onClick={handleClose}
              className={`
              font-medium transition-colors duration-200
              ${linkClass("/whyUs")}
              hover:text-blue-500
            `}
            >
              Why Us?
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              onClick={handleClose}
              className={`
              font-medium transition-colors duration-200
              ${linkClass("/services")}
              hover:text-blue-500
            `}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/tracking"
              onClick={handleClose}
              className={`
              font-medium transition-colors duration-200
              ${linkClass("/tracking")}
              hover:text-blue-500
            `}
            >
              Tracking
            </Link>
          </li>
        </ul>

        {/* ================= BUTTON ================= */}
        <div
          className={`
        fixed bottom-6 left-1/2 -translate-x-1/2
        w-[90%]
        md:static md:translate-x-0 md:w-auto
        transition-all duration-300
        ${active ? "opacity-100 visible" : "opacity-0 invisible"}
        md:opacity-100 md:visible
        z-50
      `}
        >
          <Link
            href="/get-started"
            onClick={handleClose}
            className={`
            w-full md:w-auto
            px-4 py-3
            rounded-2xl
            transition-all duration-300
            ${active ? "bg-white hover:bg-[#0F253C] text-blue-500 shadow-lg" : "bg-blue-500 text-white"}
            md:bg-blue-500 [#0F253C] md:text-white md:shadow-none hover:bg-[#0F253C]
          `}
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* ================= HAMBURGER ================= */}
      <div
        className="md:hidden block z-50 cursor-pointer"
        onClick={handleToggle}
      >
        <i
          className={`${
            active ? "ri-close-line" : "ri-menu-3-line"
          } ri-2x font-bold`}
        ></i>
      </div>
    </>
  );
}

export default NavbarLink;
