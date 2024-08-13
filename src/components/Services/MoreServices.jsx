import {
  IoCarOutline,
  IoCarSportOutline,
  IoTimeOutline,
} from "react-icons/io5";
import ExtraFeaturesBlog from "../../pages/Reservations/ExtraFeaturesBlog";
import { FaAmazonPay } from "react-icons/fa";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

const MoreServices = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center ">
        <div>
          <div className="font-bold text-2xl mb-1">
            <p>Latest Offerings</p>
          </div>
          <p>
            Trust your local Enterprise experts to help you find the light and
            medium-duty vehicles you need, including pickup trucks, box trucks,
            moving trucks and cargo vans.
          </p>
        </div>
        <div className="grid grid-cols-3  gap-x-10 mt-8 gap-y-16 mb-10 w-[1200px] ">
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
      </div>
    </>
  );
};

export default MoreServices;
