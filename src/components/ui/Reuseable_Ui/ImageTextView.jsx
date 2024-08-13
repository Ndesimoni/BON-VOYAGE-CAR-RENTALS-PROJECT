const ImageTextView = ({
  backgroundImage1,
  h3,
  backgroundImage2,
  heading,
  description,
  children,
}) => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[300px] relative mb-10 z-0"
        style={{
          backgroundImage: backgroundImage1,
        }}
      >
        <h3 className="top-1/2 absolute text-white text-3xl font-bold left-20">
          {h3}
        </h3>
      </div>

      <div className=" ml-20 mb-20">
        {heading}
        {description}
      </div>

      <div className="mb-20">
        <div
          className="h-[280px] relative bg-cover bg-center "
          style={{
            backgroundImage: backgroundImage2,
          }}
        >
          <div className="absolute top-6 left-20">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextView;
