import { motion, useInView } from "framer-motion";
import motionVariants from "../../../lib/motionVariants";
import { useRef } from "react";

// import { useRef } from "react";
// import motionVariants from "../../../lib/motionVariants";

const ImageTextView = ({
  backgroundImage1,
  h3,
  backgroundImage2,
  heading,
  description,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const bgImage1 = `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.3)), ${backgroundImage1}`;
  const bgImage2 = `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.3)), ${backgroundImage2}`;

  return (
    <div>
      <motion.div
        ref={ref}
        style={motionVariants(isInView, "translateY(10px)")}
      >
        <div
          style={{
            backgroundImage: bgImage1,
          }}
          className={`bg-cover bg-center h-[300px] relative `}
        >
          <motion.h3
            ref={ref}
            style={motionVariants(isInView, "translateX(10px)")}
            className="top-1/2 absolute text-red-600 text-3xl font-bold left-20"
          >
            {h3}
          </motion.h3>
        </div>
      </motion.div>

      <div
        ref={ref}
        style={motionVariants(isInView, "translateX(-0px)")}
        className=" ml-20 py-2 my-7"
      >
        <p className="text-green-600 text-lg font-bold left-20"> {heading}</p>
        <p> {description}</p>
      </div>

      <motion.div
        ref={ref}
        style={motionVariants(isInView, "translateX(10px)")}
        className="mb-20"
      >
        <div
          className="h-[280px] relative bg-cover bg-center  "
          style={{
            backgroundImage: bgImage2,
          }}
        >
          <div
            ref={ref}
            style={motionVariants(isInView, "translateX(10px)")}
            className="absolute top-6 left-20"
          >
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageTextView;
