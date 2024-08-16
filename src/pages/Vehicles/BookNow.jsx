// import { useParams, useSearchParams } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import { useMyContext } from "../../AppContext";
import CarDetailsFormFilled from "./CarDetailsFormFilled";
import CarDetailsFormNotFilled from "./CarDetailsFormNotFilled";
import ChosenCarDetails from "./ChosenCarDetails";

function BookNow() {
  const { reservationFormInfo } = useMyContext();
  // const { carDetails } = useParams();
  const [searchParams] = useSearchParams();
  const carDetails = Object.fromEntries([...searchParams]);
  console.log(carDetails);

  return (
    <div className="grid grid-cols-[0.5fr_1fr] gap-10 mb-10">
      <ChosenCarDetails carDetails={carDetails} />

      {reservationFormInfo?.firstName ? (
        <CarDetailsFormFilled />
      ) : (
        <CarDetailsFormNotFilled />
      )}
    </div>
  );
}

export default BookNow;
