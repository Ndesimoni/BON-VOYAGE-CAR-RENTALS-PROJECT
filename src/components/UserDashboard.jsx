import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import NoRentalActivity from "./ui/NoRentalActivity";
import RentalActivity from "./ui/RentalActivity";
import { getUserReservations } from "../lib/supabaseApi";
import Loading from "./ui/Reuseable_Ui/Loading";

function UserDashboard() {
  const navigate = useNavigate();

  //reading user data from localStorage
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

  //fetch user reservations from database based on login credentials
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userReservations"],
    queryFn: () => {
      if (!userCredentials?.email) return navigate("/sign-up");
      return getUserReservations(userCredentials.id);
    },
  });

  if (isLoading) return <Loading />;

  if (isError) return <p>there was an error</p>;

  return (
    <>{data.length ? <RentalActivity data={data} /> : <NoRentalActivity />}</>
  );
}

export default UserDashboard;
