export function bookAndPayLaterFillAtStart(
  axios,
  navigate,
  Swal,
  userFinalDetails,
  carDetailsFormFilled,
  usersReservationDetails,
  setLoading
) {
  //todo handle payLater when the form was filled at start
  if (usersReservationDetails.stateOfOperation) {
    const newValue = {
      ...userFinalDetails,

      carName: carDetailsFormFilled.name,
      carImage: carDetailsFormFilled.image,
      price: carDetailsFormFilled.price,
      paymentStatus: "pay later",
    };
    // console.log(newValue);

    //todo this holds the endPoint of the routes matching data base
    const postToDataBase =
      (newValue.stateOfOperation === "tennessee" && "userDataTennessee") ||
      (newValue.stateOfOperation === "minnesota" && "userDataMinnesota") ||
      (newValue.stateOfOperation === "marryland" && "userDataMarryLand") ||
      (newValue.stateOfOperation === "virginia" && "userDataVirginia");

    //todo this is the fetch data function
    const fetchData = async () => {
      try {
        //todo set the loading state
        setLoading(true);

        //  todo post to data base
        const response = await fetch(
          `http://localhost:5000/${postToDataBase}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newValue),
          }
        );

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
        //todo set the loading state false
        setLoading(false);

        // // //todo navigate to home after time out
        // setTimeout(() => {
        //   navigate("/");
        // }, 500);
      } catch (error) {
        //   todo Error
        // todo this is the sweet alert popup success
        Swal.fire({
          title: `${error && error.code}`,
          text: `${error && error.message}`,
          icon: "error",
          color: "red",
        });
        //todo set the loading state false
        setLoading(false);
        return;
      }
    };
    fetchData();
  }
}
