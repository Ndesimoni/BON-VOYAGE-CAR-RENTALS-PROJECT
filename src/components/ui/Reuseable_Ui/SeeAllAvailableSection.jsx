const SeeAllAvailableSection = ({ children }) => {
  return (
    <div className="flex items-center justify-center my-5  ">
      <div className="w-[1200px] py-5 p-[1px] flex flex-col gap-7">
        {" "}
        {children}{" "}
      </div>
    </div>
  );
};

export default SeeAllAvailableSection;
