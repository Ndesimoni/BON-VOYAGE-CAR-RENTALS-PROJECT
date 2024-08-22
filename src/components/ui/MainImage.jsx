import styled from "styled-components";
import ReservationForm from "../Form/reservationForm/ReservationForm";
import { useEffect } from "react";
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
  const { setScrollValue } = useMyContext();

  useEffect(() => {
    const handleScroll = () => {
      const newScrollValue = window.scrollY > 524;

      setScrollValue(newScrollValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollValue]);

  return (
    <MainImageDivStyle>
      <ReservationForm />
    </MainImageDivStyle>
  );
};

export default MainImage;

// import { useEffect, useState } from "react";

// const useScrollingUp = () => {
//   let prevScroll;

//   const [scrollingUp, setScrollingUp] = useState(false);

//   const handleScroll = () => {
//     const currScroll = window.pageYOffset;

//     const isScrolled = prevScroll > currScroll;

//     setScrollingUp(isScrolled);
//     prevScroll = currScroll;
//   };
//   useEffect(() => {
//     on(window, "scroll", handleScroll, { passive: true });

//     return () => {
//       off(window, "scroll", handleScroll, { passive: true });
//     };
//   }, []);
//   return scrollingUp;
// };

// export default useScrollingUp;
