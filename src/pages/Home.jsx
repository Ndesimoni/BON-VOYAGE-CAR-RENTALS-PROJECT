// import Header from "@/components/ui/Header/Header";

import { IoPricetagsOutline } from "react-icons/io5";
import { IoIosCar } from "react-icons/io";

import { IoKeyOutline } from "react-icons/io5";

import { IoMdBuild } from "react-icons/io";

import { MdNavigateNext } from "react-icons/md";

import MainImage from "@/components/ui/MainImage";
import CarFleet from "./Vehicles/CarFleet";
import MoreServices from "../components/Services/MoreServices";

import ImageTextView from "../components/ui/Reuseable_Ui/ImageTextView";
import Offerings from "../components/Services/offering/Offerings";
import OfferingContains from "../components/Services/offering/OfferingContains";
import TypesOfDealsOffered from "../components/Services/DealsOffered/TypesOfDealsOffered";
import TypesOfDealContain from "../components/Services/DealsOffered/TypesOfDealContain";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* //todo this is the main image section in home page */}
      <MainImage />

      {/* //todo this is the type of deals offered section in home page */}
      <TypesOfDealsOffered>
        <TypesOfDealContain
          Icons={IoPricetagsOutline}
          title="deals"
          NextArrow={MdNavigateNext}
          linkPath='best-short-term-car-rental-in-lanham'
          description=" Rent-To-Own is the smart alternative to car financing for those with bad or less than perfect credit."
        />

        <TypesOfDealContain
          Icons={IoMdBuild}
          title="rent After Accident "
          NextArrow={MdNavigateNext}
          linkPath="accident-in-rental-car"
          description="Rent-To-Own is the smart alternative to car financing for those with  bad or less than perfect credit. "
        />

        <TypesOfDealContain
          Icons={IoKeyOutline}
          title="RENT-TO-OWN "
          NextArrow={MdNavigateNext}
          linkPath="rent-to-own"
          description=" Rent-To-Own is the smart alternative to car financing for those with bad or less than perfect credit. "
        />

        <TypesOfDealContain
          Icons={IoIosCar}
          title="Ride share "
          linkPath="share-a-ride"
          NextArrow={MdNavigateNext}
          description=" Rent-To-Own is the smart alternative to car financing for those with bad or less than perfect credit. "
        />
      </TypesOfDealsOffered>

      {/* //todo this is the  car fleet  type section in home page */}
      <CarFleet />

      {/* //todo this is the  first image view in home page */}
      <ImageTextView
        backgroundImage1="url(/about-1.jpg)"
        backgroundImage2="url(/home.jpg)"
        h3=" Drive your way to success"
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
        <Link
          to="all-available-cars"
          className="text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all"
        >
          all available cars
        </Link>
        <Link
          to="all-vehicle-category"
          className="ml-10 text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all"
        >
          Vehicle collection
        </Link>
      </ImageTextView>

      {/* //todo this is the  first More Services section in home page */}
      <MoreServices />

      {/* //todo this is the  first Offering section in home page */}
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
          routeLinks="Economy-Cars"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
          roteLinks="Standard-Cars"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
          routeLinks="Premium-Cars"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
          routeLinks="SUVs"
        />
      </Offerings>

      {/* //todo this is the  second Image Text View section in home page */}
      <ImageTextView
        backgroundImage1="url(/help.jpg)"
        backgroundImage2="url(/cars-1.jpg)"
        h3=" drive your way to success"
        heading="Trust Bon Voyage to give you the best traveling experience"
        description="Travel is a new way of perceiving your life. It's a good passion to build it. It's a good passion to build it. Unsafe travel is a lesson for life, while safe travel is a lifetime memory. Rent a BonVoyage Car Rental."
      >
        <h3 className="text-red-500 text-3xl font-bold mb-4">
          We are always available  <br />
          because we care, your satisfaction is our priority
        </h3>
        <p className="text-white text-xl mb-8">
          When renting a car with BonVoyage,
          <br />
          you get free access to 24/7 customer support for every iss
        </p>
        <Link to="Contact-Us" className="text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all">
          Contact Us
        </Link>
        <Link to="Overview" className="ml-10 text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all">
          what we stand for
        </Link>
      </ImageTextView>

      {/* //todo this is the type of deals offered section in home page */}
      <TypesOfDealsOffered>
        <TypesOfDealContain
          Icons={IoPricetagsOutline}
          title="deals"
          NextArrow={MdNavigateNext}
          description=" Rent-To-Own is the smart alternative to car financing for those with bad or less than perfect credit."
        />

        <TypesOfDealContain
          Icons={IoMdBuild}
          title="rent After Accident "
          NextArrow={MdNavigateNext}
          description="Rent-To-Own is the smart alternative to car financing for those with bad or less than perfect credit. "
        />

        <TypesOfDealContain
          Icons={IoKeyOutline}
          title="RENT-TO-OWN "
          NextArrow={MdNavigateNext}
          description=" Rent-To-Own is the smart alternative to car financing for those with bad or less than perfect credit. "
        />

        <TypesOfDealContain
          Icons={IoIosCar}
          title="Ride share "
          NextArrow={MdNavigateNext}
          description=" Rent-To-Own is the smart alternative to car financing for those with  bad or less than perfect credit. "
        />
      </TypesOfDealsOffered>

      {/* //todo this is the  first Offering section in home page */}
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
          routeLinks="Economy-Cars"

        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
          roteLinks="Standard-Cars"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
          routeLinks="Premium-Cars"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
          routeLinks="SUVs"
        />
      </Offerings>

    </div>
  );
};

export default HomePage;
