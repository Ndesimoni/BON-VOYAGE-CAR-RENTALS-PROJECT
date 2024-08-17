// import { useParams, useSearchParams } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import { useMyContext } from "../../AppContext";
import CarDetailsFormFilled from "./CarDetailsFormFilled";
import CarDetailsFormNotFilled from "./CarDetailsFormNotFilled";
import ChosenCarDetails from "./ChosenCarDetails";
import Loading from "../../components/ui/Reuseable_Ui/Loading";

function BookNow() {
  const { isLoading } = useMyContext();
  // here w get the code from the url query params and turn it to and object
  const [searchParams] = useSearchParams();
  const carDetails = Object.fromEntries([...searchParams]);

  return (
    <div className="flex justify-center items-center">

      {isLoading && <Loading />}

      <div className="grid grid-cols-[0.5fr_1fr] gap-10 mb-10">
        {!isLoading && (
          <>
            <ChosenCarDetails carDetails={carDetails} />

            {(carDetails.firstName && (
              <CarDetailsFormFilled carDetails={carDetails} />
            )) || <CarDetailsFormNotFilled carDetails={carDetails} />}
          </>
        )}
      </div>
    </div>
  );
}

export default BookNow;
