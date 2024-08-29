import styled from "styled-components";
import ExtraFeatures from "../Reservations/ExtraFeatures";
import ReservationForm from "../../components/Form/reservationForm/ReservationForm";

import CarFleet from "../Vehicles/CarFleet";
import Offerings from "../../components/Services/offering/Offerings";
import OfferingContains from "../../components/Services/offering/OfferingContains";

const DivInfoStyles = styled.section({
  display: "flex ",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.5rem",
  width: "1200px",
  alignItems: "center",
  padding: "5px",
});

const WoodBridgeVirginia = () => {
  return (
    <div>
      <div>Home / location / Virginia </div>
      <div className="flex">
        <div className="flex flex-col justify-center items-start pl-5">
          <h1 className="font-bold text-3xl ">Car Rental in Virginia</h1>
          <p className="mt-5">
            Get the same great customer service from Enterprise Rent-A-Car you
            have come to expect as you travel to Europe. With branches in over
            20+ European countries and a wide range of car classes, you are sure
            to find a car for your trip. Ready to rent a car in Europe or have
            questions? We have you covered below.
          </p>
        </div>

        <div>
          <img
            src="https://www.enterprise.com/en/car-rental-locations/europe/_jcr_content/root/container/container/teaser_copy_copy_cop_54060802.coreimg.82.1920.jpeg/1712853678315/save-10-percent-france-na.jpeg"
            alt=""
          />
        </div>
      </div>
      {/* this is the form */}
      <div className="flex justify-center">
        <ReservationForm />
      </div>
      {/* 


 {  {/* //todo this is the  first Offering section in home page */}
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

      {/* // todo this is the Car Fleet section */}
      <CarFleet />
      {/* this is the extra features section */}
      <div className="my-10">
        <ExtraFeatures />
      </div>

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

      <div className="flex justify-center my-5 pb-5 px-1">
        <DivInfoStyles>
          <div>
            <h2 className="header_2  text-green-600  capitalize text-2xl">
              How old do you have to be to rent a car in Europe?
            </h2>
            <p>
              The minimum age to rent a car in Europe ranges between 18-25
              depending on your pick-up country and selected car class.
              Additional young renter fees may apply. To get the price for your
              rental, please start a reservation in the booking widget above.
            </p>
          </div>

          <div>
            <h2 className="header_2  text-green-600  capitalize text-2xl">
              What are the driver license requirements for car rental in Europe?
            </h2>

            <p>
              All drivers must product a valid driving license and passport at
              the pick-up date of rental. An International Driver Permit is
              required if the driver license is not in English. Start a
              reservation and learn more about driver license requirements in
              the country of your rental.
            </p>
          </div>

          <div>
            <h2 className="header_2  text-green-600  capitalize text-2xl">
              Can you rent a car and drive across Europe?
            </h2>

            <p>
              Domestic one-way car rental is usually free of charge when
              Enterprise renters rent and drop off a vehicle at different
              locations within the same European country. International one-way
              car rental policies may vary between European countries and may be
              subject to additional fees. To see if one-way rental is available
              for your trip, please start a reservation in the booking widget
              above.
            </p>
          </div>
        </DivInfoStyles>
      </div>
    </div>
  );
};

export default WoodBridgeVirginia;
