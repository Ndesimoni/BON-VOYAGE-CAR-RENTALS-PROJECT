import styled from "styled-components";

export const CarDetails = styled.span({
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


const ChosenCarDetails = ({
    carDetailsFormNotFilled,
    carDetailsFormFilled,
}) => {
    return (
        //todo the corresponded will be match 
        <div className="flex items-start flex-col">
            <img
                src={`/${carDetailsFormNotFilled ? carDetailsFormNotFilled.image : carDetailsFormFilled.image}`}
                alt={
                    carDetailsFormNotFilled
                        ? carDetailsFormNotFilled.name
                        : carDetailsFormFilled.name
                }
            />

            <CarInfo>
                <CarDetails>name</CarDetails>:
                {carDetailsFormNotFilled
                    ? carDetailsFormNotFilled.name
                    : carDetailsFormFilled.name}
            </CarInfo>

            <CarInfo>
                <CarDetails>price</CarDetails>: $
                {carDetailsFormNotFilled
                    ? carDetailsFormNotFilled.price
                    : carDetailsFormFilled.price}
            </CarInfo>

            <CarInfo>
                <CarDetails>type</CarDetails>:{" "}
                {carDetailsFormNotFilled
                    ? carDetailsFormNotFilled.type
                    : carDetailsFormFilled.type}
            </CarInfo>
        </div>
    );
};

export default ChosenCarDetails;
