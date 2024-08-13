import styled from "styled-components";

const ServicesTypeStyles = styled.section({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});

const TypesOfDealsOffered = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1200px] my-10">
        <ServicesTypeStyles>{children}</ServicesTypeStyles>
      </div>
    </div>
  );
};

export default TypesOfDealsOffered;
