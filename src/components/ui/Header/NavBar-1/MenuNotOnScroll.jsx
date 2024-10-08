import styled from "styled-components";
import NavBar_1_Items from "./NavBar_1_Items";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
} from "react-icons/io5";

const H4 = styled.h4({
  color: "red",
  fontSize: "small",
  fontWeight: "bold",
});

const Div = styled.div({
  fontSize: "small",
  padding: "0px 2px",
  lineHeight: "18px",
});

const MenuNotOnScroll = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));

  return (
    <ul className="relative flex gap-8">
      <div className="flex items-center gap-5">
        <Link to="">
          {" "}
          <IoLogoFacebook />
        </Link>
        <IoLogoInstagram className="text-red-500" />
        <IoLogoTiktok />

        <Link to="https://www.linkedin.com/company/bon-voyage-car-rental/">
          <IoLogoLinkedin />{" "}
        </Link>
      </div>
      {userCredentials?.email ? (
        <Link to="/dashboard">Activities</Link>
      ) : (
        <Link to="/sign-up">Register/Login</Link>
      )}

      <NavBar_1_Items
        index={1}
        H2="Help"
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      >
        <H4>HELP & FAQS</H4>

        <Div>
          <NavLink to="F-A-Q">F-A-Q</NavLink>
        </Div>

        <Div>
          <NavLink to="Get Help">Get Help</NavLink>
        </Div>

        <H4>NEED TO REACH US ?</H4>

        <Div>
          <NavLink to="Contact-Us">Contact</NavLink>
        </Div>
      </NavBar_1_Items>

      <NavBar_1_Items
        index={2}
        H2="USD $"
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      >
        <Div>USD</Div>
        <Div>GBP</Div>
        <Div>EUR</Div>
      </NavBar_1_Items>

      <NavBar_1_Items
        index={3}
        H2="lang (English)"
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      >
        <Div>English</Div>
        <Div>Spanish</Div>
      </NavBar_1_Items>

      <NavBar_1_Items
        index={4}
        H2={<NavLink to="find-a-location">Find a Location</NavLink>}
      />
    </ul>
  );
};

export default MenuNotOnScroll;
