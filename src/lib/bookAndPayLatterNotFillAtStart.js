import axios from "axios";
import Swal from "sweetalert2";

const bookAndPayLatterNotFillAtStart = (
  reservationFormInfo,
  setIsLoading,
  navigate
) => {
  //todo this holds the endPoint of the routes matching data base
  const postToDataBase =
    (reservationFormInfo.stateOfOperation === "tennessee" &&
      "userDataTennessee") ||
    (reservationFormInfo.stateOfOperation === "minnesota" &&
      "userDataMinnesota") ||
    (reservationFormInfo.stateOfOperation === "marryland" &&
      "userDataMarryLand") ||
    (reservationFormInfo.stateOfOperation === "virginia" && "userDataVirginia");

  //todo this is the fetch data function
  const fetchData = async () => {
    try {
      setIsLoading(true);

      //  todo post to data base
      const response = await fetch(`http://localhost:5000/${postToDataBase}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationFormInfo),
      });

      const data = await response.json();
      //todo  data to sent to email
      const sendDataToEmail = {
        //TODO ENVIRONMENTAL VARIABLES
        user_id: import.meta.env.VITE_PUBLIC_KEY,
        template_id: import.meta.env.VITE_TEMPLATEID,
        service_id: import.meta.env.VITE_SERVICEID,

        template_params: {
          username: `${data.firstName} ${data.firstName}`,
          from_email: data.email,
          to_name: "bon voyage car-rentals",
          message: `Hi i wish to make a reservation for \n Car Name : ${data.carName} \n Pick UP Date: ${data.pickUpDate} \n Drop Off Date: ${data.dropOffDate} \n
    Pick Up Location:${data.pickUpLocation} \n drop Off Location:${data.pickUpLocation} \n Contact:${data.phone} \n Vehicle Category:${data.category} \n
    Vehicle Category:${data.category} \n Booking ID:${data.id} \n Government Issued ID Card:${data.id}`,
        },
      };
      setIsLoading(true);
      //todo  API request to email
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        JSON.stringify(sendDataToEmail),
        { headers: { "Content-Type": "application/json" } }
      );

      //   todo success
      Swal.fire({
        title: `${res && "Booking Successful"}`,
        text: `${res && " thanks for with Bon Voyage Car Rentals"}`,
        icon: "success",
        color: "#90EE90",
      });

      setIsLoading(false);

      // //todo navigate to home after time out
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      //   todo Error
      // todo this is the sweet alert popup success
      Swal.fire({
        title: `${error && error.code}`,
        text: `${error && error.message}`,
        icon: "error",
        color: "red",
      });
      setIsLoading(false);
      return;
    }
  };
  fetchData();

  //   if (reservationFormInfo.stateOfOperation) {

  //   }
};

export default bookAndPayLatterNotFillAtStart;
