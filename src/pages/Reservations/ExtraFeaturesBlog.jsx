import { useInView } from "framer-motion";
import { useRef } from "react";
import motionVariants from "../../lib/motionVariants";

function ExtraFeaturesBlog({ icon, heading, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div
        ref={ref}
        style={motionVariants(isInView, "translateY(20px)")}
        className="hover:bg-red-50 transition-all p-4 shadow-xl bg-white "
      >
        <p className="text-3xl mb-2 text-green-600">{icon}</p>

        <h1 className="text-red-500 text-xl  mb-2">{heading}</h1>
        <p ref={ref} style={motionVariants(isInView, "translateX(20px)")}>
          {text}
        </p>
      </div>
    </>
  );
}

export default ExtraFeaturesBlog;
