import { Link, NavLink, useLocation } from "react-router-dom";

import NavBar_1_Items from "./NavBar_1_Items";
import { useEffect, useState } from "react";
import styled from "styled-components";

const P = styled.p({
  color: "white ",
  fontSize: "x-small",
  backgroundColor: "#279142d7",
  padding: " 1.5px 5px",
  borderRadius: "30px",
  boxShadow: " 1px 1.5px #888888",
});

const MenuOnScroll = () => {
  const [notHomePage, setNotHomePage] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const urlPath = location.pathname;
    if (urlPath === "/") {
      setNotHomePage(false);
    }
  }, [location]);

  return (
    <ul className="relative flex gap-8">
      {notHomePage ? (
        <P>
          {" "}
          <Link to="/">Home</Link>{" "}
        </P>
      ) : (
        <P>
          {" "}
          <Link to="/all-vehicle-category">Collections</Link>{" "}
        </P>
      )}

      {notHomePage && (
        <P>
          {" "}
          <Link to="/all-vehicle-category">Collections</Link>{" "}
        </P>
      )}

      <P>
        <Link to="/start-a-car-reservation">Reservation </Link>
      </P>

      <P>
        <Link to="/services">Services </Link>
      </P>

      <NavBar_1_Items
        index={4}
        H2={
          <NavLink to="find-a-location">
            {" "}
            <P>Location</P>
          </NavLink>
        }
      />

      <P>
        <Link to="/sign-up">Register/Login</Link>
      </P>
    </ul>
  );
};

export default MenuOnScroll;
