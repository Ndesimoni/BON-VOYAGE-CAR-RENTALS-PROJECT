import Button from "./Button";

const PlacesToVisit = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1200px] grid grid-cols-4 gap-10 ">
        <div className="col-span-2 bg-red-600">
          <img src="/air-port-rides-1.jpg" alt="" />
        </div>

        <div className="col-span-2 bg-green-700">
          <img src="/air-port-rides.jpg" alt="" />
        </div>

        <div className="flex flex-col  justify-center items-center bg-white shadow-xl ">
          <img src={`car-12.jpg`} className="h-48 w-80  object-cover" />

          <div
            // ref={ref}
            // style={motionVariants(isInView, "translateX(-20px)")}
            className=" max-w-80 flex flex-col my-2 justify-center items-center px-5 "
          >
            <h3 className="header_2 text-green-600 ">
              okkkkkkkkkkkkkkkkkkkkkkkkkk
            </h3>

            <p className=" "> yooooooooooo</p>

            <Button

            // routeLinksForBetterPlace={routeLinksForBetterPlace}
            >
              see More Vehicles
            </Button>
          </div>
        </div>

        <div className="">
          {" "}
          <img src="/car-12.jpg" alt="" />
        </div>

        <div className="">
          {" "}
          <img src="/car-12.jpg" alt="" />
        </div>

        <div className="">
          {" "}
          <img src="/car-12.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PlacesToVisit;
