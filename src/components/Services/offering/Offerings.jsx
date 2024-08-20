// import OfferingContains from "./OfferingContains";

const Offerings = ({ children, heading, description }) => {
  return (
    <div className=" mb-20 py-5 ">
      <div className="flex justify-center items-center ">
        <div className="w-[1200px] px-1 ">
          <h3 className="font-bold text-2xl mb-1 capitalize text-green-600 ">
            {heading}
          </h3>
          <p className="capitalize">{description}</p>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="flex w-[1200px] flex-row justify-between gap-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
