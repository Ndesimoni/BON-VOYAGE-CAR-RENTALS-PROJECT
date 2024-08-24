import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import styled from "styled-components";
import { ContextProvider } from "./AppContext.jsx";
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
      <App />
    </ContextProvider>
    {/* <AppTest /> */}
  </GlobalStyles>
);
