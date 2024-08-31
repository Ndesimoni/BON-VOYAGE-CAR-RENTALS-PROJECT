// external packages
import { IoPricetagsOutline } from "react-icons/io5";
import { IoIosCar } from "react-icons/io";
import { IoKeyOutline } from "react-icons/io5";
import { IoMdBuild } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion"

// components
import MainImage from "@/components/ui/MainImage";
import CarFleet from "./Vehicles/CarFleet";
// import MoreServices from "../components/Services/MoreServices";

import ImageTextView from "../components/ui/Reuseable_Ui/ImageTextView";
import Offerings from "../components/Services/offering/Offerings";
import OfferingContains from "../components/Services/offering/OfferingContains";
import TypesOfDealsOffered from "../components/Services/DealsOffered/TypesOfDealsOffered";
import TypesOfDealContain from "../components/Services/DealsOffered/TypesOfDealContain";

import MoreServices from "../components/Services/MoreServices";
import { useQuery } from "@tanstack/react-query";
import { getAllGuestReservations } from "../lib/supabaseApi";

const HomePage = () => {
  const data = useQuery({
    queryKey: ["reservations"],
    queryFn: getAllGuestReservations,
  });
  console.log(data);

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
          linkPath="best-short-term-car-rental-in-lanham"
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
        backgroundImage2="url(/exthree-1.jpg)"
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
          className="text-white bg-red-500 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all hover:bg-black  hover:text-green-400"
        >
          all available cars
        </Link>
        <Link
          to="all-vehicle-category"
          className="ml-10 text-white bg-red-500 uppercase border-white hover:opacity-50 py-2 px-4 border hover:bg-black  hover:text-green-400 transition-all"
        >
          Vehicle collection
        </Link>
      </ImageTextView>

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

      {/* //todo this is the  second Image Text View section in home page */}
      <ImageTextView
        backgroundImage1="url(/help.jpg)"
        backgroundImage2="url(/home.jpg)"
        h3="We're here for you because we care "
        heading="Trust Bon Voyage to give you the best traveling experience"
        description="Travel is a new way of perceiving your life. It's a good passion to build it. It's a good passion to build it. Unsafe travel is a lesson for life, while safe travel is a lifetime memory. Rent a BonVoyage Car Rental."
      >
        <h3 className="text-red-500 text-3xl font-bold mb-4">
          We are always available <br />
          because we care, your satisfaction is our priority
        </h3>
        <p className="text-white text-xl mb-8">
          When renting a car with BonVoyage,
          <br />
          you get free access to 24/7 customer support for every issues
        </p>
        <Link
          to="Contact-Us"
          className="text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all"
        >
          Contact Us
        </Link>
        <Link
          to="Overview"
          className="ml-10 text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all"
        >
          what we stand for
        </Link>
      </ImageTextView>

      {/* //todo this is the  first Offering section in home page */}
      <Offerings
        heading="Bon voyage make the world a better place"
        description="With bon voyage lets come together and connect, network share ideas and build relationships that last a life time  "
      >
        {/* this is the offering section which hold the image, description and button */}

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

      {/* //todo this is the  first More Services section in home page */}
      <MoreServices />
      {/* <PlacesToVisit></PlacesToVisit> */}
    </div>
  );
};

export default HomePage;
