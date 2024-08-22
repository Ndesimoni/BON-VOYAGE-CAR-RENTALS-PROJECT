import styled from "styled-components";
import ReservationForm from "../Form/reservationForm/ReservationForm";
// import { useEffect } from "react";
// import { useMyContext } from "../../AppContext";

const MainImageDivStyle = styled.div({
  backgroundImage: "url(/bon-bg-main-img.jpeg)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px ",
  // marginTop: "146px",
});

const MainImage = () => {
  return (
    <MainImageDivStyle>
      <ReservationForm />
    </MainImageDivStyle>
  );
};

export default MainImage;
