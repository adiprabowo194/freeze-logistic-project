import Image from "next/image";
import DataImage from "@/public/assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faBolt,
  faEye,
  faShieldHalved,
  faBoxesStacked,
  faMagnifyingGlass,
  faWallet,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faHeadset, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="py-8">
      <section className="hero items-center w-full md:py-16 py-8 container mx-auto">
        <div className="hero-row">
          <div className="flex flex-col items-center md:text-center text-left px-2 md:px-8">
            <div className="flex items-center gap-3 md:py-4 py-6">
              <div className="flex items-center gap-2">
                <i className="ri-star-s-fill text-amber-300 text-xl"></i>
                <span className="md:text-base text-sm">4.8</span>
              </div>
              <span className="text-gray-600">|</span>
              <p className="md:text-base text-xs">
                Trusted by 200+ Australian businesses
              </p>
            </div>
            <h1 className="md:text-5xl/tight text-4xl/tight font-bold text-center  px-2 md:px-8">
              <div className="">Australia’s Smarter</div>
              <div className="bg-[linear-gradient(90deg,#4267D7_32%,#3ACDFF_100%)] bg-clip-text text-transparent">
                Way to Manage Cold Freight
              </div>
            </h1>
            <h3 className="md:text-base/tight text-sm py-6 max-w-xl  text-center ">
              Compare live carrier rates for Dry, Chilled & Frozen shipments
              Book instantly - without the cost or delays of traditional freight
              <div>brokers.</div>
            </h3>
          </div>
        </div>
        <div className="hero-button flex flex-row  md:gap-8 gap-2 py-4 justify-center">
          <button className="bg-blue-500 px-6 py-2 rounded-2xl md:w-60 w-40 text-white md:text-base text-xs hover:bg-[#0F253C]">
            Create Free Login
          </button>
          <button className="border border-gray-950 px-6 py-2 rounded-2xl md:w-40 w-30 md:text-base text-xs hover:bg-[#0F253C] hover:text-white">
            Login
          </button>
        </div>
        <div className="hero-image py-0 md:max-w-5xl w-full  relative min-h-60 mx-auto">
          <p
            className="md:absolute md:top-8 top-2 relative  md:left-1/2 
                md:-translate-x-1/2 md:-translate-y-1/2 
                text-center text-gray-500 md:text-base text-xs hover:text-[#0F253C]"
          >
            No credit card required
          </p>
          <Image
            src={DataImage.HeroTruck}
            alt="Freeze Logistics truck"
            priority
          />
        </div>
      </section>
      <section className="AnyTemperature flex flex-col items-center w-full md:px-8 py-16 container mx-auto">
        <div className="box-content py-2">
          <h2 className="md:text-3xl/tight text-4xl/tight font-bold text-center tracking-widest">
            Ship Any Temperature,
            <span className="pl-2 md:inline block text-blue-500">Any Time</span>
          </h2>
          <div className="py-8">
            <p className="md:text-base/tight text-sm text-center">
              Whether it's ambient, chilled, or frozen — we connect you with the
              right carrier at the best price.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full px-6 md:px-16  pb-8 md:pb-16">
          <div className="border border-gray-200 rounded-2xl md:py-4 py-8 px-8  flex hover:shadow-lg">
            <div className="flex flex-col">
              <i className="ri-box-3-line text-3xl text-red-600 bg-red-100 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3">
                Dry Freight
              </h3>
              <h4 className="text-blue-400 text-lg md:text-xl">Ambient</h4>
              <p className="md:text-sm text-xs tracking-wide text-gray-600">
                Non-temperature-sensitive goods shipped reliably across
                Australia with real-time tracking and competitive rates.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-2xl md:py-4 py-8 px-8 flex hover:shadow-lg">
            <div className="flex flex-col">
              <i className="ri-temp-cold-line text-3xl text-blue-400 bg-blue-100 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3">
                Chilled Freight
              </h3>
              <h4 className="text-blue-400 text-sm md:text-xl">0°C – 4°C</h4>
              <p className="text-xs md:text-sm tracking-wide text-gray-600">
                Fresh produce, dairy, and perishables maintained at optimal
                temperatures throughout the supply chain.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-2xl md:py-4 py-8 px-8 flex hover:shadow-lg">
            <div className="flex flex-col">
              <i className="ri-snowflake-line text-3xl text-blue-600 bg-blue-200 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3">
                Frozen Freight
              </h3>
              <h4 className="text-blue-400 text-sm md:text-xl">
                -18°C & Below
              </h4>
              <p className=" text-xs md:text-sm tracking-wide text-gray-600">
                Deep-frozen goods transported with state-of-the-art
                refrigeration, ensuring quality from pickup to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="WhyLove w-full md:px-8 py-16 container-full  bg-[linear-gradient(61deg,#0D1A2A_0%,#0F253C_66%,#17374E_100%)]">
        <div className="w-7/8 mx-auto">
          <div className="box-content  pt-8 py-2 px-2 md:px-4">
            <h2 className="md:text-3xl/tight text-4xl/tight font-bold text-center tracking-widest text-white">
              Why Love 
              <span className="pl-2 md:inline block text-blue-400">
                Freeze Logistics
              </span>
            </h2>
            <div className="py-8">
              <p className="md:text-base/tight text-sm text-center mx-auto text-white">
                Built specifically for small and medium businesses who need
                reliable cold freight without the complexity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full py-2 px-2  md:px-16 mx-auto pb-8 md:pb-16">
            <div className="border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4 text-white transition-colors">
                <FontAwesomeIcon
                  icon={faBolt}
                  className="text-2xl md:text-4xl text-blue-400 group-hover:text-white transition-colors"
                />

                <h3 className="font-bold md:text-lg/tight text-base pt-2 md:pt-4 px-9 md:px-2">
                  Quick Quotes
                </h3>

                <p className="py-2 px-2 md:px-4 md:text-sm text-xs">
                  No more waiting hours for broker emails.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4 text-white transition-colors">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-2xl md:text-4xl text-blue-400 group-hover:text-white transition-colors"
                />
                <h3 className="font-bold md:text-lg/tight text-base pt-2 md:pt-4 ">
                  Transparent Pricing
                </h3>
                <p className="py-2 px-2 md:px-4 md:text-sm text-xs">
                  See all costs upfront with zero hidden fees.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4 text-white transition-colors">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-2xl md:text-4xl text-blue-400 group-hover:text-white transition-colors"
                />
                <h3 className="font-bold md:text-lg/tight text-base pt-2 md:pt-4 ">
                  Real-Time Tracking
                </h3>
                <p className="py-2 px-2 md:px-4 md:text-sm text-xs">
                  Know exactly where your shipment is, always.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4 text-white  transition-colors">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-2xl md:text-4xl text-blue-400 group-hover:text-white transition-colors"
                />
                <h3 className="font-bold md:text-lg/tight text-base pt-2 md:pt-4 ">
                  Temperature Guaranteed
                </h3>
                <p className="py-2 px-2 md:px-4 md:text-sm text-xs">
                  Cold chain integrity monitored end-to-end.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4 text-white  transition-colors">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-2xl md:text-4xl text-blue-400 group-hover:text-white transition-colors"
                />
                <h3 className="font-bold md:text-lg/tight text-base pt-2 md:pt-4 ">
                  Dedicated Support
                </h3>
                <p className="py-2 px-2 md:px-4 md:text-sm text-xs">
                  See all costs upfront with zero hidden fees.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lgs">
              <div className="flex flex-col text-center items-center py-4 text-white  transition-colors">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-2xl md:text-4xl text-blue-400 group-hover:text-white transition-colors"
                />
                <h3 className="font-bold md:text-lg/tight text-base pt-2 md:pt-4 ">
                  Expanding Coverage
                </h3>
                <p className="py-2 px-4 md:px-0 md:text-sm text-xs">
                  Starting in Victoria, growing to every state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="HowItWorks items-center w-full md:px-8 py-16 container-full bg-gray-100">
        <div className="w-7/8 mx-auto">
          <div className="box-content md:py-2 py-0">
            <h2 className="md:text-3xl/tight text-4xl/tight font-bold text-center tracking-widest">
              How It Works
            </h2>
            <div className="py-8">
              <p className="md:text-base/tight text-sm text-center">
                From quote to delivery in four simple steps.
              </p>
            </div>
          </div>
          <div className=" md:flex grid md:flex-row grid-cols-1 items-center justify-center md:pb-8 pb-4 gap-4">
            <div className="flex flex-col text-center items-center md:py-8 py-4 group hover:shadow-lg hover:rounded-3xl transition-all duration-300">
              <div className="relative flex flex-row">
                <span className="text-xs absolute -top-2 -right-2 font-semibold w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-blue-500">
                  1
                </span>
                <FontAwesomeIcon
                  icon={faBoxesStacked}
                  className="text-2xl md:text-4xl text-blue-400 p-4 bg-grey-100 rounded-2xl 
                  transition-all duration-300 group-hover:bg-blue-400 group-hover:text-white"
                />
              </div>
              <h3 className="font-bold md:text-lg/tight text-base/tight  pt-2 md:pt-4 px-2 md:px-2 text-gray-900 md:w-2/3 w-full">
                Enter Shipment Details
              </h3>
              <p className="py-2 px-4 md:px-2 md:text-sm text-xs text-gray-600  md:w-3/4 w-full">
                Origin, Destination, temperature class, and pallet counts
              </p>
            </div>
            <div className="flex flex-col text-center items-center md:py-8 py-4 group hover:shadow-lg hover:rounded-3xl transition-all duration-300">
              <div className="relative flex flex-row">
                <span className="text-xs absolute -top-2 -right-2 font-semibold w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-blue-500">
                  2
                </span>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-2xl md:text-4xl text-blue-400 p-4 bg-grey-100 rounded-2xl 
                  transition-all duration-300 group-hover:bg-blue-400 group-hover:text-white"
                />
              </div>
              <h3 className="font-bold md:text-lg/tight text-base/tight  pt-2 md:pt-4 px-2 md:px-2 text-gray-900 md:w-2/3 w-full">
                Compare Quotes
              </h3>
              <p className="py-2 px-4 md:px-2 md:text-sm text-xs text-gray-600  md:w-3/4 w-full">
                Instantly see rates from vetted cold-chain
              </p>
            </div>
            <div className="flex flex-col text-center items-center md:py-8 py-4 group hover:shadow-lg hover:rounded-3xl transition-all duration-300">
              <div className="relative flex flex-row">
                <span className="text-xs absolute -top-2 -right-2 font-semibold w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-blue-500">
                  3
                </span>
                <FontAwesomeIcon
                  icon={faWallet}
                  className="text-2xl md:text-4xl text-blue-400 p-4 bg-grey-100 rounded-2xl 
                  transition-all duration-300 group-hover:bg-blue-400 group-hover:text-white"
                />
              </div>
              <h3 className="font-bold md:text-lg/tight text-base/tight  pt-2 md:pt-4 px-2 md:px-2 text-gray-900 md:w-2/3 w-full">
                Book Now & Pay Later
              </h3>
              <p className="py-2 px-4 md:px-2 md:text-sm text-xs text-gray-600  md:w-3/4 w-full">
                Confirm your booking & Pay Securely Online.
              </p>
            </div>
            <div className="flex flex-col text-center items-center md:py-8 py-4 group hover:shadow-lg hover:rounded-3xl transition-all duration-300">
              <div className="relative flex flex-row">
                <span className="text-xs absolute -top-2 -right-2 font-semibold w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-blue-500">
                  4
                </span>
                <FontAwesomeIcon
                  icon={faTruckFast}
                  className="text-2xl md:text-4xl text-blue-400 p-4 bg-grey-100 rounded-2xl 
                  transition-all duration-300 group-hover:bg-blue-400 group-hover:text-white"
                />
              </div>
              <h3 className="font-bold md:text-lg/tight text-base/tight  pt-2 md:pt-4 px-2 md:px-2 text-gray-900 md:w-2/3 w-full">
                Book Now & Pay Later
              </h3>
              <p className="py-2 px-4 md:px-2 md:text-sm text-xs text-gray-600  md:w-3/4 w-full">
                Confirm your booking & Pay Securely Online.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative w-full py-16 md:min-h-[640px]  min-h-[420px] md:bg-[length:100%] bg-[length:160%]
 bg-no-repeat md:bg-center bg-left-top"
        style={{ backgroundImage: "url('/assets/truck_banner.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A2A] via-[#17374E]/70 to-transparent"></div>

        <div className=" absolute inset-0  container mx-auto md:top-80 top-44">
          <div className="w-7/8 mx-auto">
            <div className="box-content  md:pt-8 pt-2 py-2 px-2 md:px-4">
              <h2 className="md:text-4xl/tight text-3xl/tight font-bold text-center tracking-widest text-white">
                Ready to Freeze
                <div className="pl-2 block text-blue-400">Your Costs ?</div>
              </h2>
              <div className="md:py-6 py-2">
                <p className="md:text-base/tight text-sm text-center mx-auto text-white">
                  Join hundreds of Australian Businesses already saving time and
                  money on cold freight
                </p>
                <div className="hero-button flex flex-row  md:gap-8 gap-2 py-4 justify-center">
                  <button className="bg-blue-500 px-6 py-2 rounded-2xl md:w-60 w-40 text-white md:text-base text-xs hover:bg-blue-400 hover:shadow-lg">
                    Create Free Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
