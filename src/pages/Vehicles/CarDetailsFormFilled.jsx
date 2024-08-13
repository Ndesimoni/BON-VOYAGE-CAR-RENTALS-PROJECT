import styled from "styled-components";

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

const CarDetailsFormFilled = ({
    carDetailsFormFilled,
    usersReservationDetails,
}) => {
    return (
        <div>
            <h1 className="font-extrabold text-3xl pb-5 capitalize p-2">
                make reservation for {carDetailsFormFilled.name}
            </h1>
            <h2 className="px-3 capitalize font-bold text-red-600">
                please check if your booking information are correct ?
            </h2>

            <div className="py-3 mb-3 px-3">
                <CarInfoDetails>
                    name: <UserDetailStyle>nde simoni che</UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    Email:{" "}
                    <UserDetailStyle>{usersReservationDetails.email}</UserDetailStyle>{" "}
                </CarInfoDetails>
                <CarInfoDetails>
                    contact:{" "}
                    <UserDetailStyle>{usersReservationDetails.phone}</UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    State:{" "}
                    <UserDetailStyle>
                        {usersReservationDetails.stateOfOperation}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    Pickup location:{" "}
                    <UserDetailStyle>
                        {usersReservationDetails.pickUpLocation}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    DropOff location:
                    <UserDetailStyle>
                        {" "}
                        {usersReservationDetails.dropOffLocation}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    Pickup Date:
                    <UserDetailStyle>
                        {" "}
                        {usersReservationDetails.pickUpDate}
                    </UserDetailStyle>
                </CarInfoDetails>
                <CarInfoDetails>
                    DropOff Date:
                    <UserDetailStyle>
                        {" "}
                        {usersReservationDetails.dropOffDate}
                    </UserDetailStyle>
                </CarInfoDetails>
            </div>
        </div>
    );
};

export default CarDetailsFormFilled;
