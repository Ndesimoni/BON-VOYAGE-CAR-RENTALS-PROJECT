import styled from "styled-components";
import NavBar_1 from "./NavBar-1/NavBar_1";
// import NavBar_2 from "./NavBar-2/NavBar2AndDropdownMenu";
import Nav_2 from "./NavBar-2/Nav_2";
import { useMyContext } from "../../../AppContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HeaderStyles = styled.div({
  width: "100%",
  top: "0px",
  zIndex: "1",
});

const Header = () => {
  const { setScrollValueUp, setLocation, setScrollDownValue } = useMyContext();

  const location = useLocation();
  //todo this is for changing route according to url, not but still not working
  useEffect(() => {
    if (location.pathname !== "/") {
      setLocation(location.pathname);
    }
    return function () {
      setLocation(false);
    };
  }, [location, setLocation]);

  //todo this is for scrolling up and down to show both navigation
  useEffect(() => {
    let prevScroll;
    const handleScroll = () => {
      const currScroll = window.pageYOffset;
      const isScrolled = prevScroll > currScroll;
      const scrollDown = prevScroll < currScroll;
      setScrollValueUp(isScrolled);
      // setScrollDownValue(currScroll > 528 && scrollDown);

      // this is for mobile version
      setScrollDownValue(scrollDown);

      prevScroll = currScroll;

      if (prevScroll == 0) {
        setScrollValueUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollValueUp, setScrollDownValue]);

  return (
    <HeaderStyles>
      <NavBar_1 />
      <Nav_2 />
    </HeaderStyles>
  );
};

export default Header;
