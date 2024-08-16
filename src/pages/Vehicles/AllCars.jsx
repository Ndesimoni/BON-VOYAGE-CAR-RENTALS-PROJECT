import { cars as allAvailableCars } from "../../../DB/Local_Data_Base";
import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";

const AllCars = () => {
  return (
    <>
      <SingleTextImageView image="url(/help.jpg)">
        <p> Alway Ready For Business</p>
        <p className="text-yellow-50 text-lg capitalize">
          {" "}
          Book a ride with us
        </p>
      </SingleTextImageView>

      <div className="flex justify-center items-center mb-10 pb-5">
        <div className="grid grid-cols-3 gap-20 mt-10 w-[1200px]">
          {allAvailableCars.map((car, index) => (
            <VehicleContain allVehicle={car} car={car} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCars;
