import { createSearchParams, useNavigate } from "react-router-dom";
import { useMyContext } from "../../AppContext";

const VehicleContain = ({ car }) => {
  const { reservationFormInfo } = useMyContext();
  const navigate = useNavigate();

  const newCar = {
    name: car.name,
    price: car.price,
    description: car.description,
    image: car.image,
  };

  function handleBooking() {
    const confirmReservationDetails = { ...reservationFormInfo, ...newCar };

    navigate({
      pathname: `/book-now/${car.description.replace(" ", "-")}`,
      search: `?${createSearchParams(confirmReservationDetails)}`,
    });
  }

  return (
    <div className="shadow-lg relative">
      <div className="overflow-hidden">
        <img src={car.image} alt={car.name} />
      </div>
      <p className="text-lg font-bold my-4 ml-4">{car.name}</p>

      <p className="italic mb-4 ml-4">{car.description}</p>

      <p className="ml-4 mb-16 ">
        <strong>${car.price}</strong>
        /day
      </p>

      <div className="flex justify-around items-center pb-4">
        {
          <button onClick={handleBooking} className="booking_btn mb-5">
            Book now
          </button>
        }
      </div>
    </div>
  );
};

export default VehicleContain;
