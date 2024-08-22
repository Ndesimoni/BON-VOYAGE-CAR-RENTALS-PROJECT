import { useMyContext } from "../../../../AppContext";
import MenuNotOnScroll from "./MenuNotOnScroll";
import MenuOnScroll from "./MenuOnScroll";

const NavBar_1B = () => {
  const { scrollValueUp } = useMyContext();

  return (
    <div
      style={{
        position: scrollValueUp && "fixed",
        zIndex: 100,
        width: "100%",
        backgroundColor: scrollValueUp && "white",
        boxShadow: " 0 2px 5px -1px #888888",
      }}
      className="flex justify-between items-center bg-[#279142d7] px-10 py-1.5 "
    >
      {/* //todo logo image */}
      <img src="/574.gif" alt="" className="w-24 rounded-sm" />

      <div className="flex items-center gap-3">
        {scrollValueUp && <MenuOnScroll />}
        {!scrollValueUp && <MenuNotOnScroll />}
      </div>
    </div>
  );
};

export default NavBar_1B;
