function Nav_2Items({ children, index, setActiveLink }) {
  function handleClick() {
    setActiveLink(index);
  }
  return (
    <li
      onClick={handleClick}
      className=" text-lg text-center cursor-pointer py-5 capitalize  bg-[#ebebebed]"
    >
      {children}
    </li>
  );
}

export default Nav_2Items;
