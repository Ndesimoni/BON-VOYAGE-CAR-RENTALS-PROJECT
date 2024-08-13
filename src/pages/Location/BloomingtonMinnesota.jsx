// import MainImage from "@/components/ui/MainImage";

import MainImage from "@/components/ui/MainImage";
import ExtraFeatures from "../Reservations/ExtraFeatures";
import Button from "../../components/ui/Reuseable_Ui/Button";

import ImageTextView from "../../components/ui/Reuseable_Ui/ImageTextView";
import TypesOfDealsOffered from "../../components/Services/DealsOffered/TypesOfDealsOffered";
import TypesOfDealContain from "../../components/Services/DealsOffered/TypesOfDealContain";
import { IoKeyOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { IoIosCar, IoMdBuild } from "react-icons/io";
import Offerings from "../../components/Services/offering/Offerings";
import OfferingContains from "../../components/Services/offering/OfferingContains";
import SeeAllAvailableSection from "../../components/ui/Reuseable_Ui/SeeAllAvailableSection";
import SeeAllAvailableSectionContains from "../../components/ui/Reuseable_Ui/SeeAllAvailableSectionContains";

const BloomingtonMinnesota = () => {
  return (
    <div>
      <div className="flex bg-slate-200 items-center">
        Home / Car Rental Location / Tennessee{" "}
      </div>
      <MainImage />

      {/* //todo this is the type of deals offered section in home page */}
      <div className="py-5 px-2">
        <TypesOfDealsOffered>
          <TypesOfDealContain
            Icons={IoPricetagsOutline}
            title="deals"
            NextArrow={MdNavigateNext}
            description=" Rent-To-Own is the smart alternative to car financing for those with bad
 or less than perfect credit."
          />

          <TypesOfDealContain
            Icons={IoMdBuild}
            title="rent After Accident "
            NextArrow={MdNavigateNext}
            description="Rent-To-Own is the smart alternative to car financing for those with
        bad or less than perfect credit. "
          />

          <TypesOfDealContain
            Icons={IoKeyOutline}
            title="RENT-TO-OWN "
            NextArrow={MdNavigateNext}
            description=" Rent-To-Own is the smart alternative to car financing for those with
       bad or less than perfect credit. "
          />

          <TypesOfDealContain
            Icons={IoIosCar}
            title="Ride share "
            NextArrow={MdNavigateNext}
            description=" Rent-To-Own is the smart alternative to car financing for those with
   bad or less than perfect credit. "
          />
        </TypesOfDealsOffered>
      </div>

      {/* //todo this is the image text view section  */}

      <ImageTextView
        backgroundImage1="url(/help.jpg)"
        backgroundImage2="url(/cars-1.jpg)"
        h3=" drive your way to success"
        heading="Trust Bon Voyage to give you the best traveling experience"
        description="Travel is a new way of perceiving your life. It's a good passion to build it. It's a good passion to build it. Unsafe travel is a lesson for life, while safe travel is a lifetime memory. Rent a BonVoyage Car Rental."
      >
        <h3 className="text-red-500 text-3xl font-bold mb-4">
          A rental car for comfortable <br />
          and easy traveling
        </h3>
        <p className="text-white text-xl mb-8">
          BonVoyage Car Rental provides hygienic, responsible,
          <br />
          and certified cab drivers to drive you safely to your destination.
        </p>
        <button className="text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all">
          Rent a car
        </button>
        <button className="ml-10 text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all">
          Vehicle collection
        </button>
      </ImageTextView>

      {/* //todo // this is the Extra feature  section*/}
      <div className="flex items-center justify-center">
        <ExtraFeatures />
      </div>

      {/* //todo // this is the more feature section*/}
      {/* <div className="flex gap-8 mt-14 justify-center">
        <div className="flex flex-col  justify-center items-center bg-white">
          <img
            src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
            alt=""
          />

          <div className="mt-5 max-w-80 flex flex-col my-2 justify-center items-center ">
            <h2 className="font-bold text-2xl  py-1">
              Dependable vehicles, great service
            </h2>
            <p className="mt-1 mb-10">
              Enterprise specializes in commercial-grade cargo vans and trucks
              to deliver the dependability, flexibility and service you need to
              keep moving.
            </p>
            <button className="mt-10 mb-4 font-bold  bg-green-700 px-5 py-3 text-gray-50 uppercase">
              View Truck Rental Vehicles{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col  justify-center items-center bg-white">
          <img
            src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
            alt=""
          />

          <div className="mt-5 max-w-80 flex flex-col my-2 justify-center items-center ">
            <h2 className="font-bold text-2xl  py-1">
              Dependable vehicles, great service
            </h2>
            <p className="mt-1 mb-10">
              Enterprise specializes in commercial-grade cargo vans and trucks
              to deliver the dependability, flexibility and service you need to
              keep moving.
            </p>
            <button className="mt-10 mb-4 font-bold  bg-green-700 px-5 py-3 text-gray-50 uppercase">
              View Truck Rental Vehicles{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col  justify-center items-center bg-white">
          <img
            src="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
            alt=""
          />

          <div className="mt-5 max-w-80 flex flex-col my-2 justify-center items-center ">
            <h2 className="font-bold text-2xl  py-1">
              Dependable vehicles, great service
            </h2>
            <p className="mt-1 mb-10">
              Enterprise specializes in commercial-grade cargo vans and trucks
              to deliver the dependability, flexibility and service you need to
              keep moving.
            </p>
            <button className="mt-10 mb-4 font-bold  bg-green-700 px-5 py-3 text-gray-50 uppercase">
              View Truck Rental Vehicles{" "}
            </button>
          </div>
        </div>
      </div> */}

      <Offerings
        heading="Latest Offerings"
        description="Trust your local Enterprise experts to help you find the light and medium-duty vehicles you need, including pickup trucks, box trucks, moving trucks and cargo vans."
      >
        {/* this is the offering section which hold the image, description and button */}
        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
        />
      </Offerings>

      {/* this is the third section */}
      <SeeAllAvailableSection>
        <SeeAllAvailableSectionContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T13_Eng_Utility.Jobsite.jpg"
          alt="trucks"
        >
          <h2>Build your truck and van rental program with custom rates</h2>
          <p>
            We’ll deliver the commercial trucks and vans you require for your
            project-based, seasonal or long-term needs. Whether you’re looking
            for a one-time rental or a long-term strategy, our experts are here
            for you
          </p>
          <Button> See all available cars in our car fleet </Button>
        </SeeAllAvailableSectionContains>

        {/* <SeeAllAvailableSectionContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_Truck.Sales_Lineup_Blank_USonly.png"
          alt="trucks"
        >
          <h2>Build your truck and van rental program with custom rates</h2>
          <p>
            We’ll deliver the commercial trucks and vans you require for your
            project-based, seasonal or long-term needs. Whether you’re looking
            for a one-time rental or a long-term strategy, our experts are here
            for you
          </p>
          <Button> See all available cars in our car fleet </Button>
        </SeeAllAvailableSectionContains> */}
      </SeeAllAvailableSection>
    </div>
  );
};

export default BloomingtonMinnesota;
