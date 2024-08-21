import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import motionVariants from "../../../lib/motionVariants";

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
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 0.05,
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
      viewport={{ once: false }}
      className="shadow-xl transition duration-300 ease-in-out"
    >
      <Link to={linkPath}>
        <div className="my-2 gap-5 text-green-600 flex items-center justify-center flex-col">
          <Icons size={60} />

          <p className="header_3 uppercase hover:text-green-600 hover:shadow-lg transition duration-300 ease-in-out text-center">
            <span> {title} </span>
            <NextArrow className="w-6 h-6" />
          </p>
        </div>

        <motion.div
          ref={ref}
          style={motionVariants(isInView, "translateX(20px)")}
        >
          <p>{description}</p>
        </motion.div>
      </Link>
    </MotionDivStyles>
  );
};

export default TypesOfDealContain;
