import ReservationForm from "../../components/Form/reservationForm/ReservationForm";
import OfferingContains from "../../components/Services/offering/OfferingContains";
import Offerings from "../../components/Services/offering/Offerings";
import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import CarFleet from "../Vehicles/CarFleet";
import ExtraFeatures from "./ExtraFeatures";
// import Safety from "@/components/ui/Safety";
// import ImageTextView from "../../components/ui/Reuseable_Ui/ImageTextView";

const LanHamMaryland = () => {
  return (
    <div>
      {/* //todo  this is the single image text view */}
      <SingleTextImageView image="url(/help.jpg)">
        <p> Drive your way to success</p>
      </SingleTextImageView>

      <div className="flex justify-center">
        <ReservationForm />
      </div>
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

      <CarFleet />
      <ExtraFeatures />
    </div>
  );
};

export default LanHamMaryland;
