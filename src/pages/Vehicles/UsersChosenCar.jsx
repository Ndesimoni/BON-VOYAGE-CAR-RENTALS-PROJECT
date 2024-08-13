// import styled from "styled-components";

// import CarDetailsFormFilled from "./CarDetailsFormFilled";
import CarDetailsFormFilled from "./CarDetailsFormFilled";
import CarDetailsFormNotFilled from "./CarDetailsFormNotFilled";
import ChosenCarDetails from "./ChosenCarDetails";
import TermsAndConditionPlusPayment from "./Booking/TermsAndConditionPlusPayment";
import { useState } from "react";
import Loading from "../../components/ui/Reuseable_Ui/Loading";

//todo this display the final step for the booking stage
const UsersChosenCar = ({
  carDetailsFormNotFilled,
  carDetailsFormFilled,
  usersReservationDetails,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* //todo loader component */}
      {loading && <Loading />}

      {!loading && (
        <form className="flex justify-center items-top gap-6  my-20">
          {/* //todo this render the car image and details */}
          <ChosenCarDetails
            carDetailsFormNotFilled={carDetailsFormNotFilled}
            carDetailsFormFilled={carDetailsFormFilled}
          />

          <div className="border px-3 py-5 rounded-sm">
            {/* //todo this 2 components renders the matching input fields */}

            {carDetailsFormNotFilled !== undefined && (
              <CarDetailsFormNotFilled />
            )}

            {carDetailsFormFilled !== undefined && (
              <CarDetailsFormFilled
                carDetailsFormFilled={carDetailsFormFilled}
                usersReservationDetails={usersReservationDetails}
              />
            )}

            {/* //todo this renders the Terms And Condition and Payment payment button */}
            <TermsAndConditionPlusPayment
              setLoading={setLoading}
              carDetailsFormNotFilled={carDetailsFormNotFilled}
              carDetailsFormFilled={carDetailsFormFilled}
              usersReservationDetails={usersReservationDetails}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default UsersChosenCar;
