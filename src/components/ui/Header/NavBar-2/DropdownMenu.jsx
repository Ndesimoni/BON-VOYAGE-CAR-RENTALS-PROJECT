// import ExoticCars from "@/components/CarFleet/ExoticCars";

// import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropDownMenuStyle = styled.div({
  display: "grid",
  gridTemplateColumns: "70% 1fr",
  position: "absolute",
  left: "0",
  top: "calc(100% + 0.05rem)",
  width: "100%",
  backgroundColor: "white",
  padding: "0px 2px",
});
//
export const DropDownItemStyle = styled.div({
  padding: ".75rem ",
  borderRadius: ".25rem",
  color: "black",
  boxShadow: "0 .5px 3px 0 rgba(0, 0, 0, .3)",
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "top",
  width: "100%",
});
