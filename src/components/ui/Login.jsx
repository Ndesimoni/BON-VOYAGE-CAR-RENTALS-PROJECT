import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const userEmail = localStorage.getItem("bonVoyageUserEmail");
    //if there is no userEmail in our local storage, then we navigate to the dashboard page where a user sees their rental activities
    if (userEmail) navigate("/dashboard");
  }, [navigate]);

  //todo look at the testFolder and read my comment in it
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          //jwt decode is to decode the response sent by our google client and destructuring of email property from this response
          const { email } = jwtDecode(credentialResponse.credential);

          //storing user email to the local storage
          localStorage.setItem("bonVoyageUserEmail", JSON.stringify(email));

          // we still store this email on our data base as we will use it anytime a user logs in on another device

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
