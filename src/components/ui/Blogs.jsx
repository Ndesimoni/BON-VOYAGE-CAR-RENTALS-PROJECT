import styled from "styled-components";

const BlogSection = styled.section({
  maxWidth: "1440px",
  margin: "10px auto",
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(4 , 1fr)",
  gap: "30px",
});

const CardDivStyle = styled.div({
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "30px",
  boxShadow: "rgba(17, 12 , 46 0.15) 0px 48px 100px 0px",
  marginBottom: "10px",
});

const CardHeaderStyle = styled.header({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  gap: "5px",
});

// const  = styled.h3({

//   });

const Blogs = () => {
  return (
    <>
      <h2>Blogs</h2>
      <BlogSection>
        <CardDivStyle
          style={{
            background: "hsl(263, 55%, 52%)",
            backgroundImage: "url(./bg-pattern-quotation.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 10px right 100px",
            color: "#fff",
            gridColumn: "1/3",
          }}
        >
          <CardHeaderStyle>
            <img
              src="./image-daniel.jpg"
              alt=""
              style={{
                border: "2px solid #00fff2 ",
              }}
              className="w-11 h-11 rounded-full"
            />
            <div>
              <h3 className="text-base">Daniel clifford</h3>
              <p className="opacity-50">verified bro</p>
            </div>
          </CardHeaderStyle>

          <p className=" text-[1.5rem] font-medium leading-[1.3] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magni
            eos, perferendis reiciendis unde, quasi hic dolorum iure quae quidem
            consequuntur, sunt aut temporibus exercitationem.
          </p>
          <p className=" text-[15px] font-medium leading-[1.4] opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            nihil cum velit saepe amet, quis provident perspiciatis omnis! Minus
            praesentium nulla, eum voluptate corporis ex.Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Facilis nihil cum velit saepe
            amet, quis provident perspiciatis omnis! Minus praesentium nulla,
            eum voluptate corporis ex.
          </p>
        </CardDivStyle>

        <CardDivStyle
          style={{
            background: "hsl(217, 19%, 35%)",
            color: "#fff",
            gridColumn: "4",
            gridRow: "1/3",
          }}
        >
          <CardHeaderStyle>
            <img
              src="./image-daniel.jpg"
              alt=""
              style={{
                border: "2px solid #00fff2 ",
              }}
              className="w-11 h-11 rounded-full"
            />
            <div>
              <h3 className="text-base">Daniel clifford</h3>
              <p className="opacity-50">verified bro</p>
            </div>
          </CardHeaderStyle>

          <p className=" text-[1.5rem] font-medium leading-[1.3] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magni
            eos, perferendis reiciendis unde, quasi hic dolorum iure quae quidem
            consequuntur, sunt aut temporibus exercitationem.
          </p>
          <p className=" text-[15px] font-medium leading-[1.4] opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            nihil cum velit saepe amet, quis provident perspiciatis omnis! Minus
            praesentium nulla, eum voluptate corporis ex. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Facilis nihil cum velit saepe
            amet, quis provident perspiciatis omnis! Minus praesentium nulla,
            eum voluptate corporis ex. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Facilis nihil cum velit saepe amet, quis provident
            perspiciatis omnis! Minus praesentium nulla, eum voluptate corporis
            ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Facilis nihil cum velit saepe amet, quis provident perspiciatis
            omnis! Minus praesentium nulla, eum voluptate corporis ex.
          </p>
        </CardDivStyle>

        <CardDivStyle>
          <CardHeaderStyle>
            <img
              src="./image-daniel.jpg"
              alt=""
              style={{
                border: "2px solid #00fff2 ",
              }}
              className="w-11 h-11 rounded-full"
            />
            <div>
              <h3 className="text-base">Daniel clifford</h3>
              <p className="opacity-50">verified bro</p>
            </div>
          </CardHeaderStyle>

          <p className=" text-[1.5rem] font-medium leading-[1.3] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magni
            eos,
          </p>
          <p className=" text-[15px] font-medium leading-[1.4] opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            nihil cum velit saepe amet, quis provident perspiciatis omnis! Minus
            praesentium nulla, eum voluptate corporis ex.
          </p>
        </CardDivStyle>

        <CardDivStyle
          style={{
            background: "hsl(219, 29%, 14%)",
            color: "#fff",
            gridColumn: "2/4",
            gridRow: "2",
          }}
        >
          <CardHeaderStyle>
            <img
              src="./image-daniel.jpg"
              alt=""
              style={{
                border: "2px solid #00fff2 ",
              }}
              className="w-11 h-11 rounded-full"
            />
            <div>
              <h3 className="text-base">Daniel clifford</h3>
              <p className="opacity-50">verified bro</p>
            </div>
          </CardHeaderStyle>

          <p className=" text-[1.5rem] font-medium leading-[1.3] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magni
            eos, perferendis reiciendis unde, quasi hic dolorum iure quae quidem
            consequuntur, sunt aut temporibus exercitationem.
          </p>
          <p className=" text-[15px] font-medium leading-[1.4] opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            nihil cum velit saepe amet, quis provident perspiciatis omnis! Minus
            praesentium nulla, eum voluptate corporis ex. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Facilis nihil cum velit saepe
            amet, quis provident perspiciatis omnis! Minus praesentium nulla,
            eum voluptate corporis ex. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Facilis nihil cum velit saepe amet, quis provident
            perspiciatis omnis! Minus praesentium nulla, eum voluptate corporis
            ex.
          </p>
        </CardDivStyle>

        <CardDivStyle>
          <CardHeaderStyle>
            <img
              src="./image-daniel.jpg"
              alt=""
              style={{
                border: "2px solid #00fff2 ",
              }}
              className="w-11 h-11 rounded-full"
            />
            <div>
              <h3 className="text-base">Daniel clifford</h3>
              <p className="opacity-50">verified bro</p>
            </div>
          </CardHeaderStyle>

          <p className=" text-[1.5rem] font-medium leading-[1.3] mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magni
            eos,
          </p>
          <p className=" text-[15px] font-medium leading-[1.4] opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            nihil cum velit saepe amet, quis provident perspiciatis omnis! Minus
            praesentium nulla, eum voluptate corporis ex.
          </p>
        </CardDivStyle>
      </BlogSection>
    </>
  );
};

export default Blogs;
