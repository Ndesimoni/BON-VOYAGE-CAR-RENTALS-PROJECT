import styled from "styled-components";
import ReservationForm from "../Form/reservationForm/ReservationForm";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const MainImageDivStyle = styled.div({
  backgroundImage: "url(/bon-bg-main-img.jpeg)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px ",
  // marginTop: "146px",
});

const MainImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {});
  console.log(isInView);

  return (
    <MainImageDivStyle ref={ref}>
      <ReservationForm />
    </MainImageDivStyle>
  );
};

export default MainImage;
