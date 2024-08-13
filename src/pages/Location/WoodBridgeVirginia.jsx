import styled from "styled-components";
import ExtraFeatures from "../Reservations/ExtraFeatures";
import ReservationForm from "../../components/Form/reservationForm/ReservationForm";

import CarFleet from "../Vehicles/CarFleet";

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

//todo this is the Car Fleet  section */}
      <CarFleet />

      {/* this is the extra features section */}
      <div className="my-10">
        <ExtraFeatures />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl mb-1">
          Meet your preferred partner in commercial truck and van rentals.
        </h2>
        <p>
          Trust your local Enterprise experts to help you find the light and
          medium-duty vehicles you need, including pickup trucks, box trucks,
          moving trucks and cargo vans.
        </p>

        <div className="flex gap-8 mt-14">
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
                to deliver the dependability, flexibility and service you need
                to keep moving.
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
                to deliver the dependability, flexibility and service you need
                to keep moving.
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
                to deliver the dependability, flexibility and service you need
                to keep moving.
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
                to deliver the dependability, flexibility and service you need
                to keep moving.
              </p>
              <button className="mt-10 mb-4 font-bold  bg-green-700 px-5 py-3 text-gray-50 uppercase">
                View Truck Rental Vehicles{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <DivInfoStyles>
          <div>
            <h2>How old do you have to be to rent a car in Europe?</h2>
            <p>
              The minimum age to rent a car in Europe ranges between 18-25
              depending on your pick-up country and selected car class.
              Additional young renter fees may apply. To get the price for your
              rental, please start a reservation in the booking widget above.
            </p>
          </div>

          <div>
            <h2>
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
            <h2>Can you rent a car and drive across Europe?</h2>

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
