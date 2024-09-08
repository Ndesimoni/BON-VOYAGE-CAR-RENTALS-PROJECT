import axios from "axios";

const user_id = import.meta.env.VITE_PUBLIC_KEY;
const template_id = import.meta.env.VITE_TEMPLATEID;
const service_id = import.meta.env.VITE_SERVICEID;

export const sendEmail = async (reservationInfo) => {
  const {
    name,
    dropOffLocation,
    pickUpLocation,
    pickUpDate,
    dropOffDate,
    email,
    username,
    userNationalId,
    phone,
  } = reservationInfo;

  //refactoring in progress
  const sendDataToEmail = {
    user_id,
    template_id,
    service_id,
    template_params: {
      username,
      from_email: email,
      to_name: "bon voyage car-rentals",
      message: `Hi i wish to make a reservation for \n Car Name : ${name} \n Pick UP Date: ${pickUpDate} \n Drop Off Date: ${dropOffDate} \n
    Pick Up Location:${pickUpLocation} \n drop Off Location:${dropOffLocation} \n Contact:${phone} \n Government Issued ID Card:${userNationalId}`,
    },
  };

  //todo  API request to email
  await axios.post(
    "https://api.emailjs.com/api/v1.0/email/send",
    JSON.stringify(sendDataToEmail),
    { headers: { "Content-Type": "application/json" } }
  );
};
