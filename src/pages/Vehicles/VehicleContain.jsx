import { createSearchParams, useNavigate } from "react-router-dom";
import { useMyContext } from "../../AppContext";

const VehicleContain = ({ car }) => {
  const { setReservationFormInfo } = useMyContext();
  const navigate = useNavigate();

  function handleBooking() {
    //we are updating the state of our reservationFormInfo with our selected car object.

    //this update is based on our current form state.

    // we ddo this update based on current state because we are going to need this data in the bookNow component to display our current vehicle image and the users form credentials

    setReservationFormInfo((curInfo) => {
      return { ...curInfo, ...car };
    });
    // console.log(car);

    // navigate({
    //   pathname: `/book-now/${car.description.replace(" ", "-")}`,
    //   search: `?car-name=${car.name.replaceAll(" ", "-")}&car-price=${car.price}&car-image=${car.image}`,
    // });

    navigate({
      pathname: `/book-now/${car.description.replace(" ", "-")}`,
      search: `?${createSearchParams(car)}`,
    });
    // navigate(
    //   `/book-now/${car.description.replaceAll(" ", "-")}/car-name=${car.name.replaceAll(" ", "-")}&&image=${car.image}`
    // );
  }

  return (
    <div className="shadow-lg relative">
      <div className="overflow-hidden">
        <img src={`/${car.image}`} alt={car.name} />
      </div>
      <p className="text-lg font-bold my-4 ml-4">{car.name}</p>

      {car.price > 100 && <p className="italic mb-4 ml-4">{car.description}</p>}

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
