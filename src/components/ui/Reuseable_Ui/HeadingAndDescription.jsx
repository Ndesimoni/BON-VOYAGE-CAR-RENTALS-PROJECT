const HeadingAndDescription = ({ heading, description }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[1200px]">
        <h3 className="font-bold text-2xl mb-1 ">{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeadingAndDescription;
