import styled from "styled-components";

import { ItemStyle } from "../../components/Form/reservationForm/ReservationDropdown";

export const UserDetailStyle = styled.span({
  textTransform: "capitalize",
  fontFamily: "monospace",
  fontSize: "initial",
  fontWeight: "lighter",
  color: "#3f6bd3",
});

export const CarInfoDetails = styled.div({
  margin: "5px 0px",
  padding: "2px 1px",
  fontSize: "12px",

  fontWeight: "bold",
  textTransform: "Uppercase",
  fontFamily: "roboto",
});

const CarDetailsFormFilled = ({ reservationDetails, mutate }) => {
  // //getting user credentials from localStorage if they are signed in already
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

  return (
    <div className="border p-3">
      <h1 className="font-extrabold text-3xl pb-5 capitalize p-2">
        make reservation for : {reservationDetails.name}
      </h1>
      <h2 className="px-3 capitalize font-bold text-red-600">
        please check if your booking information is correct ?
      </h2>

      <div className="py-2 px-3 ">
        <CarInfoDetails>
          name:{" "}
          <UserDetailStyle>
            {reservationDetails.bookAsGuest
              ? userCredentials.name
              : `${reservationDetails.firstName} ${reservationDetails.lastName}`}
          </UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          Email:{" "}
          <UserDetailStyle>
            {reservationDetails.bookAsGuest
              ? userCredentials.email
              : reservationDetails.email}
          </UserDetailStyle>{" "}
        </CarInfoDetails>
        <CarInfoDetails>
          contact: <UserDetailStyle>{reservationDetails.phone}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          State:{" "}
          <UserDetailStyle>
            {reservationDetails.stateOfOperation}
          </UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          Pickup location:{" "}
          <UserDetailStyle>{reservationDetails.pickUpLocation}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          DropOff location:
          <UserDetailStyle>
            {reservationDetails.dropOffLocation}
          </UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          Pickup Date:
          <UserDetailStyle>
            {new Date(reservationDetails.pickUpDate).toDateString()}
          </UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          DropOff Date:
          <UserDetailStyle>
            {new Date(reservationDetails.dropOffDate).toDateString()}
          </UserDetailStyle>
        </CarInfoDetails>
      </div>

      <div className="flex p-2 gap-2">
        <ItemStyle>
          <button className="booking_btn bg-green-600" type="button">
            book & pay now
          </button>
        </ItemStyle>

        <ItemStyle>
          <button onClick={mutate} className="booking_btn" type="submit">
            book & pay later
          </button>
        </ItemStyle>
      </div>
    </div>
  );
};

export default CarDetailsFormFilled;
