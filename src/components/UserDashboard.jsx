import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import NoRentalActivity from "./ui/NoRentalActivity";
import RentalActivity from "./ui/RentalActivity";

//this is just a place value and will be replaced by the data coming from supabase

const data = [
  {
    name: "mecerdes",
    pickUpLocation: "7900 International Drive Suit 300 Bloomington MN 55425",
    dropOffLocation: "1959 for Campbell Blvd, #1 Clarksville, TN",
    pickUpDate: "12 july 2024 ",
    dropOffDate: "19 july 2024",
    price: 200,
    date: "1 sep 2024",
    image: "car-1.jpg",
  },
  {
    name: "hondai genesis black",
    pickUpLocation: "9500 good luck road md 20707",
    dropOffLocation: "7900 International Drive Suit 300 Bloomington MN 55425",
    pickUpDate: "30 july 2024 ",
    dropOffDate: "31 july 2024",
    price: 200,
    date: "1 sep 2024",
    image: "car-2.jpg",
  },
];
function UserDashboard() {
  //check if user email is stored in their local storage. if not, redirect them to the login page
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("bonVoyageUserEmail");
    if (userEmail) return;

    //if there is no userEmail in our local storage, then we navigate to the login page where a user can then login
    navigate("/login");
  }, [navigate]);

  //fetch user data from database based on login credentials

  // if logged in, display list of rental activities else display protected dashboard component

  return (
    <>{data.length ? <RentalActivity data={data} /> : <NoRentalActivity />}</>
  );
}

export default UserDashboard;
