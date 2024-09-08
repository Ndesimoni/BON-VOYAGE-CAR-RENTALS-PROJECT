import styled from "styled-components";

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

const ChosenCarDetails = ({ reservationDetails }) => {
  //we just immediately destructure the properties that we need from our updated object
  const { image, name, price, description } = reservationDetails;

  return (
    //todo the corresponded will be match
    <div className="flex items-start flex-col">
      <img src={image} alt={name} />

      <CarInfo>
        <CarDetails>name : {name}</CarDetails>
        <CarDetails>price:{price}</CarDetails>
        <CarDetails>type : {description}</CarDetails>
      </CarInfo>
    </div>
  );
};

export default ChosenCarDetails;
