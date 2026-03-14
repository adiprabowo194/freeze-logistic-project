import Image from "next/image";
import DataImage from "@/public/assets/data";
import Link from "next/link";

function Logo() {
  return (
    <div className=" items-center  relative z-60 w-full md:w-1/3 md:justify-start justify-center">
      <Link href="/" className="flex gap-4">
        <i
          className={`ri-snowflake-line text-3xl rounded-xl transition-colors duration-300 text-blue-600
       `}
        ></i>

        <h1
          className={`md:text-2xl text-base font-bold transition-colors duration-300 text-[#0F253C]
        `}
        >
          Freeze Logistics
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
