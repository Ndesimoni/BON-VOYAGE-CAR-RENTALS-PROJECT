import styled from "styled-components";
import { FooterItems } from "../../../../DB/Local_Data_Base";

const FooterStyles = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#d6d5d5",
  padding: "10px 25px",
});

const Footer_1 = () => {
  return (
    <FooterStyles>
      {FooterItems.map((items, index) => (
        <section key={index}>
          <h3 className="header_2">{items.title}</h3>
          {items.item.map((items, index) => (
            <div key={index}>{`${items}`}</div>
          ))}
        </section>
      ))}
    </FooterStyles>
  );
};

export default Footer_1;
