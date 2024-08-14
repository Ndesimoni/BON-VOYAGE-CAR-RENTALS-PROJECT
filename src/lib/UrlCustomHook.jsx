import { useEffect, useState } from "react";

//todo hooks for ride share and rent to own
export const useRideAndRentToOwn = () => {
  const [shareRide, setShareRide] = useState(false);
  const [renToOwn, setRenToOwn] = useState(false);

  const currentLocation = window.location.pathname;

  useEffect(() => {
    if (currentLocation === "/share-a-ride") {
      setShareRide(true);
    }

    return function () {
      setShareRide(false);
    };
  }, [currentLocation]);

  useEffect(() => {
    if (currentLocation === "/rent-to-own") {
      setRenToOwn(true);

      return function () {
        setRenToOwn(false);
      };
    }
  }, [currentLocation]);

  return { shareRide, renToOwn, setRenToOwn, setShareRide };
};

//todo hooks for third party reservation and holiday offers

export const useThirdPartyAndHolidaysOffers = () => {
  const [holidayOffers, setHolidayOffer] = useState(false);
  const [thirdPartyReservation, setThirdPartyReservation] = useState(false);

  const activeRoute = window.location.pathname;

  useEffect(() => {
    if (activeRoute === "/holiday-offers") {
      setHolidayOffer(true);
    }

    return function () {
      setHolidayOffer(false);
    };
  }, [activeRoute]);

  useEffect(() => {
    if (activeRoute === "/third-party-reservation") {
      setThirdPartyReservation(true);
    }

    return function () {
      setThirdPartyReservation(false);
    };
  }, [activeRoute]);

  return { holidayOffers, thirdPartyReservation };
};

//todo this is the data for the form object
const dataValidation = {
  stateOfOperation: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  category: "",
  pickUpLocation: "",
  dropOffLocation: "",
  pickUpDate: "",
  dropOffDate: "",
  termConditions: "",
  IdCard: null,
  age: "",
  carName: "",
  carImage: "",
  price: "",
  paymentStatus: "",
};

//todo this is the form input data
export const useFormData = () => {
  const [formData, setFormData] = useState(dataValidation);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return { formData, setFormData, handleChange };
};

export const useCarQuery = () => {
  const [carQuery, setCarQuery] = useState();
  return { carQuery, setCarQuery };
};
