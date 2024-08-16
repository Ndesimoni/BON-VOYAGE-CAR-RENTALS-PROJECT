// import { useParams, useSearchParams } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import { useMyContext } from "../../AppContext";
import CarDetailsFormFilled from "./CarDetailsFormFilled";
import CarDetailsFormNotFilled from "./CarDetailsFormNotFilled";
import ChosenCarDetails from "./ChosenCarDetails";
import Loading from "../../components/ui/Reuseable_Ui/Loading";

function BookNow() {
  const { isLoading, reservationFormInfo } = useMyContext();
  // here w get the code from the url query params and turn it to and object
  const [searchParams] = useSearchParams();
  const carDetails = Object.fromEntries([...searchParams]);

  return (
    <div className="flex justify-center items-center">
      {isLoading && (
        <Loading />

        // <di className="w-full h-[100vh]">
        //   {" "}
        //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel
        //   accusamus nulla, vitae ea perspiciatis earum et quisquam porro
        //   inventore mollitia atque sit id corrupti. Voluptatem laudantium eos
        //   cupiditate nobis.
        // </di>
      )}

      <div className="grid grid-cols-[0.5fr_1fr] gap-10 mb-10">
        {!isLoading && (
          <>
            <ChosenCarDetails carDetails={carDetails} />

            {reservationFormInfo?.firstName ? (
              <CarDetailsFormFilled />
            ) : (
              <CarDetailsFormNotFilled carDetails={carDetails} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BookNow;
