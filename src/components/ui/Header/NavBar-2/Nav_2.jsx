import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Nav_2Items from "./Nav_2Items";
import { nav_2_data as data } from "../../../../../DB/Local_Data_Base";
import { useMyContext } from "../../../../AppContext";

function Nav_2() {
  const [activeLink, setActiveLink] = useState(null);
  const { isLoading, setIsLoading } = useMyContext();
  const navigate = useNavigate();

  //todo this now handles the navigation to the vehicle route
  function handleNavigate(linkItem) {
    setIsLoading(true);
    setActiveLink(null);
    navigate(
      data[activeLink].title === "Vehicles"
        ? `all-vehicle-category/${linkItem}`
        : linkItem,
      { state: linkItem }
    );
    setIsLoading(false);
  }

  function handleClickHome() {
    setActiveLink(null);
    // navigate("/home");
    navigate("/");
  }

  return (
    <div className="relative bg-black">
      <ul className="grid grid-cols-6 items-center gap-[1px]">
        <li
          onClick={handleClickHome}
          className="bg-[#ebebebed] text-lg text-center cursor-pointer py-5 capitalize "
        >
          Home
        </li>
        {data.map((item, i) => (
          <Nav_2Items key={item.title} setActiveLink={setActiveLink} index={i}>
            {" "}
            {item.title}
          </Nav_2Items>
        ))}
      </ul>

      {activeLink !== null && (
        <div className="absolute w-[100%] grid grid-cols-[70%_1fr] py-0.5 z-10">
          <div className=" bg-white h-[30vh] ">
            <ul className="  justify-evenly  gap-4 mt-4 ml-4 flex">
              {data[activeLink].links.map((linkEl, index) => (
                <div key={index}>
                  <h1 className="text-green-600 uppercase font-semibold">
                    {linkEl.heading}
                  </h1>
                  <div>
                    {/* //todo this is linking to all-vehicle-category or to the corresponding link element */}
                    {linkEl.linkItems.map((linkItem, i) => {
                      return (
                        <div
                          disabled={isLoading}
                          key={i}
                          onClick={() => handleNavigate(linkItem)}
                        >
                          <li className=" px-[2px] py-[1px] line-clamp-1 text-red-500 hover:text-black text-sm capitalize">
                            {linkItem.replaceAll("-", " ")}
                          </li>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </ul>
          </div>

          <img
            src={`/${data?.[activeLink].img}`}
            alt="drop down images"
            className="object-fill h-[30vh] w-full"
          />
        </div>
      )}
    </div>
  );
}

export default Nav_2;
