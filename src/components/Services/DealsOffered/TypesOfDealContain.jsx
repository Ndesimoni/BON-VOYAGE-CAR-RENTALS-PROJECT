import { Link } from "react-router-dom";
import styled from "styled-components";

// todo; // this is package imports

export const DivStyles = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "25px",
  borderRadius: "7px",
  fontSize: "15px",
  backgroundColor: "white",
});

const TypesOfDealContain = ({ Icons, title, NextArrow, description, linkPath }) => {
  return (
    <DivStyles>
      <div className="my-5 text-red-600 hover:text-green-600 ">
        <Icons size={60} />
      </div>

      <Link to={linkPath} className="header_3 uppercase hover:text-green-600 ">
        <span> {title} </span>
        <NextArrow className="w-6 h-6" />
      </Link>
      <div>
        <p>{description}</p>
      </div>
    </DivStyles>
  );
};

export default TypesOfDealContain;
