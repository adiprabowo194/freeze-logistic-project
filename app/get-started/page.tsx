import Image from "next/image";
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

import Footer from "@/components/Footer";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons/faPeopleCarryBox";

export default function Home() {
  return (
    <div className="py-8">
      <section className="flex md:flex-row flex-col w-full  py-16 container-full mx-auto ">
        <div className="box-title md:py-16 py-8 md:min-h-[480px] min-h-[500px] items-center bg-blue-500 w-1/2 relative">
          <h1 className=" md:text-7xl/tight text-3xl/tight font-bold  text-white  mx-auto absolute bottom-34 left-24">
            Why Freeze Logistics?
          </h1>
          <p className="md:text-base/tight text-[10px] mx-auto text-white  tracking-wider absolute bottom-20 w-3/4 left-24">
            Experience premium chilled and frozen product distribution with the
            highest quality standards.
          </p>
        </div>
        <div
          className="bg-no-repeat  md:bg-[length:120%] bg-[length:200%] w-1/2"
          style={{
            backgroundImage: "url('/assets/truck_freeze_logistics.webp')",
          }}
        ></div>
      </section>
      <section className="AnyTemperature flex flex-col items-center w-full  container mx-auto">
        <div className="box-content py-2">
          <h1 className="md:text-5xl/tight text-4xl/tight font-bold text-center  px-2 md:px-8">
            <div>End-to-End Solutions for</div>
            <div className="bg-[linear-gradient(90deg,#4267D7_32%,#3ACDFF_100%)] bg-clip-text text-transparent">
              Your Business
            </div>
          </h1>
          <div className="py-8 w-3/4 mx-auto">
            <p className="md:text-base/tight text-sm text-center mx-auto">
              Freeze Logistics provides nationwide freight services for all your
              refrigerated goods with ease.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-3/4 gap-6 md:gap-8 mx-auto px-6 md:px-16  pb-8 md:pb-16">
          <div className="md:py-4 py-8 w-1/4">
            <div className="flex flex-col items-center">
              <i className="ri-truck-line text-3xl text-red-600 bg-red-100 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3 text-center">
                Frozen <div>Distribution</div>
              </h3>
            </div>
          </div>
          <div className="md:py-4 py-8 w-1/4">
            <div className="flex flex-col items-center">
              <i className="ri-temp-cold-line text-3xl text-blue-400 bg-blue-50 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3 text-center">
                Chilled <div>Distribution</div>
              </h3>
            </div>
          </div>
          <div className="md:py-4 py-8 w-1/4">
            <div className="flex flex-col items-center">
              <i className="ri-send-ins-fill text-3xl text-green-500 bg-green-100 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3 text-center">
                Last Mile <div>Delivery</div>
              </h3>
            </div>
          </div>
          <div className="md:py-4 py-8 w-1/4">
            <div className="flex flex-col items-center">
              <i className="ri-box-3-line text-3xl text-blue-500 bg-blue-200 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3 text-center">
                Cold <div>Storage</div>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="AnyTemperature flex flex-col items-center w-full  container mx-auto py-8">
        <div className="box-content py-2">
          <h1 className="md:text-5xl/tight text-4xl/tight font-bold text-center  px-2 md:px-8">
            <div className="bg-[linear-gradient(90deg,#4267D7_32%,#3ACDFF_100%)] bg-clip-text text-transparent">
              Get In Touch With Us
            </div>
          </h1>
          <div className="py-8 w-full mx-auto">
            <p className="md:text-base/tight text-sm text-center mx-auto">
              Complete the form below and our team will get in touch with you
              shortly.
            </p>
          </div>
        </div>
        <div className="w-2/4 grid grid-cols-2 mx-auto gap-4">
          <div className="pb-4">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Company Name
            </span>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="PT. Example Corp"
            />
          </div>
          <div className="pb-4">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Contact Name *
            </span>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="pb-4">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email *
            </span>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="email@company.com"
            />
          </div>
          <div className="pb-4">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Contact Number *
            </span>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="+21 435 464"
            />
          </div>
          <div className="pb-4">
            <span className="uppercase text-sm text-gray-600 font-bold">
              suburb *
            </span>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Northern Territory"
            />
          </div>
          <div className="pb-4">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Street Address *
            </span>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Street Address"
            />
          </div>
        </div>
        <div className="w-2/4 grid grid-cols-1 mx-auto gap-4">
          <div className="pb-2">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Enquiry *
            </span>
            <textarea
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
              placeholder="Your Question"
            />
          </div>
          <div className="pb-4">
            <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </section>
      <section className="WhyLove w-full md:px-8 py-16 container-full  bg-[linear-gradient(61deg,#0D1A2A_0%,#0F253C_66%,#17374E_100%)]">
        <div className="w-7/8 mx-auto">
          <div className="box-content  pt-8 py-8 px-2 md:px-4">
            <h2 className="md:text-3xl/tight text-4xl/tight font-bold text-center tracking-widest text-white">
               Freeze Logistic — B2B Cold Chain Solutions
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full py-2 px-2 md:px-16 mx-auto pb-8 md:pb-16 text-white">
            <div className="w-[48%] md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-xl text-xs">
                  Domestic distribution network with 50+ hub locations
                </p>
              </div>
            </div>

            <div className="w-[48%] md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-xl text-xs">
                  Comprehensive dashboard for shipment monitoring
                </p>
              </div>
            </div>

            <div className="w-[48%] md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-xl text-xs">
                  Experienced operations{" "}
                  <span className="block">team excellent</span>
                </p>
              </div>
            </div>

            <div className="w-[48%] md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-xl text-xs">
                  Dedicated Support for every
                  <span className="block">Freeze Logistic customer</span>
                </p>
              </div>
            </div>

            <div className="w-[48%] md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-xl text-xs">
                  No Credit
                  <span className="block">Card Required</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
