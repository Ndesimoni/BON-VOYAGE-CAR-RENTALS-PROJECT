import styled from "styled-components";
import { useMyContext } from "../../AppContext";
import bookAndPayLatterNotFillAtStart from "../../lib/bookAndPayLatterNotFillAtStart";
import { useNavigate } from "react-router-dom";
import { Label } from "../../components/Form/reservationForm/ReservationDropdown";

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
    const { setIsLoading, reservationFormInfo } = useMyContext();
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        bookAndPayLatterNotFillAtStart(reservationFormInfo, setIsLoading, navigate);
        console.log("yooooo man ");
    };

    return (
        <div className="border p-3">
            <h1 className="font-extrabold text-3xl pb-5 capitalize p-2">
                make reservation for : {reservationFormInfo.name}
            </h1>
            <h2 className="px-3 capitalize font-bold text-red-600">
                please check if your booking information is correct ?
            </h2>

            <div className="py-3 mb-3 px-3 ">
                <CarInfoDetails>
                    name:{" "}
                    <UserDetailStyle>
                        {reservationFormInfo.firstName} {reservationFormInfo.lastName}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    Email: <UserDetailStyle>{reservationFormInfo.email}</UserDetailStyle>{" "}
                </CarInfoDetails>
                <CarInfoDetails>
                    contact:{" "}
                    <UserDetailStyle>{reservationFormInfo.phone}</UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    State:{" "}
                    <UserDetailStyle>
                        {reservationFormInfo.stateOfOperation}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    Pickup location:{" "}
                    <UserDetailStyle>
                        {reservationFormInfo.pickUpLocation}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    DropOff location:
                    <UserDetailStyle>
                        {reservationFormInfo.dropOffLocation}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    Pickup Date:
                    <UserDetailStyle>{reservationFormInfo.pickUpDate}</UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    DropOff Date:
                    <UserDetailStyle>{reservationFormInfo.dropOffDate}</UserDetailStyle>
                </CarInfoDetails>
            </div>

            <div className=" ml-3 flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 hover:bg-slate-500 " />

                <Label>
                    By clicking this button, you confirm our privacy terms and conditions
                </Label>
            </div>
            {/* <div className="flex p-2 gap-2">
                <ItemStyle>
                    <button className="booking_btn bg-green-600" type="button">
                        book & pay now
                    </button>
                </ItemStyle>

                <ItemStyle>
                    <button className="booking_btn" type="submit">
                        book & pay later
                    </button>
                </ItemStyle>
            </div> */}

            <button
                className="ml-4 border border-red-500 px-4 py-2 uppercase bg-red-500 text-red-50 rounded-md"
                onClick={submitForm}
            >
                Reserve now
            </button>
        </div>
    );
};

export default CarDetailsFormFilled;
