import { vehicleCategory } from "../../../DB/Local_Data_Base";
import { useLocation, useParams } from "react-router-dom";

import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";
import { useState } from "react";

import UsersChosenCar from "./UsersChosenCar";

function Vehicle() {
    //todo this tow state control which component will render
    // will look at this hook guestBookingCar and what it dose later
    const [guestBookingCar, setGuestBookingCar] = useState(false);
    const [showCars, setShowCars] = useState(true);

    //todo   this two states holds the details of the chooses car
    const [carDetailsFormNotFilled, setDetailsFormNotFilled] = useState();
    const [carDetailsFormFilled, setCarDetailsFormFilled] = useState();

    //todo this carsId params data is coming from reservation form or it could come from the carFleet single vehicles or when navigate to vehicleCategory
    const { carsId: incomingPath } = useParams();
    //todo reservation input data coming from input, various carTypes, ViewAllVehicle and allCars
    const { state: usersReservationDetails } = useLocation();
    // console.log(usersReservationDetails)

    //todo form not filled but navigating to the booking page
    function onHandleBookingAsGuest(car) {
        // will look at this guestBookingCar and what it dose later
        setGuestBookingCar(!guestBookingCar);
        setShowCars(false);
        setDetailsFormNotFilled(car);
    }

    //todo form filled before navigating to the booking page
    function filledFormBooking(car) {
        setCarDetailsFormFilled(car);
        setShowCars(false);
    }

    return (
        <>
            {/* //todo this is the SingleTextImageView  */}
            <SingleTextImageView image="url(/help.jpg)">
                <p> Alway Ready For Business</p>
                <p className="text-yellow-50 text-lg capitalize"> sell your car</p>
            </SingleTextImageView>

            <div className="flex justify-center items-center">
                <div className="grid grid-cols-3 gap-20 mt-10 w-[1200px]">
                    {/* //todo this is filtering the vehicleCategory coming from the data base */}
                    {showCars &&
                        vehicleCategory
                            .filter(
                                (selectedCategory) =>
                                (selectedCategory =
                                    selectedCategory.description === incomingPath)
                            )

                            .map((car, index) => (
                                //todo this is going to VehicleContain
                                <VehicleContain
                                    car={car}
                                    key={index}
                                    usersReservationDetails={usersReservationDetails}
                                    onHandleBookingAsGuest={onHandleBookingAsGuest}
                                    filledFormBooking={filledFormBooking}
                                />
                            ))}
                </div>
            </div>

            {/* //todo this will render when a click is fired on either from the book as guest or book now in vehicle component only */}
            {!showCars && (
                <UsersChosenCar
                    usersReservationDetails={usersReservationDetails}
                    carDetailsFormNotFilled={carDetailsFormNotFilled}
                    carDetailsFormFilled={carDetailsFormFilled}
                />
            )}
        </>
    );
}

export default Vehicle;
