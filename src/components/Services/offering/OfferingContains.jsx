import Button from "../../ui/Reuseable_Ui/Button";
import { motion, useInView } from "framer-motion";
// import { fadeInAnimation } from "../DealsOffered/TypesOfDealContain";
import { useRef } from "react";
import motionVariants from "../../../lib/motionVariants";

const OfferingContains = ({
  image,
  h3,
  description,
  routeLinks,
  routeLinksForBetterPlace,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref} style={motionVariants(isInView, "translateY(20px)")}>
      <div className="flex flex-col  justify-center items-center bg-white shadow-xl ">
        <img src={`${image}`} alt={h3} className="h-48 w-80  object-cover" />

        <div
          ref={ref}
          style={motionVariants(isInView, "translateX(-20px)")}
          className=" max-w-80 flex flex-col my-2 justify-center items-center px-5 "
        >
          <h3 className="header_2 text-green-600 ">{h3}</h3>

          <p className=" ">{description} </p>

          <Button
            routeLinks={routeLinks}
            routeLinksForBetterPlace={routeLinksForBetterPlace}
          >
            {routeLinksForBetterPlace ? "learn more" : " see More Vehicles"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferingContains;
