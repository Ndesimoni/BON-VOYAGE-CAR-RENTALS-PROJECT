import { useState } from "react";

// import NavBar_1_Items from "./NavBar_1_Items";
// import { NavBar1Data } from "../../../../DB/Local_Data_Base";
import RegisterAccount from "../../../Form/CreateAccountForm";
import NavBar_1_Items from "./NavBar_1_Items";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

const NavBar_1B = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex justify-between items-center bg-[#928474] px-10 py-1.5">
      {/* //todothis is the head logo image  */}
      <img src="/574.gif" alt="" className="w-24" />

      <div className="flex items-center gap-3">
        <ul className="relative flex gap-8">
          <NavBar_1_Items
            index={5}
            H2={
              <p>
                Register<span>/</span>Login
              </p>
            }
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          >
            <RegisterAccount />
          </NavBar_1_Items>

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
      </div>
    </div>
  );
};

export default NavBar_1B;
