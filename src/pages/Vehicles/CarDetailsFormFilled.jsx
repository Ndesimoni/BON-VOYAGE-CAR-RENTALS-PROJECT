import styled from "styled-components";
import { useMyContext } from "../../AppContext";
import bookAndPayLatterNotFillAtStart from "../../lib/bookAndPayLatterNotFillAtStart";
import { useNavigate } from "react-router-dom";
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

const CarDetailsFormFilled = ({ carDetails }) => {
  //now we need the users details and we just immediately destructure them
  const { setIsLoading } = useMyContext();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    // const BookingDetailsToBePayedLetter = {
    //   ...carDetails,
    //   paymentStatus: "PAY LATTER",
    // };

    //we are already in a submit handler which runs after our submit button is clicked.

    //no need to pass in the navigate function and the setIsLoading() function as arguments into the bookAndPayLaterNotFillAtStart() function

    // this just makes your code more complex and difficult for other developers to read

    //We will need to pass ony the carDetails data into the bookAndPayLaterNotFilledAtStart() function which will be sent to the data base

    // we will then use a remote state library like rect query to handle database operations since this is a real world project

    bookAndPayLatterNotFillAtStart(carDetails, setIsLoading, navigate);
    console.log(carDetails);
    console.log("yooooo man ");
  };

  return (
    <div className="border p-3">
      <h1 className="font-extrabold text-3xl pb-5 capitalize p-2">
        make reservation for : {carDetails.name}
      </h1>
      <h2 className="px-3 capitalize font-bold text-red-600">
        please check if your booking information is correct ?
      </h2>

      {/* >>>>>>> uptodate */}
      <div className="py-2 px-3 ">
        <CarInfoDetails>
          name:{" "}
          <UserDetailStyle>
            {carDetails.firstName} {carDetails.lastName}
          </UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          Email: <UserDetailStyle>{carDetails.email}</UserDetailStyle>{" "}
        </CarInfoDetails>
        <CarInfoDetails>
          contact: <UserDetailStyle>{carDetails.phone}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          State:{" "}
          <UserDetailStyle>{carDetails.stateOfOperation}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          Pickup location:{" "}
          <UserDetailStyle>{carDetails.pickUpLocation}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          DropOff location:
          <UserDetailStyle>{carDetails.dropOffLocation}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          Pickup Date:
          <UserDetailStyle>{carDetails.pickUpDate}</UserDetailStyle>
        </CarInfoDetails>
        <CarInfoDetails>
          DropOff Date:
          <UserDetailStyle>{carDetails.dropOffDate}</UserDetailStyle>
        </CarInfoDetails>
      </div>

      <div className="flex p-2 gap-2">
        <ItemStyle>
          <button className="booking_btn bg-green-600" type="button">
            book & pay now
          </button>
        </ItemStyle>

        <ItemStyle>
          <button onClick={submitForm} className="booking_btn" type="submit">
            book & pay later
          </button>
        </ItemStyle>
      </div>
    </div>
  );
};

export default CarDetailsFormFilled;
