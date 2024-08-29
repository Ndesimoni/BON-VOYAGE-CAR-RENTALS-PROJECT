import { useInView } from "framer-motion";
import { useRef } from "react";
import motionVariants from "../../../lib/motionVariants";

const SeeAllAvailableSectionContains = ({ children, image, alt }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={motionVariants(isInView, "translateY(20px)")}
      className="flex items-center my-4 gap-20"
    >
      <div
        style={motionVariants(isInView, "translateX(-20px)")}
        className="p-1"
      >
        {children}
      </div>
      <img className="max-w-2xl " src={image} alt={alt} />
    </div>
  );
};

export default SeeAllAvailableSectionContains;
