import { useNavigate } from "react-router-dom";
import DashboardHeading from "./DashboardHeading";
import DashboardItems from "./DashboardItems";

import { useEffect } from "react";
import NoRentalActivity from "./ui/NoRentalActivity";

//this is just a place value and will be replaced by the data coming from supabase
const reservations = [];

const data = [
  {
    carType: "mecerdes",
    pickLocation: "7900 International Drive Suit 300 Bloomington MN 55425",
    dropLocation: "7900 International Drive Suit 300 Bloomington MN 55425",
    pickUp: "12 july 2024 ",
    dropOff: "19 july 2024",
    amount: 200,
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
    <>
      {reservations.length ? (
        <div className="p-4">
          <DashboardHeading />
          {data.map((item, i) => (
            <DashboardItems key={i} item={item} />
          ))}
        </div>
      ) : (
        <NoRentalActivity />
      )}
    </>
  );
}

export default UserDashboard;
