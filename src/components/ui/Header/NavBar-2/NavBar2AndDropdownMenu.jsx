//todo //: this are packages
import styled from "styled-components";

//todo //: this are my local components
import { navBar2Data } from "@/DB/Local_Data_Base";
import { useState } from "react";
import NavList from "../NavList";
import { DropDownItemStyle, DropDownMenuStyle } from "./DropdownMenu";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar_Styles = styled.ul({
  position: "relative",
  display: " grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: 1,
  border: "none",
  backgroundColor: "black",
});

const NavBar_2 = () => {
  const [isActive, setIsActive] = useState(null);
  const [routePath, setRoutePath] = useState("");
  const navigate = useNavigate();

  function closeDropDown() {
    setIsActive(null);
  }

  // function urlRoutePath(pathTitle) {
  //   const correspondingPath = pathTitle.items.find((ell) => ell === routePath);
  //   if (
  //     pathTitle.title === "Vans" ||
  //     pathTitle.title === "Luxury Cars" ||
  //     pathTitle.title === "Available  SUVs" ||
  //     pathTitle.title === "Trucks" ||
  //     pathTitle.title === "Standard Cars"
  //   ) {
  //     navigate(`category?to=${correspondingPath}`);
  //   } else {
  //     navigate(`${routePath}`);
  //   }
  // }
  function urlRoutePath(pathTitle) {
    // const correspondingPath = pathTitle.items.find((ell) => ell === routePath);
    // if (
    //   pathTitle.title === "Vans" ||
    //   pathTitle.title === "Luxury Cars" ||
    //   pathTitle.title === "Available  SUVs" ||
    //   pathTitle.title === "Trucks" ||
    //   pathTitle.title === "Standard Cars"
    // ) {
    //   navigate(`category?to=${correspondingPath}`);
    // } else {
    //   navigate(`${routePath}`);
    // }
    const a = navBar2Data.at(isActive).header.flatMap((el) => el.items);
    console.log(a);
    console.log(isActive);

    navigate(`/All-vehicle-category/${routePath}`);
    // console.log(navigate);
    // console.log(routePath);
    console.log(pathTitle);
  }

  // {activeLink !== null && (
  //   <div className="absolute w-full flex">
  //     <div className=" bg-white w-3/5 h-[80vh] z-10 ">
  //       <ul className=" grid grid-cols-2 justify-evenly items-center gap-4 mt-4 text-blue-500  ml-4 ">
  //         {data[activeLink].linkItems.map((link, i) => {
  //           return (
  //             <NavLink
  //               key={i}
  //               to={
  //                 data[activeLink].title === "car deals" && i > 2
  //                   ? `our-vehicle-collection/${link}`
  //                   : link
  //               }
  //             >
  //               <li
  //                 onClick={() => setActiveLink(null)}
  //                 className="hover:underline"
  //               >
  //                 {link.replaceAll("-", " ")}
  //               </li>
  //             </NavLink>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //     <img src={`car-${activeLink}.jpg`} alt="drop down images" />
  //   </div>
  // )}

  function bothEvents(dropDownItems, item) {
    // trying to make this state change to this item parameter when click which will now set the routePath state the  value access it in the urlRoutePath function and navigate to it

    setRoutePath(item);
    urlRoutePath(dropDownItems);
  }

  return (
    <>
      <NavBar_Styles>
        {/* //todo //: this navLink component is here cause it routes to the home page */}
        <NavLink
          to="/"
          onClick={closeDropDown}
          className=" py-8 text-{#0b1834} bg-[#ebebebed] text-center items-center font-sans cursor-pointer "
        >
          Home
        </NavLink>

        {/* this is the menu name or titles which holds the dropdown */}
        {navBar2Data.map((ell, index) => (
          <div key={index}>
            <NavList
              setIsActive={setIsActive}
              index={index}
              isActive={isActive}
            >
              {ell.menuName}
            </NavList>
          </div>
        ))}

        {/* //todo:: this is the dropdown menu component here */}
        {isActive !== null && (
          <DropDownMenuStyle>
            <DropDownItemStyle>
              {navBar2Data[isActive].header.map(
                (dropDownItems, dropDownIndex) => (
                  <div key={dropDownIndex}>
                    {/* dropdown div */}
                    <div>
                      <h2 className="text-red-500 font-semibold text-base uppercase">
                        {dropDownItems.title}
                      </h2>
                      {/* this is the dropdown list items */}
                      <div>
                        {dropDownItems.items.map((item, index) => (
                          <div
                            key={index}
                            onClick={closeDropDown}
                            className="text-sm capitalize pl-2 hover:border hover:rounded-full hover:px-2 hover:text-red-600 hover:border-red-200  hover:bg-green-50 ]"
                          >
                            <p
                              key={index}
                              onClick={() => bothEvents(dropDownItems, item)}
                            >
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </DropDownItemStyle>

            {/* this are the images for displayed in the header  */}
            <img
              src={navBar2Data[isActive].image}
              alt=""
              className="object-fill h-64 w-full"
            />
          </DropDownMenuStyle>
        )}
      </NavBar_Styles>
      {/* <div className="flex bg-green-600 items-center ">
        Home / Car Rental Location / Tennessee{" "}
      </div> */}
    </>
  );
};

export default NavBar_2;

// function handleSubmit(pathTitle) {
//   const corresponding = pathTitle.items.find((ell) => ell === routePath);
//   if (
//     pathTitle.title === "Vans" ||
//     pathTitle.title === "Luxury Cars" ||
//     pathTitle.title === "Available  SUVs" ||
//     pathTitle.title === "Trucks" ||
//     pathTitle.title === "Standard Cars"
//   ) {
//     navigate(`category?to=${corresponding}`);
//   } else {
//     navigate(`${corresponding}`);
//   }
// }

// function bothEvents(dropDownItems, item) {
//   setRoutePath(item);
//   handleSubmit(dropDownItems);
// }

// //todo //: this are packages
// import styled from "styled-components";

// //todo //: this are my local components
// import { navBar2Data } from "@/DB/Local_Data_Base";
// import { useState } from "react";
// import NavList from "../NavList";
// import { DropDownItemStyle, DropDownMenuStyle } from "./DropdownMenu";
// import { NavLink, useNavigate } from "react-router-dom";

// const NavBar_Styles = styled.ul({
//   position: "relative",
//   display: " grid",
//   gridTemplateColumns: "repeat(6, 1fr)",
//   gap: 1,
//   border: "none",
//   backgroundColor: "black",
// });

// const NavBar_2 = () => {
//   const [isActive, setIsActive] = useState(null);
//   const [routePath, setRoutePath] = useState({ path: "" });
//   const navigate = useNavigate();

//   function closeDropDown() {
//     setIsActive(null);
//   }

//   function handleSubmit(pathTitle) {
//     const correspondingPath = pathTitle.items.find(
//       (ell) => ell === routePath.path
//     );

//     if (
//       pathTitle.title === "Vans" ||
//       pathTitle.title === "Luxury Cars" ||
//       pathTitle.title === "Available  SUVs" ||
//       pathTitle.title === "Trucks" ||
//       pathTitle.title === "Standard Cars"
//     ) {
//       navigate(`category?to=${correspondingPath}`);
//     } else {
//       navigate(`${routePath.path}`);
//     }
//     console.log(routePath);
//   }

//   function bothEvents(dropDownItems, item) {
//     setRoutePath({ path: item });
//     handleSubmit(dropDownItems);
//   }

//   return (
//     <>
//       <NavBar_Styles>
//         {/* //todo //: this navLink component is here cause it routes to the home page */}
//         <NavLink
//           to="/"
//           onClick={closeDropDown}
//           className=" py-8 text-{#0b1834} bg-[#ebebebed] text-center items-center font-sans cursor-pointer "
//         >
//           Home
//         </NavLink>

//         {/* this is the menu name or titles which holds the dropdown */}
//         {navBar2Data.map((ell, index) => (
//           <div key={index}>
//             <NavList
//               setIsActive={setIsActive}
//               index={index}
//               isActive={isActive}
//             >
//               {ell.menuName}
//             </NavList>
//           </div>
//         ))}

//         {/* //todo:: this is the dropdown menu component here */}
//         {isActive !== null && (
//           <DropDownMenuStyle>
//             <DropDownItemStyle>
//               {navBar2Data[isActive].header.map(
//                 (dropDownItems, dropDownIndex) => (
//                   <div key={dropDownIndex}>
//                     {/* dropdown div */}
//                     <div>
//                       <h2 className="text-red-500 font-semibold text-base uppercase">
//                         {dropDownItems.title}
//                       </h2>
//                       {/* this is the dropdown list items */}
//                       <div>
//                         {dropDownItems.items.map((item, index) => (
//                           <div
//                             key={index}
//                             onClick={closeDropDown}
//                             className="text-sm capitalize pl-2 hover:border hover:rounded-full hover:px-2 hover:text-red-600 hover:border-red-200  hover:bg-green-50 ]"
//                           >
//                             <p
//                               key={index}
//                               onClick={() => bothEvents(dropDownItems, item)}
//                             >
//                               {item}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )
//               )}
//             </DropDownItemStyle>

//             {/* this are the images for displayed in the header  */}
//             <img
//               src={navBar2Data[isActive].image}
//               alt=""
//               className="object-fill h-64 w-full"
//             />
//           </DropDownMenuStyle>
//         )}
//       </NavBar_Styles>
//       {/* <div className="flex bg-green-600 items-center ">
//         Home / Car Rental Location / Tennessee{" "}
//       </div> */}
//     </>
//   );
// };

// export default NavBar_2;
