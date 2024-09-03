import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
// <<<<<<< HEAD

import { useNavigate } from "react-router-dom";
import { createUser } from "../../lib/supabaseApi";
// import { useEffect } from "react";

// function Login() {
//   const navigate = useNavigate();

//   const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

//   useEffect(() => {
//     //if user credentials is available in localStorage, then navigate to the dashboard
//     if (userCredentials?.email && userCredentials?.name && userCredentials?.id)
//       navigate("/dashboard");
//   }, [navigate, userCredentials]);
// =======
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function Login() {
  // <<<<<<< HEAD
  const navigate = useNavigate();
  //   // localStorage.removeItem("bonVoyageUserEmail");
  //   useEffect(() => {
  //     const userEmail = localStorage.getItem("bonVoyageUserEmail");
  //     //if there is no userEmail in our local storage, then we navigate to the dashboard page where a user sees their rental activities
  //     if (userEmail) navigate("/dashboard");
  //   }, [navigate]);

  //todo look at the testFolder and read my comment in it
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          //jwt decode is to decode the response sent by our google client and destructuring of email property from this response
          const { email, name } = jwtDecode(credentialResponse.credential);

          // function creates new user on our database with user name and email and returns this data
          const [data] = await createUser({ name, email });

          //we get the id property from our newly created user because this id will be stored in our database and will be use to check current user's reservations
          const { id } = data;

          //storing user email to the local storage
          localStorage.setItem(
            "userCredentials",
            JSON.stringify({ name, email, id })
          );

          //as a user signs up, we navigate to the the user dashboard
          navigate("/dashboard");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default Login;
