const SingleTextImageView = ({ image, children }) => {
  return (
    <div
      className="bg-cover bg-center h-[300px] relative mb-2 z-0 bg-fixed "
      style={{
        backgroundImage: image,
      }}
    >
      <div className="top-1/2 absolute text-red-500 text-3xl font-bold left-20">
        {children}
      </div>
    </div>
  );
};

export default SingleTextImageView;

// ("url(/help.jpg)");
