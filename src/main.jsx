import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import styled from "styled-components";
import { ContextProvider } from "./AppContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import AppTest from "./Test_PlayGround/AppTest";

// this are global styles for

const GlobalStyles = styled.section({
  fontFamily: "roboto",
  backgroundColor: "#ececec;",
  letterSpacing: ".5px",
  lineHeight: "20px",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalStyles>
    {/* provide context all the app */}
    <ContextProvider>
      <GoogleOAuthProvider clientId="916488120429-1jo4ipopp3k650lagv0oapgmoaerhnea.apps.googleusercontent.com">
        <App />
        {/* <AppTest /> */}
      </GoogleOAuthProvider>
    </ContextProvider>
  </GlobalStyles>
);
