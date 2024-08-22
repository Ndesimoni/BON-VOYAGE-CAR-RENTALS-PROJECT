import styled from "styled-components";
import ReservationForm from "../Form/reservationForm/ReservationForm";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useMyContext } from "../../AppContext";

const MainImageDivStyle = styled.div({
  backgroundImage: "url(/bon-bg-main-img.jpeg)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px ",
  // marginTop: "146px",
});

const MainImage = () => {
  const { setScrollValue, setHeroSection } = useMyContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    setHeroSection(isInView);
  }, [setHeroSection, isInView, setScrollValue]);

  return (
    <MainImageDivStyle ref={ref}>
      <ReservationForm />
    </MainImageDivStyle>
  );
};

export default MainImage;
