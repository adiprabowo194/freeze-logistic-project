import Image from "next/image";
import DataImage from "@/public/assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faBolt,
  faEye,
  faTruckFast,
  faBoxesStacked,
  faMagnifyingGlass,
  faWallet,
  faGlobe,
  faBullseye,
  faUsers,
  faShieldHalved,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeadset, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-8">
      <section className="hero items-center w-full md:py-38 py-18 container mx-auto">
        <div className="hero-row">
          <div className="flex flex-col items-center md:text-center text-left px-2 md:px-8">
            <h1 className="md:text-5xl/tight text-4xl/tight font-bold text-center  px-2 md:px-8">
              <div className="">
                We're Making{" "}
                <span className="bg-[linear-gradient(90deg,#4267D7_32%,#3ACDFF_100%)] bg-clip-text text-transparent inline-block">
                  Cold Freight
                </span>
              </div>
              <div>Simple</div>
            </h1>
            <h3 className="md:text-base/tight text-xs py-6 md:max-w-3xl w-full text-center tracking-widest px-4 ">
              Freeze Logistics is a specialised cold freight company dedicated
              to temperature-controlled transport across Australia. We deliver
              secure, compliant, and efficient cold chain solutions that protect
              your product from pickup to delivery.
            </h3>
          </div>
        </div>

        <div
          className="relative py-16 md:min-h-[600px]  min-h-[420px] md:bg-[length:50%] bg-[length:160%]
 bg-no-repeat md:bg-center bg-left-top mx-auto "
          style={{ backgroundImage: "url('/assets/man_meeting_in_room.webp')" }}
        ></div>
      </section>
      <section className="our-story w-full md:py-8 py-12 container mx-auto px-6">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-12 w-5/6 mx-auto">
          {/* Text */}
          <div className="max-w-xl">
            <h2 className="md:text-4xl text-3xl font-bold tracking-wide mb-6">
              Our Story
            </h2>

            <div className="text-gray-600 leading-relaxed text-base">
              <p className="py-4">
                As small business owners ourselves, we experienced firsthand the
                frustration of shipping temperature-sensitive goods. The process
                was riddled with delays, unclear pricing, and endless
                back-and-forth emails with brokers.
              </p>
              <p className="py-4">
                We knew there had to be a better way. That's why we built Freeze
                Logistics — a technology platform that brings transparency,
                speed, and simplicity to cold freight booking.
              </p>
              <p className="py-4">
                Starting in Victoria and expanding across Australia, we're on a
                mission to empower every SMB with the same logistics
                capabilities that large corporations enjoy.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end ">
            <Image
              src={DataImage.DriverMan}
              alt="Driver Freeze Logistics"
              priority
              className="rounded-4xl hover:shadow-lg object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>
      <section
        className="WhyLove w-full md:px-8 py-16 container-full mx-auto 
      bg-[linear-gradient(61deg,#0D1A2A_0%,#0F253C_66%,#17374E_100%)]"
      >
        <div className="w-6/7 mx-auto">
          {/* <h2 className="md:text-4xl text-3xl font-bold tracking-wide mb-6 px-4 md:px-16 text-white">
            Mision & Vision
          </h2> */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 w-full py-6 px-4 md:px-16 mx-auto pb-8 md:pb-16 container ">
            <div className="border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col  py-8 text-white px-6">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="text-2xl md:text-4xl text-blue-400 rounded-xl md:px-4 px-0 group-hover:text-white transition-colors"
                />
                <h3 className="font-bold md:text-2xl/tight text-base py-4 md:max-w-3xl w-full tracking-widest md:px-4 px-0">
                  Our Mission
                </h3>
                <p className="md:px-4 px-0  md:text-sm text-xs tracking-widest ">
                  To democratize cold freight logistics for Australian SMBs by
                  providing instant access to real-time pricing, transparent
                  carrier options, and seamless booking—all in one technology
                  platform.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col  py-8 text-white px-6">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-2xl md:text-4xl text-blue-400 rounded-xl md:px-4 px-0 group-hover:text-white transition-colors"
                />
                <h3 className="font-bold md:text-2xl/tight text-base py-4 md:max-w-3xl w-full tracking-widest md:px-4 px-0">
                  Our Vision
                </h3>
                <p className="md:px-4 px-0  md:text-sm text-xs tracking-widest ">
                  To become Australia's most trusted and comprehensive cold
                  freight platform, connecting every business with reliable,
                  affordable temperature-controlled shipping across the entire
                  nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="HowItWorks items-center w-full md:px-8 py-16 container-full">
        <div className="w-7/8 mx-auto">
          <div className="box-content md:py-2 py-0">
            <h2 className="md:text-3xl/tight text-4xl/tight font-bold text-center tracking-widest">
              Why Australian{" "}
              <div className="bg-[linear-gradient(90deg,#4267D7_32%,#3ACDFF_100%)] bg-clip-text text-transparent inline-block">
                Businesses Trust Us
              </div>
            </h2>
            <p className="md:text-base/tight text-sm text-center mx-auto py-6">
              We're not just a platform—we're your cold freight partner
            </p>
          </div>
          <div className="md:flex grid md:flex-row grid-cols-1 items-center justify-center md:pb-8 pb-4 gap-4">
            <div className="flex flex-col text-center items-center md:py-8 py-4 w-full md:w-1/3 hover:shadow-lg hover:rounded-4xl">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-2xl md:text-4xl text-blue-400 p-4 bg-blue-100 rounded-2xl "
              />
              <h3 className="font-bold md:text-base/tight text-sm/tight  pt-2 md:pt-4 px-2 md:px-2 text-gray-900 md:w-2/3 w-full">
                Built by Businesses <div>Owners</div>
              </h3>
              <p className="py-2 px-4 md:px-2 md:text-sm text-xs text-gray-600 md:w-3/4 w-full">
                We understand your challenges{" "}
                <span className="block">
                  because we've faced them too. This platform was built for
                  people like us.
                </span>
              </p>
            </div>
            <div className="flex flex-col text-center items-center md:py-8 py-4 w-full md:w-1/3 hover:shadow-lg hover:rounded-4xl ">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-2xl md:text-4xl text-green-400 p-4 bg-green-100 bg-grey-100 rounded-2xl "
              />
              <h3 className="font-bold md:text-base/tight text-sm/tight  pt-2 md:pt-4 px-2 md:px-2 text-gray-900 md:w-2/3 w-full">
                Australian-First <div>Focus</div>
              </h3>
              <p className="py-2 px-4 md:px-2 md:text-sm text-xs text-gray-600 md:w-3/4 w-full">
                We're proud to be Australian-owned, supporting local businesses
                and building a network that serves our community.
              </p>
            </div>
            <div className="flex flex-col text-center items-center md:py-8 py-4 w-full md:w-1/3 hover:shadow-lg hover:rounded-4xl">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-2xl md:text-4xl text-red-400 p-4 bg-red-100 rounded-2xl"
              />
              <h3 className="font-bold md:text-base/tight text-sm/tight  pt-2 md:pt-4 px-2 md:px-2 text-gray-900 md:w-2/3 w-full">
                Personal Support
              </h3>
              <p className="py-2 px-4 md:px-2 md:text-sm text-xs text-gray-600 md:w-3/4 w-full">
                You're not just a number to us. Our team is here to help you
                succeed with responsive, friendly support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="HowItWorks items-center w-full md:px-8 py-16 container-full mx-auto bg-[#4267D7] ">
        <h2 className="md:text-5xl/tight text-4xl/tight font-bold text-center  md:w-full max-w-2/3 mx-auto">
          <div className="text-white">Ready to Freeze Your</div>
          <div className="text-white">Cost ?</div>
        </h2>
        <h3 className="md:text-base/tight text-sm py-6  text-center md:w-full max-w-1/3 mx-auto text-white tracking-widest">
          join hundreds of Australian Businesses already saving time and money
          on cold freight
        </h3>
        <div className="hero-button flex flex-row  md:gap-8 gap-2 py-4 justify-center">
          {/* <button className="bg-white px-6 py-2 rounded-2xl md:w-60 w-40  md:text-base text-xs hover:bg-[#0F253C] hover:text-white">
            Create Free Login
          </button>
          <button className="bg-blue-300 text-white px-6 py-2 rounded-2xl md:w-40 w-30 md:text-base text-xs hover:bg-[#0F253C] ">
            Login
          </button> */}
          <Link href="/get-started" className="flex items-center gap-4">
            <button className="bg-blue-300 text-white px-6 py-4 rounded-4xl md:w-80 w-30 md:text-xl text-xs hover:bg-[#0F253C] ">
              Get Started
            </button>
          </Link>
        </div>
        <p className="py-8 text-center text-gray-100 md:text-base text-xs hover:text-[#0F253C]">
          No credit card required
        </p>
      </section>
      <Footer />
    </div>
  );
}
