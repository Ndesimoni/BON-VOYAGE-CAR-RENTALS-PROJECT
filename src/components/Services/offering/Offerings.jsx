// import OfferingContains from "./OfferingContains";

const Offerings = ({ children, heading, description }) => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-[1200px] px-8 py-2">
          <h3 className="font-bold text-2xl mb-1 ">{heading}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex justify-center items-center  mb-6 ">
        <div className="flex w-[1200px] flex-row justify-between gap-5">
          {children}
        </div>
      </div>
    </>
  );
};

export default Offerings;
