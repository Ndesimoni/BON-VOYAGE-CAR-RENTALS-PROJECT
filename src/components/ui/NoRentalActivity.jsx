import { Link } from "react-router-dom";

function NoRentalActivity() {
  return (
    <div className="h-svh flex items-center justify-center">
      <p>
        No rental activity for this user{" "}
        <Link className="text-blue-500 hover:underline" to="/">
          click here
        </Link>{" "}
        to start a reservation{" "}
      </p>
    </div>
  );
}

export default NoRentalActivity;
