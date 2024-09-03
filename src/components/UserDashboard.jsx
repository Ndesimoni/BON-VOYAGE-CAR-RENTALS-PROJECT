import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import NoRentalActivity from "./ui/NoRentalActivity";
import RentalActivity from "./ui/RentalActivity";
import { getUserReservations } from "../lib/supabaseApi";

function UserDashboard() {
  const navigate = useNavigate();

  //reading user data from localStorage
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

  //fetch user data from database based on login credentials
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["userReservations"],
    queryFn: () => getUserReservations(userCredentials.id),
  });

  useEffect(() => {
    //checking for our signed up user details from our local storage
    if (userCredentials?.email && userCredentials?.name && userCredentials?.id)
      return;

    //if the above condition is false, user navigates to sign-up page so they can create an account
    navigate("/sign-up");
  }, [navigate, userCredentials]);

  if (isLoading && isFetching) return <p>Loading...</p>;

  if (isLoading && !isFetching) return <p>No internet connection</p>;

  if (isError) return <p>{error}</p>;

  return (
    <>{data.length ? <RentalActivity data={data} /> : <NoRentalActivity />}</>
  );
}

export default UserDashboard;
