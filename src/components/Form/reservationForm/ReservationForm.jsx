import styled from "styled-components";
import { CiCircleQuestion } from "react-icons/ci";
import { useEffect, useState } from "react";
import ReservationDropdown from "./ReservationDropdown";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../../lib/UrlCustomHook";


const ReservationFormStyles = styled.div({
  backgroundColor: "white",
  width: "1000px",
  margin: "3% 0px",
  padding: "30px 40px",
  borderRadius: "10px",
});

const ReservationForm = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [bookAsGuestForm, SetBookAsGuestForm] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const navigate = useNavigate();
  const [searchCar, setSearchCar] = useState('');
  // coming from custom hook 
  const { formData, handleChange } = useFormData()

  function handleClick(e) {
    const closestParent = e.target.closest("form");
    if (closestParent?.id === "form") return;
    setShowReservationForm(false);
  }

  function GuestReservation() {
    SetBookAsGuestForm(!false);
  }

  useEffect(() => {
    document.body.addEventListener("click", handleClick, true);
    return () => document.body.removeEventListener("click", handleClick);
  }, [showReservationForm]);

  function onHandleInformation() {
    setShowInformation(!showInformation);
  }

  function handleSearch() {
    if (searchCar === "") return
    navigate(
      `${searchCar === "all-cars" && "all-available-cars" || searchCar === "all-vehicle-category" && "all-vehicle-category"} `,
    );
  }

  return (
    <ReservationFormStyles>
      <h1 className="font-extrabold text-4xl py-5">Reserve a Vehicle</h1>
      <label className="flex items-center justify-between ">
        <p className="font-semibold text-sm">
          Pic-up & Return Location ( City, State or Airport )*
        </p>
        <span className="text-red-600 italic"> * Required Field</span>
      </label>

      <select
        // name="stateOfOperation}"
        // value={stateOpp}
        id=""
        className="w-full h-10 border-gray-200 border placeholder:pl-4 px-5 appearance-none"
        type="text"
        placeholder="Click to start a reservation"
        onClick={() => {
          setShowReservationForm(true);
        }}

        name="stateOfOperation"
        value={formData.stateOfOperation}
        onChange={handleChange}
      >
        <option value="" disabled selected hidden>
          Choose a state of operation...
        </option>
        <option value="marryland"> marryland</option>
        <option value="minnesota"> minnesota</option>
        <option value="tennessee"> tennessee</option>
        <option value="virginia"> virginia</option>
      </select>

      {/* //todo // this is for the both dropdowns   */}
      {/* this is the dropdown */}
      <div> {showReservationForm && <ReservationDropdown formData={formData} handleChange={handleChange} />}</div>

      {/* this is the for book as gust dropdown */}
      <div> {bookAsGuestForm && <ReservationDropdown formData={formData} handleChange={handleChange} />}</div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm mt-5 mb-5 ">


          <div className="flex gap-2" onClick={GuestReservation}>
            <button className="booking_btn p-[5px]">book as guest</button>
          </div>

          <div onClick={onHandleInformation} className="relative">
            {showInformation && (
              <div className="absolute bottom-5 w-80 ml-5 bg-blue-300 p-6 rounded-r-full rounded-t-full ">
                <p>
                  booking as guest is for everyone, want to enjoy our amazing
                  discount and offers ?
                  <strong>
                    please create and account to enjoy our discount
                  </strong>{" "}
                </p>
              </div>
            )}
            <CiCircleQuestion size={20} color="green" />
          </div>
        </div>

        {/* //todo this is the search car section */}
        <div className="text-xs text-white p-1">
          <button
            onClick={handleSearch}
            className="border border-r-none px-2 py-1 bg-red-500 font-semibold ring-offset ring-1 "
          >
            Search
          </button>

          <select
            name=""
            value={searchCar}
            onChange={(e) => setSearchCar(e.target.value)}
            id=""
            className="appearance-none border p-1  bg-green-600 text-xs "
          >
            <option value="" disabled selected hidden>
              Choose Categories
            </option>
            <option value="all-cars">all cars</option>
            <option value="all-vehicle-category">all vehicle categories</option>
          </select>
        </div>
      </div>
    </ReservationFormStyles>
  );
};

export default ReservationForm;
