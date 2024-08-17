import styled from "styled-components";
import { useMyContext } from "../../AppContext";
import bookAndPayLatterNotFillAtStart from "../../lib/bookAndPayLatterNotFillAtStart";
import { useNavigate } from "react-router-dom";
import { ItemStyle, } from "../../components/Form/reservationForm/ReservationDropdown";

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
        bookAndPayLatterNotFillAtStart(carDetails, setIsLoading, navigate);
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
                    contact:{" "}
                    <UserDetailStyle>{carDetails.phone}</UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    State:{" "}
                    <UserDetailStyle>
                        {carDetails.stateOfOperation}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    Pickup location:{" "}
                    <UserDetailStyle>
                        {carDetails.pickUpLocation}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    DropOff location:
                    <UserDetailStyle>
                        {carDetails.dropOffLocation}
                    </UserDetailStyle>
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
