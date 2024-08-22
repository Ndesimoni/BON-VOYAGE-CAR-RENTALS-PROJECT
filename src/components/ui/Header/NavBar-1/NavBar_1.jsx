import { useState } from "react";

// import RegisterAccount from "../../../Form/CreateAccountForm";
import NavBar_1_Items from "./NavBar_1_Items";

import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useMyContext } from "../../../../AppContext";

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
  const { scrollValue } = useMyContext();

  return (
    <div>
      <div
        style={{
          position: scrollValue && "fixed",
          zIndex: 100,
          width: "100%",
          backgroundColor: scrollValue && "white",
          boxShadow: " 0 3.5px 2px -1.5px rgba(0, 0, 0, 0.235)",
        }}
        className="flex justify-between items-center bg-[#279142d7] px-10 py-1.5 "
      >
        {/*this is the head logo image  */}
        <img src="/574.gif" alt="" className="w-24 rounded-sm" />

        <div className="flex items-center gap-3">
          <ul className="relative flex gap-8">
            <Link to="/sign-up">Register/Login</Link>

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
    </div>
  );
};

export default NavBar_1B;

// className={`flex justify-between items-center bg-[#279142d7] px-10 py-1.5 ${scrollValue ? "stickyHeader " : ""}`}
