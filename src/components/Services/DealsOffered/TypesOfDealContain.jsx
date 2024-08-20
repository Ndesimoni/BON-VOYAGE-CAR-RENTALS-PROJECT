import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const MotionDivStyles = motion(DivStyles);

export const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 0.07,
  },
};

const TypesOfDealContain = ({
  Icons,
  title,
  NextArrow,
  description,
  linkPath,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MotionDivStyles
      variants={fadeInAnimation}
      initial="initial"
      animate="animate"
      whileInView="animate"
      viewport={{ once: true }}
      className="shadow-lg transition duration-300 ease-in-out"
    >
      <Link to={linkPath}>
        <div className="my-5 text-green-600 ">
          <Icons size={60} />
        </div>

        <p className="header_3 uppercase hover:text-green-600 hover:shadow-lg transition duration-300 ease-in-out ">
          <span> {title} </span>
          <NextArrow className="w-6 h-6" />
        </p>

        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.017, 0.10, 0.2, 0.2) 0.2s",
          }}
        >
          <p>{description}</p>
        </motion.div>
      </Link>
    </MotionDivStyles>
  );
};

export default TypesOfDealContain;
