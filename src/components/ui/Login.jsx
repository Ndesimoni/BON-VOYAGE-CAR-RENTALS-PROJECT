import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { createUser, getUser } from "../../lib/supabaseApi";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();

  // if user is in localStorage, then navigate to the dashboard
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userCredentials"));
    if (userData?.email) navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          //jwt decode is to decode the response sent by our google client and destructuring of email property from this response
          const { email, name } = jwtDecode(credentialResponse.credential);

          //if this user is already in our database, then just store their details to local storage.
          const data = await getUser(email);
          if (data.length) {
            const { id } = data.at(0);
            // storing user email to the local storage
            localStorage.setItem(
              "userCredentials",
              JSON.stringify({ name, email, id })
            );
            return navigate("/dashboard");
          }

          //if no user with this email, create a new user
          const [user] = await createUser({ email, name });

          localStorage.setItem("userCredentials", JSON.stringify(user));
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
