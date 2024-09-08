// import { useParams, useSearchParams } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

import { createReservation } from "../../lib/supabaseApi";
import { useMyContext } from "../../AppContext";

import CarDetailsFormFilled from "./CarDetailsFormFilled";
import CarDetailsFormNotFilled from "./CarDetailsFormNotFilled";
import ChosenCarDetails from "./ChosenCarDetails";
import Loading from "../../components/ui/Reuseable_Ui/Loading";
import { sendEmail } from "../../lib/sendEmail";

function BookNow() {
  // here w get the code from the url query params and turn it to and object
  const [searchParams] = useSearchParams();
  const reservationDetails = Object.fromEntries([...searchParams]);

  const { setReservationFormInfo } = useMyContext();

  const navigate = useNavigate();

  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

  const guest = reservationDetails.bookAsGuest === "false" ? false : true;

  const userReservationId = guest ? null : userCredentials?.id;

  const reservationObj = {
    ...reservationDetails,
    email: reservationDetails.email || userCredentials.email,
    username: guest
      ? `${reservationDetails.firstName}  ${reservationDetails.lastName}`
      : userCredentials.name,
    bookAsGuest: guest,
    userReservationId,
    isPaid: false,
    vehicleImage: reservationDetails.image,
  };

  const { mutate, isPending } = useMutation({
    mutationFn: () => createReservation(reservationObj),

    onSuccess: () => {
      //reset state to clear up users old details
      setReservationFormInfo({});

      sendEmail(reservationObj);

      Swal.fire({
        title: "Booking successful",
        text: "Thanks for trusting bon voyage car rentals 😊",
        icon: "success",
        confirmButtonColor: "green",
      }).then(() => {
        navigate("/", { replace: true });
      });
    },

    onError: (err) => {
      Swal.fire({
        text: err.message,
        icon: "error",
        color: "red",
        confirmButtonColor: "red",
      }).then(() => {
        navigate("/", { replace: true });
      });
    },
  });

  if (isPending) return <Loading />;

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-[0.5fr_1fr] gap-10 my-14 ">
        {
          <>
            <ChosenCarDetails reservationDetails={reservationDetails} />

            {(reservationDetails.userNationalId && (
              <CarDetailsFormFilled
                reservationDetails={reservationDetails}
                mutate={mutate}
              />
            )) || (
              <CarDetailsFormNotFilled
                reservationDetails={reservationDetails}
              />
            )}
          </>
        }
      </div>
    </div>
  );
}

export default BookNow;
