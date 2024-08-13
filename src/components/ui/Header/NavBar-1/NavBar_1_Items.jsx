const NavBar_1_Items = ({
  H2,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  function handleClick() {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <>
      <div>
        <div onClick={handleClick}>
          <h2>{H2}</h2>
        </div>

        <div className="absolute z-10 ">
          {" "}
          {activeIndex == index && (
            <div className=" bg-slate-50 flex flex-col p-2 gap-1 rounded-b-sm border-s-black">
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar_1_Items;
