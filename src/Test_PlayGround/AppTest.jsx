import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function AppTest() {
  //todo read this comment
  // this is test file and this code here works find but when i use the real project it gives me and error

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          //jwt decode is to decode the response sent by our google client and destructuring of email property from this response
          const { email } = jwtDecode(credentialResponse.credential);

          //storing user email to the local storage
          localStorage.setItem("bonVoyageUserEmail", JSON.stringify(email));
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default AppTest;
