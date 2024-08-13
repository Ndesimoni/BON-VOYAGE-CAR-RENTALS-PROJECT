// export function bookAndPayLaterFillAtStart(
//   axios,
//   navigate,
//   Swal,
//   userFinalDetails,
//   carDetailsFormFilled,
//   usersReservationDetails
// ) {
//   //   //todo this is for book and pay later
//   //   function onHandleBookAndPayLater(e) {
//   //     e.preventDefault();

//   //todo handle payLater when the form was filled at start
//   if (usersReservationDetails.stateOfOperation) {
//     const newValue = {
//       ...userFinalDetails,

//       carName: carDetailsFormFilled.name,
//       carImage: carDetailsFormFilled.image,
//       price: carDetailsFormFilled.price,
//     };

//     //todo this holds the endPoint of the route
//     const postToDataBase =
//       (newValue.stateOfOperation === "tennessee" && "userDataTennessee") ||
//       (newValue.stateOfOperation === "minnesota" && "userDataMinnesota") ||
//       (newValue.stateOfOperation === "marryland" && "userDataMarryLand") ||
//       (newValue.stateOfOperation === "virginia" && "userDataVirginia");

//     //todo this is the fetch data function
//     const fetchData = async () => {
//       // todo  environmental variables

//       try {
//         const response = await fetch(
//           `http://localhost:5000/${postToDataBase}`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newValue),
//           }
//         );

//         const data = await response.json();
//         console.log(data);

//         //todo  data to sent to email
//         const sendDataToEmail = {
//           //TODO ENVIRONMENTAL VARIABLES
//           serviceID: import.meta.env.VITE_PUBLIC_KEY,
//           publicKEY: import.meta.env.VITE_TEMPLATEID,
//           templateID: import.meta.env.VITE_SERVICEID,

//           templateParams: {
//             from_name: `${data.firstName} ${data.firstName}`,
//             from_email: data.email,
//             to_name: "bon voyage car-rentals",
//             message: `Hi i wish to make a reservation for \n Car Name : ${data.carName} \n Pick UP Date: ${data.pickUpDate} \n Drop Off Date: ${data.dropOffDate} \n
//         Pick Up Location:${data.pickUpLocation} \n drop Off Location:${data.pickUpLocation} \n Contact:${data.phone} \n Vehicle Category:${data.category} \n
//         Vehicle Category:${data.category} \n Booking ID:${data.id} \n Government Issued ID Card:${data.id}`,
//           },
//         };

//         const res = await axios.post(
//           "https://api.emailjs.com/api/v1.0/email/send",
//           JSON.stringify(sendDataToEmail),
//           { headers: { "Content-Type": "application/json" } }
//         );

//         console.log("Email sent successfully:", res.data);
//         alert("Your email has been sent!");
//       } catch (error) {
//         // todo this is the sweet alert popup success
//         Swal.fire({
//           title: `${error && error.code}`,

//           text: `${error && error.message}`,
//           icon: "error",
//           color: "red",
//         });
//         console.log("error:", error);
//         return;
//       }

//       // i still need to come work on this for when there is and error
//       Swal.fire({
//         title: ` "Booking Successful"`,
//         text: "Thanks for booking with Bon Voyage Car Rentals!",
//         icon: "success",
//         color: "#90EE90",
//         animation: true,
//       });

//       //todo navigate to home after time out
//       setTimeout(() => {
//         navigate("/");
//       }, 2000);
//     };
//     fetchData();
//   }
// }
