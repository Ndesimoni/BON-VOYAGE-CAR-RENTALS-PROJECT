const ImageTextView = ({
  backgroundImage1,
  h3,
  backgroundImage2,
  heading,
  description,
  children,
}) => {
  const bgImage1 = `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.3)), ${backgroundImage1}`;
  const bgImage2 = `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.3)), ${backgroundImage2}`;

  return (
    <div>
      <div
        className="bg-cover bg-center h-[300px] relative  "
        style={{
          backgroundImage: bgImage1,
        }}
      >
        <h3 className="top-1/2 absolute text-red-600 text-3xl font-bold left-20">
          {h3}
        </h3>
      </div>

      <div className=" ml-20 mb-20">
        {heading}
        {description}
      </div>

      <div className="mb-20">
        <div
          className="h-[280px] relative bg-cover bg-center  "
          style={{
            backgroundImage: bgImage2,
          }}
        >
          <div className="absolute top-6 left-20">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextView;
