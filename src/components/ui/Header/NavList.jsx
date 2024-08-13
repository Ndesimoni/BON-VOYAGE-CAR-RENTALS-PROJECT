const NavList = ({ children, setIsActive, index, isActive }) => {
  function handleActive() {
    setIsActive(index === isActive ? null : index);
  }

  return (
    <div
      onClick={handleActive}
      className=" py-8 text-{#0b1834} bg-[#ebebebed] text-center items-center font-sans cursor-pointer "
    >
      {children}
    </div>
  );
};

export default NavList;
