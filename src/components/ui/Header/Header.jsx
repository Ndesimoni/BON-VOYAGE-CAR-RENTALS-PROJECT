import styled from "styled-components";
import NavBar_1 from "./NavBar-1/NavBar_1";
// import NavBar_2 from "./NavBar-2/NavBar2AndDropdownMenu";
import Nav_2 from "./NavBar-2/Nav_2";
import { useMyContext } from "../../../AppContext";
import { useEffect } from "react";

const HeaderStyles = styled.div({
  width: "100%",
  top: "0px",
  zIndex: "1",
});

const Header = () => {
  const { setScrollValueUp } = useMyContext();

  useEffect(() => {
    let prevScroll;

    const handleScroll = () => {
      const currScroll = window.pageYOffset;
      const isScrolled = prevScroll > currScroll;
      setScrollValueUp(isScrolled);
      prevScroll = currScroll;

      if (prevScroll == 0) {
        setScrollValueUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollValueUp]);

  return (
    <HeaderStyles>
      <NavBar_1 />
      <Nav_2 />
    </HeaderStyles>
  );
};

export default Header;
