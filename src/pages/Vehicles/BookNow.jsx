import { useMyContext } from "../../AppContext";
import CarDetailsFormFilled from "./CarDetailsFormFilled";
import CarDetailsFormNotFilled from "./CarDetailsFormNotFilled";
import ChosenCarDetails from "./ChosenCarDetails";

function BookNow() {
  const { reservationFormInfo } = useMyContext();

  return (
    <div className="grid grid-cols-[0.5fr_1fr] gap-10 mb-10">
      <ChosenCarDetails />
      {reservationFormInfo?.firstName ? (
        <CarDetailsFormFilled />
      ) : (
        <CarDetailsFormNotFilled />
      )}
    </div>
  );
}

export default BookNow;
