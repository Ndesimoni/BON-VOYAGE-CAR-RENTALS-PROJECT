// import MainImage from "@/components/ui/MainImage";

import MainImage from "@/components/ui/MainImage";
import ExtraFeatures from "../Reservations/ExtraFeatures";

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
import { Link } from "react-router-dom";

const BloomingtonMinnesota = () => {
  return (
    <div>
      <div className="flex bg-slate-200 items-center">
        Home / Car Rental Location / Tennessee{" "}
      </div>
      <MainImage />

      {/* //todo this is the  first Offering section in home page */}
      <Offerings
        heading="Latest  car Offering "
        description="With our expertise knowledge, we help you find the best car that matches your need, including pickup trucks,  SUVs, and sports car ."
      >
        {/* this is the offering section which hold the image, description and button */}

        <OfferingContains
          image="economyCars.jpg"
          h3="best Economy cars with great service"
          description="Our range of economy cars are perfect for budget-conscious travelers. "
          button="View Truck Rental Vehicles"
          routeLinks="Economy-Cars"
        />

        <OfferingContains
          image="standardCars Small.jpeg"
          h3="Our Standard vehicles, "
          description="These vehicles offers ample space for both passengers and luggage,  "
          button="View Truck Rental Vehicles"
          routeLinks="Standard-Cars"
        />

        <OfferingContains
          image="car-9.jpg"
          h3=" experience high-end Luxury "
          description="Experience the comfort and style with our premium car rentals. ."
          button="View Truck Rental Vehicles"
          routeLinks="Premium-Cars"
        />

        <OfferingContains
          image="SuvsCar.jpg"
          h3=" luxury and budget friendly  SUVs, "
          description="best adventure seekers and families looking to vacate or camp on holidays."
          button="View Truck Rental Vehicles"
          routeLinks="SUVs"
        />
      </Offerings>

      {/* //todo this is the type of deals offered section in home page */}
      <div className="px-2 mb-12">
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
            description=" Rent-To-Own is the smart alternative to car financing for those with bad or less than perfect credit. "
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

        <Link
          to="all-available-cars"
          className="text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all"
        >
          Rent a car
        </Link>

        <Link
          to="all-vehicle-category"
          className="ml-10 text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all"
        >
          Vehicle collection
        </Link>
      </ImageTextView>

      {/* //todo // this is the Extra feature  section*/}
      <div className="flex items-center justify-center">
        <ExtraFeatures />
      </div>

      {/* //todo this is the  first Offering section in home page */}

      {/* this is the offering section which hold the image, description and button */}
      <Offerings>
        <OfferingContains
          image="bon-voyage-customer-satisfaction Small.jpeg"
          h3="see our customers reviews"
          description="enjoy the beauty travel with bon voyage "
          button="View Truck Rental Vehicles"
          routeLinksForBetterPlace="bon-voyage-reviews"
        />

        <OfferingContains
          image="bon-voyage-contactuspage.jpg"
          h3="have complains contact us  "
          description="visit our contact page to leave a complain "
          button="View Truck Rental Vehicles"
          routeLinksForBetterPlace="Contact-us"
        />

        <OfferingContains
          image="bon-voyage-place-to-visite-1.jpg"
          h3="best places to visit in marry land"
          description="enjoy the beauty travel with bon voyage"
          button="View Truck Rental Vehicles"
          routeLinksForBetterPlace="bon-voyage-touristic-site"
        />

        <OfferingContains
          image="bon-voyage-about-us.jpg"
          h3=" make the world a better place"
          description="see more about bon voyage car rentals"
          button="View Truck Rental Vehicles"
          routeLinksForBetterPlace="How-we-operate"
        />
      </Offerings>

      {/* this is the third section */}
      <SeeAllAvailableSection>
        <SeeAllAvailableSectionContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T13_Eng_Utility.Jobsite.jpg"
          alt="trucks"
        >
          <h2>Build your truck and van rental program with custom rates</h2>
          <p className="mb-5">
            We’ll deliver the commercial trucks and vans you require for your
            project-based, seasonal or long-term needs. Whether you’re looking
            for a one-time rental or a long-term strategy, our experts are here
            for you
          </p>
          <Link to="all-vehicle-category" className="booking_btn ">
            See all available cars in our car fleet{" "}
          </Link>
        </SeeAllAvailableSectionContains>
      </SeeAllAvailableSection>
    </div>
  );
};

export default BloomingtonMinnesota;
