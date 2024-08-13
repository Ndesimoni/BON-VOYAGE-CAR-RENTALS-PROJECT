const SeeAllAvailableSectionContains = ({ children, image, alt }) => {
  return (
    <div className="flex items-center my-4 gap-20">
      <div className="p-1">{children}</div>
      <img className="max-w-2xl" src={image} alt={alt} />
    </div>
  );
};

export default SeeAllAvailableSectionContains;
