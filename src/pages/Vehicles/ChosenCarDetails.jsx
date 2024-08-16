import styled from "styled-components";
import { useMyContext } from "../../AppContext";

export const CarDetails = styled.p({
  textTransform: "capitalize",
  fontWeight: "bold",
  fontSize: "initial",
  fontFamily: "roboto",
});

export const CarInfo = styled.div({
  margin: "5px 0px",
  padding: "2px 1px",
  fontSize: "14px",
  fontFamily: "monospace",
});

const ChosenCarDetails = () => {
  //we just immediately destructure the properties that we need from our updated object
  const {
    reservationFormInfo: { name, price, type, image },
  } = useMyContext();
  return (
    //todo the corresponded will be match
    <div className="flex items-start flex-col">
      <img src={image} alt="selected car" />

      <CarInfo>
        <CarDetails>name : {name}</CarDetails>
        <CarDetails>price:{price}</CarDetails>
        <CarDetails>type : {type}</CarDetails>
      </CarInfo>
    </div>
  );
};

export default ChosenCarDetails;
