import styled from "styled-components";
import { useMyContext } from "../../AppContext";

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

const CarDetailsFormFilled = () => {
  //now we need the users details and we just immediately destructure them
  const {
    reservationFormInfo: {
      name,
      firstName,
      lastName,
      email,
      dropOffLocation,
      pickUpLocation,
      phone,
      pickUpDate,
      dropOffDate,
      stateOfOperation,
    },
  } = useMyContext();
  return (
    <div>
      <h1 className="font-extrabold text-3xl pb-5 capitalize p-2">
        make reservation for {name}
      </h1>
      <h2 className="px-3 capitalize font-bold text-red-600">
        please check if your booking information is correct ?
      </h2>

      <div className="py-3 mb-3 px-3">
        <CarInfoDetails>
          name:{" "}
          <UserDetailStyle>
            {firstName} {lastName}
          </UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          Email: <UserDetailStyle>{email}</UserDetailStyle>{" "}
        </CarInfoDetails>
        <CarInfoDetails>
          contact: <UserDetailStyle>{phone}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          State: <UserDetailStyle>{stateOfOperation}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          Pickup location: <UserDetailStyle>{pickUpLocation}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          DropOff location:
          <UserDetailStyle>{dropOffLocation}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          Pickup Date:
          <UserDetailStyle>{pickUpDate}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          DropOff Date:
          <UserDetailStyle>{dropOffDate}</UserDetailStyle>
        </CarInfoDetails>
      </div>

      <button className="ml-4 border border-red-500 px-4 py-2 uppercase bg-red-500 text-red-50 rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default CarDetailsFormFilled;
