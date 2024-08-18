

const TypesOfDealsOffered = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1200px] my-10">
        <section className="flex flex-row justify-center items-center gap-20"> {children} </section>
      </div>
    </div>
  );
};

export default TypesOfDealsOffered;
