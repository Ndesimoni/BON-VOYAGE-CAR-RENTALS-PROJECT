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

  //fetch user reservations from database based on login credentials
  const { data, isLoading, isError } = useQuery({
    queryKey: ["signedInReservations"],
    queryFn: () => getUserReservations(userCredentials.id),
  });

  //checking for our signed up user details from our local storage
  useEffect(() => {
    if (!userCredentials?.email) return navigate("/sign-up");
  }, [navigate, userCredentials]);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>there was an error</p>;

  return (
    <>{data.length ? <RentalActivity data={data} /> : <NoRentalActivity />}</>
  );
}

export default UserDashboard;
