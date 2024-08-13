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
  // const [bookAsGuestForm, SetBookAsGuestForm] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const [searchCar, setSearchCar] = useState("");
  const navigate = useNavigate();
  // coming from custom hook
  const { formData, handleChange } = useFormData();

  function handleClick(e) {
    const closestParent = e.target.closest("form");
    if (closestParent?.id === "form") return;
    setShowReservationForm(false);
  }

  // function GuestReservation() {
  //   SetBookAsGuestForm(!false);
  // }

  useEffect(() => {
    document.body.addEventListener("click", handleClick, true);
    return () => document.body.removeEventListener("click", handleClick);
  }, [showReservationForm]);

  // function onHandleInformation() {
  //   setShowInformation(!showInformation);
  // }

  // to update state based on the current state, always pass in a callback function . The solution you implemented above is still good but it doesn't look ideal and professional
  function onHandleInformation() {
    setShowInformation((show) => !show);
  }

  function handleSearch() {
    if (searchCar === "") return;
    navigate(
      `${(searchCar === "all-cars" && "all-available-cars") || (searchCar === "all-vehicle-category" && "all-vehicle-category")} `
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

      <input
        readOnly
        placeholder="Click to start a reservation"
        className="w-full h-10 border-gray-200 border placeholder:pl-4 px-5 "
        onClick={() => {
          setShowReservationForm(true);
        }}
      />

      {/* //todo // this is for the both dropdowns   */}
      {/* this is the dropdown */}

      {/* <div>
        {" "}
        {showReservationForm && (
          <ReservationDropdown
            formData={formData}
            handleChange={handleChange}
          />
        )}
      </div> */}

      {/* No need for a div element */}
      {showReservationForm && (
        <ReservationDropdown formData={formData} handleChange={handleChange} />
      )}

      {/* this is the for book as gust dropdown */}
      {/* <div>
        {" "}
        {bookAsGuestForm && (
          <ReservationDropdown
            formData={formData}
            handleChange={handleChange}
          />
        )}
      </div> */}
      {
        // To implement the reservationDropdown to bookAsGuest, just use the state value of showReservationForm. Creating a new state (bookAsGuestForm) creates a wasted render and the body click to hide the form will not work.
        //NB: Always try to reuse state variables and logic to avoid wasted renders as this will increase performance of your app
      }

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm mt-5 mb-5 ">
          {/* <div className="flex gap-2" onClick={GuestReservation}>
            <button className="booking_btn p-[5px]">book as guest</button>
          </div> */}

          {/* no need to put button inside of a div if you do not have other elements in that same div. You are just occupying a node in the DOM which is increases bundle size for a large application */}

          <button
            onClick={() => setShowReservationForm(true)}
            className="booking_btn p-[5px]"
          >
            book as guest
          </button>

          {/* <div onClick={onHandleInformation} className="relative">
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
          </div> */}

          {
            //When an event handler is added to a parent element, when the event is delegated from the parents to all its children. The onHandleInformation event handle will be called when you click on the <p> element and even on the <strong> element. This triggers rerendering of your app. And this has strong implications on performance.
            //just simply add the event handler to the icon element.
          }
          <div className="relative">
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
            <CiCircleQuestion
              onClick={onHandleInformation}
              size={20}
              color="green"
            />
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
