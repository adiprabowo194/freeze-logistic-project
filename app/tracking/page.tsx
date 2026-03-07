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
      <section
        className="relative w-full md:py-16 py-8 md:min-h-[640px] min-h-[500px]
  md:bg-[length:120%]  bg-[length:200%]
  bg-no-repeat md:bg-center bg-left-top"
        style={{ backgroundImage: "url('/assets/truck_banner.webp')" }}
      >
        <div className="absolute inset-0 bg-[#4267D7]/80"></div>

        <div className=" absolute inset-0 mx-auto md:top-80 top-70 container">
          <div className="md:w-7/8 w-full md:px-10 px-4">
            <div className="box-content  md:pt-8 pt-2 py-2 px-2 md:px-4">
              <h2 className="md:text-5xl/tight text-3xl/tight font-bold  text-white">
                Deliver Smarter
              </h2>
              <div className="md:py-4 py-2 md:w-4/6 w-full tracking-wider">
                <p className="md:text-base/tight text-[10px] mx-auto text-white">
                  Innovative Delivery solution that will increase your bottom
                  line, improve customer satisfaction, and win you more
                  business. Door to door & time slot deliveries with no hidden
                  charges
                </p>
              </div>
              <div className="flex md:gap-16">
                <div className="flex md:flex-row flex-col items-center md:gap-4">
                  <i className="ri-checkbox-circle-line text-amber-400"></i>
                  <p className="md:py-8 text-center text-gray-100 md:text-sm text-[10px] ">
                    No Manual Handling Fees
                  </p>
                </div>
                <div className="flex md:flex-row flex-col items-center md:gap-4">
                  <i className="ri-checkbox-circle-line text-amber-400"></i>
                  <p className="md:py-8 text-center text-gray-100 md:text-sm text-[10px] ">
                    No Residential Surcharges
                  </p>
                </div>
                <div className="flex md:flex-row flex-col items-center md:gap-4">
                  <i className="ri-checkbox-circle-line text-amber-400"></i>
                  <p className="md:py-8 text-center text-gray-100 md:text-sm text-xs ">
                    No Heavy Weight Restrictions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="AnyTemperature flex flex-col items-center w-full md:px-4 py-16 container mx-auto">
        <div className="box-content py-2 px-4">
          <h2 className="md:text-3xl/tight text-4xl/tight font-bold text-center tracking-widest bg-[linear-gradient(90deg,#4267D7_32%,#3ACDFF_100%)] bg-clip-text text-transparent">
            Trusted by Businesses across Victoria
          </h2>
          <div className="py-8 grid md:grid-cols-3 grid-cols-1 gap-4 w-7/8 mx-auto">
            <div>
              <Image
                src={DataImage.Food__Beverage}
                alt="Food Beverage Freeze Logistics"
                priority
                className="rounded-4xl hover:shadow-lg object-cover border-4 border-white"
              />
              <h2 className="md:text-xl text-base font-semibold tracking-wide mb-6 text-center py-6">
                Food and Beverage
              </h2>
            </div>
            <div>
              <Image
                src={DataImage.Pharmaceuticals_Healthcare}
                alt="Pharmaceuticals & Healthcare Freeze Logistics"
                priority
                className="rounded-4xl hover:shadow-lg object-cover border-4 border-white"
              />
              <h2 className="md:text-xl text-base font-semibold tracking-wide mb-6 text-center py-6">
                Pharmaceuticals and Healthcare
              </h2>
            </div>
            <div>
              <Image
                src={DataImage.Fresh_Produce_Agriculture}
                alt="Fresh Produce and Agriculture Freeze Logistics"
                priority
                className="rounded-4xl hover:shadow-lg object-cover border-4 border-white"
              />
              <h2 className="md:text-xl text-base font-semibold tracking-wide mb-6 text-center py-6">
                Fresh Produce and Agriculture
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="AnyTemperature flex flex-col items-center w-full md:px-4 py-4 container mx-auto">
        <div className="box-content py-2 px-4">
          <h2 className="md:text-4xl/tight text-3xl/tight font-bold text-center tracking-widest">
            Why Choose
            <span className="pl-2 md:inline block text-blue-500">
              Freeze Logistics?
            </span>
          </h2>
          <div className="py-8">
            <p className="md:text-base/tight text-sm text-center w-2/3 mx-auto">
              With our cloud-based management system, you can use our platform
              to book, track, and trace shipments.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full px-6 md:px-16  pb-8 md:pb-16">
          <div className="md:py-4 py-8 px-8 flex">
            <div className="flex flex-col text-center">
              <FontAwesomeIcon
                icon={faClock}
                className="text-4xl md:text-5xl text-blue-400 rounded-xl md:px-4 px-0 mx-auto"
              />
              <h3 className="font-bold text-gray-600 md:text-lg text-2xl py-4">
                Save Hours <div>Every Week</div>
              </h3>
              <p className="md:text-base text-sm tracking-wide text-gray-600  mx-auto">
                End-to-end visibility, predictable delivery times and improved
                delivery experience. Keeping your customers happy every step of
                the way.
              </p>
            </div>
          </div>
          <div className="md:py-4 py-8 px-8 flex">
            <div className="flex flex-col text-center">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="text-4xl md:text-5xl text-blue-400 rounded-xl md:px-4 px-0 mx-auto"
              />
              <h3 className="font-bold text-gray-600 md:text-lg text-2xl py-4">
                Lower your
                <div>Shipping Cost</div>
              </h3>
              <p className="md:text-base text-sm tracking-wide text-gray-600  mx-auto">
                With favourable carrier rates, premium transport partners and a
                team of dedicated freight experts on your side
              </p>
            </div>
          </div>
          <div className="md:py-4 py-8 px-8 flex">
            <div className="flex flex-col text-center">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="text-4xl md:text-5xl text-blue-400 rounded-xl md:px-4 px-0 mx-auto"
              />
              <h3 className="font-bold text-gray-600 md:text-lg text-2xl py-4">
                We care about
                <div>your business</div>
              </h3>
              <p className="md:text-base text-sm tracking-wide text-gray-600  mx-auto">
                With Frozen Logistics, you gain a professional committed partner
                that works with you to design, optimise and manage courier
                solutions to increase your bottom line.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-full bg-[#0F253C] ">
        <div className="gap-16 md:flex grid md:flex-row grid-col-3 justify-center py-16 text-center items-center">
          <div className="flex flex-col">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-6xl md:text-5xl md:py-4 text-white rounded-xl  mx-auto"
            />
            <h3 className="md:text-base/tight text-sm py-4 md:py-2 text-center  mx-auto text-white tracking-widest">
              Real-Time <div>Tracking</div>
            </h3>
          </div>
          <div className="flex flex-col">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-6xl md:text-5xl md:py-4  text-white rounded-xl  mx-auto"
            />
            <h3 className="md:text-base/tight text-sm py-4 md:py-2  text-center  mx-auto text-white tracking-widest">
              Australian <div>Based Support</div>
            </h3>
          </div>
          <div className="flex flex-col">
            <FontAwesomeIcon
              icon={faTruckFast}
              className="text-6xl md:text-5xl md:py-4  text-white rounded-xl  mx-auto"
            />
            <h3 className="md:text-base/tight text-sm py-4 md:py-2  text-center  mx-auto text-white tracking-widest">
              Effortless
              <div>Shipping</div>
            </h3>
          </div>
          <h2 className="md:text-4xl/tight text-3xl font-bold flex flex-col  border-white md:px-14 min-h-20 items-center  md:border-l-2 ">
            <span className="text-white">Create A Quote</span>
            <span className="hero-button flex flex-row  md:gap-8 gap-2 py-4 justify-center">
              <button className="bg-white px-6 py-2 rounded-2xl md:w-60 w-40  md:text-base text-xs text-[#0F253C] hover:bg-blue-500 hover:text-white">
                Get Started
              </button>
            </span>
          </h2>
        </div>
      </section>
      <Footer />
    </div>
  );
}
