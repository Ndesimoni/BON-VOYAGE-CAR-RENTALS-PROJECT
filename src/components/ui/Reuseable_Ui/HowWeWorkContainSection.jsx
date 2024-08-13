const HowWeWorkContainSection = ({ children, h2, step, image, alt, order }) => {
  return (
    <div className="grid grid-cols-2 gap-10 items-center my-10 w-4/5 mx-auto mb-20 pb-20 border-b border-stone-500">
      <img src={image} alt={alt} className="w-[80%]" />
      <div className={`${order}`}>
        <span className="text-sm opacity-80 my-4 font-semibold">{step}</span>
        <h2 className="text-xl font-bold my-4 text-red-500 "> {h2}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default HowWeWorkContainSection;
