"use client";

import Footer from "@/components/Footer";
import { useContactForm } from "@/hooks/useContactForm";
import SubmitButton from "@/components/SubmitButton";
import { Toaster } from "react-hot-toast";

import dynamic from "next/dynamic";
import { useState } from "react";

const AsyncSelect = dynamic(() => import("react-select/async"), {
  ssr: false,
  loading: () => <div className="text-sm text-gray-400">Loading...</div>,
});

type OptionType = {
  value: number;
  label: string;
};

export default function Page() {
  const [selectedSuburb, setSelectedSuburb] = useState<OptionType | null>(null);

  const { state, formAction, formRef } = useContactForm(() => {
    setSelectedSuburb(null);
  });

  const loadOptions = async (inputValue: string): Promise<OptionType[]> => {
    const res = await fetch(`/api/coverage-areas?q=${inputValue}`);
    const data = await res.json();
    return data;
  };

  return (
    <div className="py-8">
      <section className="flex md:flex-row flex-col w-full md:h-[480px] h-[520px] container-full mx-auto">
        <div className="bg-blue-500 md:w-1/2 w-full h-full flex items-center px-6 md:px-16 pt-4 mx-auto">
          <div className="max-w-xl absolute">
            <h1 className="md:text-7xl/tight text-3xl/tight font-bold text-white pt-10 md:text-left text-center">
              Why Freeze Logistics?
            </h1>
            <p className="md:text-base text-sm text-center md:text-left text-white py-4 mx-auto tracking-wider">
              Experience premium chilled and frozen product distribution{" "}
              <span
                className="block
              "
              >
                with the highest quality standards.
              </span>
            </p>
          </div>
        </div>

        <div
          className="md:w-1/2 w-full md:h-[260px] h-[420px] md:h-full bg-cover  bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/truck_freeze_logistics.webp')",
          }}
        />
      </section>
      <section className="AnyTemperature flex flex-col items-center w-full  container mx-auto py-16">
        <div className="box-content py-2">
          <h1 className="md:text-5xl/tight text-4xl/tight font-bold text-center  px-2 md:px-8">
            <div>End-to-End Solutions for</div>
            <div className="bg-[linear-gradient(90deg,#4267D7_32%,#3ACDFF_100%)] bg-clip-text text-transparent">
              Your Business
            </div>
          </h1>
          <div className="py-8 w-3/4 mx-auto">
            <p className="md:text-base/tight text-sm text-center mx-auto tracking-wider">
              Freeze Logistics provides nationwide freight services for all your
              refrigerated goods with ease.
            </p>
          </div>
        </div>
        <div className="grid md:flex grid-cols-2 md:flex-row w-3/4">
          <div className="md:py-4 py-6 md:w-1/4">
            <div className="flex flex-col items-center">
              <i className="ri-truck-line text-3xl text-red-600 bg-red-100 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3 text-center">
                Frozen <div>Distribution</div>
              </h3>
            </div>
          </div>
          <div className="md:py-4 py-6 md:w-1/4">
            <div className="flex flex-col items-center">
              <i className="ri-temp-cold-line text-3xl text-blue-400 bg-blue-50 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3 text-center">
                Chilled <div>Distribution</div>
              </h3>
            </div>
          </div>
          <div className="md:py-4 py-6 md:w-1/4">
            <div className="flex flex-col items-center">
              <i className="ri-send-ins-fill text-3xl text-green-500 bg-green-100 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3 text-center">
                Last Mile <div>Delivery</div>
              </h3>
            </div>
          </div>
          <div className="md:py-4 py-6 md:w-1/4">
            <div className="flex flex-col items-center">
              <i className="ri-box-3-line text-3xl text-blue-500 bg-blue-200 p-2 rounded-xl w-fit"></i>
              <h3 className="font-bold text-gray-600 md:text-lg text-base pt-3 text-center">
                Cold <div>Storage</div>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="AnyTemperature flex flex-col items-center w-full  container mx-auto py-8 px-2">
        <div className="box-content py-2">
          <h1 className="md:text-5xl/tight text-3xl/tight font-bold text-center  px-2 md:px-8">
            <div className="bg-[linear-gradient(90deg,#4267D7_32%,#3ACDFF_100%)] bg-clip-text text-transparent">
              Get In Touch With Us
            </div>
          </h1>
          <div className="py-8 w-full mx-auto">
            <p className="md:text-base/tight text-sm text-center mx-auto tracking-wider">
              Complete the form below and our team will get in touch with you
              shortly.
            </p>
          </div>
        </div>
        <Toaster position="top-right" />
        <form ref={formRef} action={formAction} className="w-full">
          <div className="w-full md:w-2/4 grid grid-cols-1 md:grid-cols-2 mx-auto gap-4 px-6">
            <div className="pb-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Company Name
              </span>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="PT. Example Corp"
                name="company_name"
              />
              {state?.errors?.company_name && (
                <p className="text-red-500">{state.errors.company_name}</p>
              )}
            </div>
            <div className="pb-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Contact Name *
              </span>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name"
                name="contact_name"
              />
              {state?.errors?.contact_name && (
                <p className="text-red-500">{state.errors.contact_name}</p>
              )}
            </div>
            <div className="pb-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email *
              </span>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="email@company.com"
                name="email"
              />
              {state?.errors?.email && (
                <p className="text-red-500">{state.errors.email}</p>
              )}
            </div>
            <div className="pb-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Contact Number *
              </span>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="0412 345 678"
                name="contact_number"
              />
              {state?.errors?.contact_number && (
                <p className="text-red-500">{state.errors.contact_number}</p>
              )}
            </div>
            {/* SUBURB */}
            <div className="pb-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Suburb *
              </span>

              <div className="mt-2">
                <AsyncSelect
                  cacheOptions
                  loadOptions={loadOptions}
                  defaultOptions
                  value={selectedSuburb}
                  onChange={(val) => setSelectedSuburb(val as OptionType)}
                  placeholder="Search suburb or state..."
                  classNamePrefix="react-select"
                  styles={{
                    control: (base, stateSelect) => ({
                      ...base,
                      backgroundColor: "#f3f4f6",
                      borderRadius: "1rem",
                      padding: "6px",
                      border: state?.errors?.suburb
                        ? "2px solid #ef4444"
                        : stateSelect.isFocused
                          ? "2px solid #3b82f6"
                          : "none",
                      boxShadow: "none",
                    }),
                    menu: (base) => ({
                      ...base,
                      borderRadius: "1rem",
                      overflow: "hidden",
                    }),
                  }}
                />
              </div>

              {/* hidden input */}
              <input
                type="hidden"
                name="suburb"
                value={selectedSuburb?.label || ""}
              />

              {state?.errors?.suburb && (
                <p className="text-red-500 mt-1 text-sm">
                  {state.errors.suburb[0]}
                </p>
              )}
            </div>

            <div className="pb-4">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Street Address *
              </span>

              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Full Street Address"
                name="street_address"
              />

              {state?.errors?.street_address && (
                <p className="text-red-500 mt-1">
                  {state.errors.street_address}
                </p>
              )}
            </div>
          </div>
          <div className="w-full md:w-2/4 grid grid-cols-1 mx-auto gap-4 px-6">
            <div className="pb-2">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Enquiry *
              </span>
              <textarea
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                placeholder="Your Question"
                name="enquiry"
              />
              {state?.errors?.enquiry && (
                <p className="text-red-500">{state.errors.enquiry}</p>
              )}
            </div>
            <div className="pb-4">
              <SubmitButton />
            </div>
          </div>
        </form>
      </section>
      <section className="WhyLove w-full md:px-8 py-4 container-full  bg-[linear-gradient(61deg,#0D1A2A_0%,#0F253C_66%,#17374E_100%)]">
        <div className="w-7/8 mx-auto">
          <div className="box-content  pt-8 py-8 md:px-4">
            <h2 className="md:text-4xl/tight text-4xl/tight font-bold text-center tracking-widest text-white">
               Freeze Logistic{" "}
              <div className="bg-[linear-gradient(90deg,#4267D7_32%,#3ACDFF_100%)] bg-clip-text text-transparent inline-block">
                — B2B Cold Chain Solutions
              </div>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full py-2 px-2 md:px-16 mx-auto pb-8 md:pb-16 text-white">
            <div className="w-full md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-lg text-xs">
                  Domestic distribution network with 50+ hub locations
                </p>
              </div>
            </div>

            <div className="w-full md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-lg text-xs">
                  Comprehensive dashboard for shipment monitoring
                </p>
              </div>
            </div>

            <div className="w-full md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-lg text-xs">
                  Experienced operations{" "}
                  <span className="md:block">team excellent</span>
                </p>
              </div>
            </div>

            <div className="w-full md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-lg text-xs">
                  Dedicated Support for every
                  <span className="md:block">Freeze Logistic customer</span>
                </p>
              </div>
            </div>

            <div className="w-full md:w-[30%] border border-gray-200 rounded-2xl hover:bg-[#4267D7] group transition-colors duration-300 hover:shadow-lg">
              <div className="flex flex-col text-center items-center py-4">
                <p className="py-2 px-1 md:text-lg text-xs">
                  No Credit
                  <span className="md:block">Card Required</span>
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
