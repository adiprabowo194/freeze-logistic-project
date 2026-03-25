"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DataImage from "@/public/assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faClock,
  faDollar,
  faPeopleGroup,
  faSearch,
  faTimes,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faHeadset, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Footer from "@/components/Footer";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons/faPeopleCarryBox";

export default function Home() {
  const router = useRouter();
  const [connote, setConnote] = useState("");

  const handleTrack = () => {
    if (!connote.trim()) return;

    router.push(`/tracking/${connote}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTrack();
    }
  };
  return (
    <div className="py-8">
      <section
        className="relative w-full md:py-16 py-8 md:min-h-[580px] min-h-[500px]
  
  bg-no-repeat md:bg-center bg-left-top"
        style={{
          backgroundImage: "url('/assets/truck_freeze_logistics.webp')",
        }}
      >
        <div className="absolute inset-0 bg-[#4267D7]/80 object-center"></div>
        <div className=" absolute inset-0 mx-auto text-center container  top-60">
          <div className="md:w-7/8 w-full md:px-10 px-4 mx-auto ">
            <div className="box-content  md:pt-8 pt-2 py-2 px-2 md:px-4 0">
              <h2 className="md:text-5xl/tight text-3xl/tight font-bold  text-white w-2/4 mx-auto">
                Track your package in here now !
              </h2>

              <div className="md:py-4 py-2 w-full tracking-wider">
                <input
                  value={connote}
                  onChange={(e) => setConnote(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter Connote Number (e.g. CN123456789)"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 
  text-center placeholder:text-gray-400
  focus:outline-none sm:text-sm/6 bg-amber-50 
  w-3/5 mx-auto h-12 rounded-4xl"
                />
              </div>
              <div className="hero-button flex flex-row  md:gap-8 gap-2 py-4 justify-center">
                <button
                  onClick={handleTrack}
                  className="bg-amber-400 px-6 py-2 rounded-2xl md:w-60 w-40 text-[#0F253C] md:text-base text-xs hover:bg-[#0F253C] hover:text-white transition"
                >
                  Track My Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="HowItWorks items-center w-full md:px-4 py-8 container mx-auto  ">
        <div className="bg-gray-100">
          <div className="py-8 w-3/4 mx-auto">
            <h2 className="md:text-2xl/tight text-xl font-bold tracking-widest">
              Start Sending instantly!
            </h2>
            <div className="flex items-center justify-between">
              <p>Sign up for your free account now.</p>
              <Link
                href="https://app.freezelogistics.com.au/register"
                target="_blank"
                className="flex items-center gap-4"
              >
                <button className="relative bottom-4 text-white bg-blue-500 px-6 py-2 rounded-2xl md:w-60 w-40  md:text-base text-xs hover:bg-[#0F253C]">
                  Create New Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
