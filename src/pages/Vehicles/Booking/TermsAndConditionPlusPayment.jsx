import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import {
  ItemStyle,
  Label,
} from "../../../components/Form/reservationForm/ReservationDropdown";

import { bookAndPayLaterFillAtStart } from "../../../lib/bookAndPayLaterFillAtStart";
import { useNavigate } from "react-router-dom";

const TermsAndConditionPlusPayment = ({
  carDetailsFormFilled,
  usersReservationDetails,
  setLoading,
}) => {
  const [userFinalDetails, setUserFinalDetails] = useState(
    usersReservationDetails
  );

  const navigate = useNavigate();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //todo this is for book and pay now
  function onHandleBookAndPayNow(e) {
    e.preventDefault();

    //todo handle payNow when the form was filled at start
    if (usersReservationDetails.stateOfOperation) {
      const newValue = {
        ...userFinalDetails,

        carName: carDetailsFormFilled.name,
        carImage: carDetailsFormFilled.image,
        price: carDetailsFormFilled.price,
      };
      setUserFinalDetails(newValue);
    }
  }

  //todo this is for book and pay later section
  function onHandleBookAndPayLater(e) {
    e.preventDefault();

    //todo handle payLater when the form was filled at start
    bookAndPayLaterFillAtStart(
      axios,
      navigate,
      Swal,
      usersReservationDetails,
      carDetailsFormFilled,
      userFinalDetails,
      setLoading
    );
  }

  return (
    <>
      <div className=" ml-3 flex align-center gap-2">
        <div>
          <input
            type="checkbox"
            className="h-4 w-4 hover:bg-slate-500 "
            // value={formData.termConditions}
            //   checked={isChecked}
            //   name="termConditions"
            //   onChange={handleCheckBox}
          />
        </div>

        <Label>
          By clicking this button, you confirm our privacy terms and conditions
        </Label>
      </div>
      <div className="flex p-2 gap-2">
        <ItemStyle>
          <button
            className="booking_btn bg-green-600"
            onClick={onHandleBookAndPayNow}
          >
            book & pay now
          </button>
        </ItemStyle>

        <ItemStyle>
          <button className="booking_btn " onClick={onHandleBookAndPayLater}>
            book & pay later
          </button>
        </ItemStyle>
      </div>
    </>
  );
};

export default TermsAndConditionPlusPayment;
