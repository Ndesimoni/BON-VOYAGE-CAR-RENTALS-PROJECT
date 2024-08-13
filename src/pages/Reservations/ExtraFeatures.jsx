import {
  IoCarOutline,
  IoCarSportOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

import ExtraFeaturesBlog from "./ExtraFeaturesBlog";
import { FaAmazonPay } from "react-icons/fa";

function ExtraFeatures() {
  return (
    <>
      <main className="text-lg w-[1200px] mx-auto  ">
        <div className="grid grid-cols-3  gap-x-10 mt-8 gap-y-16 mb-10 ">
          <ExtraFeaturesBlog
            icon={<IoTimeOutline />}
            heading="24/7 Booking Available"
            text="Rent a car any time. BonVoyage is there fo you safe traveling"
          />
          <ExtraFeaturesBlog
            icon={<FaAmazonPay />}
            text="Have a per-planned trip or need to go to the airport urgently? Book your car with us and reach your destination on time"
            heading="Pre-pay Your Car"
          />
          <ExtraFeaturesBlog
            icon={<RiCustomerService2Line />}
            heading="24/7 Customer Support"
            text="

         When renting a car with BonVoyage, you get free access to 24/7 customer support for every iss"
          />
          <ExtraFeaturesBlog
            icon={<RiSecurePaymentLine />}
            heading="A Secure Payment Gateway"
            text="

         You do not need to feel insecure while making online payments. We provide you with a 100% secure payment gateway"
          />
          <ExtraFeaturesBlog
            icon={<IoCarSportOutline />}
            heading="Cars For Professional Needs"
            text="

         You can easily rent a fleet of vehicles if you need the for any professional or personal course"
          />
          <ExtraFeaturesBlog
            icon={<IoCarOutline />}
            heading="Special Cars On Demand"
            text="

         Don't worry about finding luxury cars for special days. We have a set of luxury cars for you"
          />
        </div>

        {
          //this button takes you to the about page
        }
        <button className="uppercase font-semibold text-white bg-red-500 px-3 py-2 rounded-md hover:bg-red-100 hover:text-red-600 transition-all mb-10">
          know more{" "}
        </button>
        <div className="grid grid-cols-2 items-center">
          <img src="/family.png" alt="family" />
          <div>
            <h1 className="text-red-500 text-2xl capitalize mb-2">
              Cars Available for you to drive
            </h1>
            <p className="mb-4">
              BonVoyage Car Rentals provides you with the best and most demanded
              car models for rental. Choose your favorite car brand and model
              every time you need to rent a car.
            </p>

            <button className="uppercase font-semibold text-white bg-red-500 px-3 py-2 rounded-md hover:bg-red-100 hover:text-red-600 transition-all mb-10">
              select your car
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ExtraFeatures;
