import { CarFleetSVGs } from "../../../DB/Local_Data_Base";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../AppContext";
// import { SlArrowLeft } from "react-icons/sl";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import motionVariants from "../../lib/motionVariants";

function NextButton(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="header_2 capitalize  text-sm text-white bg-red-500 py-1 px-4 ml-[57%] mt-16 absolute z-40 rounded-lg hover:opacity-80 transition-all hover:bg-black hover:text-white"
    >
      <SlArrowRight />
    </button>
  );
}

function PrevButton(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="header_2 capitalize  text-sm text-white bg-red-500 py-1 px-4 ml-[39.5%] 2xl:mt-[525px]  2xl:ml-[41.4%]  xl:mt-[335px] mt-[335px] absolute z-40 rounded-lg hover:opacity-80 transition-all hover:bg-black hover:text-white"
    >
      <SlArrowLeft />
    </button>
  );
}

const CarFleet = () => {
  const { setReservationFormInfo } = useMyContext();

  const navigate = useNavigate();

  function handleSubmit(activeFleet) {
    navigate(`All-vehicle-category/${activeFleet}`, { state: activeFleet });

    //this resets the state of the drop-down-orm, showing that the user did not fill the dropdown form
    setReservationFormInfo({});
  }

  //todo this is navigating to the all allVehicleCategory component

  function allVehicleCategory() {
    navigate(`All-vehicle-category`);
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // text-[#279142d7]

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={motionVariants(isInView, "translateX(-20px)")}
      className=" mt-10 mb-20"
    >
      <div className="flex justify-center items-center">
        <h2 className="header_2 mt-3 text-green-600  capitalize text-2xl">
          Meet The Fleet
        </h2>
      </div>

      <Slider {...settings}>
        {CarFleetSVGs.map((items, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center "
          >
            <div className="flex flex-row justify-center items-center z-0 ">
              <img src={items.image} alt={items.title} />
            </div>

            <div className="flex flex-row justify-center items-center ">
              <button
                onClick={() => handleSubmit(items.title)}
                className="header_3 text-red-500-600 my-3 py-2 capitalize text-lg underline"
              >
                {items.title}
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* //todo view all cars category */}
      <motion.div
        ref={ref}
        style={motionVariants(isInView, "translateX(30px)")}
        className="flex justify-center items-center py-5 gap-3  my-10"
      >
        <button
          onClick={allVehicleCategory}
          className="header_2 capitalize  text-sm text-white bg-red-500 py-1 px-4 rounded-lg hover:opacity-80 transition-all hover:bg-black hover:text-white"
        >
          <h2> View all Vehicle</h2>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CarFleet;
