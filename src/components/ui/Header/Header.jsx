import styled from "styled-components";
import NavBar_1 from "./NavBar-1/NavBar_1";
import Nav_2 from "./NavBar-2/Nav_2";

const HeaderStyles = styled.div({
  width: "100%",
  top: "0px",
});

const Header = () => {
  return (
    <HeaderStyles>
      <NavBar_1 />
      <Nav_2 />
      {/* this is general to tell all locations */}
    </HeaderStyles>
  );
};

export default Header;
