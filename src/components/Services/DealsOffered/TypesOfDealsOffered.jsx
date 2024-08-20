const TypesOfDealsOffered = ({ children }) => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="max-w-[1200px]  my-5">
        <section className="flex flex-row justify-center items-center gap-20">
          {" "}
          {children}{" "}
        </section>
      </div>
    </div>
  );
};

export default TypesOfDealsOffered;
