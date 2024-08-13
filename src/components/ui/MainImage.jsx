import styled from "styled-components";
import ReservationForm from "../Form/reservationForm/ReservationForm";

const MainImageDivStyle = styled.div({
  backgroundImage: "url(./bon-bg-main-img.jpeg)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px ",
  // marginTop: "146px",
});

const MainImage = () => {
  document;
  return (
    <MainImageDivStyle>
      <ReservationForm />
    </MainImageDivStyle>
  );
};

export default MainImage;

// const ServicesTypeStyles = styled.section({
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "center",
//   alignItems: "center",
//   gap: "20px",
// });

// export const DivStyles = styled.div({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   backgroundColor: " white",
//   padding: "25px 10px",
//   borderRadius: "7px",
//   fontSize: "15px",
// });

// const MainImageStyles = styled.div({
//   backgroundImage: "url(./bon-bg-main-img.jpeg)",

//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// });

// const MainImage = () => {
//   return (
//     <MainImageStyles>
//       <div className="max-w-[1200px] py-10">
//         <ServicesTypeStyles>
//           <DivStyles>
//             <div>
//               <h1 className="font-extrabold text-4xl py-5">
//                 Reserve a Vehicle
//               </h1>

//               <div className="flex items-center justify-between ">
//                 <p className="font-semibold text-sm">
//                   Pic-up & Return Location (ZIP,City or Airport)*
//                 </p>

//                 <span className="text-slate-400 italic"> * Required Field</span>
//               </div>

//             </div>
//           </DivStyles>
//         </ServicesTypeStyles>
//       </div>

//       {/* <ServicesType /> */}
//     </MainImageStyles>
//   );
// };

// export default MainImage;

// const ServicesType = () => {
//   return (
//     <div className="max-w-[1200px]">
//       <div className=" capitalize ">
//         <h2 className=" header_2"> Our Services </h2>
//       </div>

//       <ServicesTypeStyles>
//         <DivStyles>
//           <img src="./467.gif" alt="" className="w-24 h-24 mb-4" />

//           <h2 className="header_3">
//             <span> RENT-TO-OWN </span>
//             <MdNavigateNext className="w-6 h-6" />
//           </h2>

//           <p>
//             Rent-To-Own is the smart alternative to car financing for those with
//             bad or less than perfect credit.
//           </p>
//         </DivStyles>

//         <DivStyles>
//           <img src="./467.gif" alt="" className="w-24 h-24 mb-4" />
//           <h2 className="mb-4 flex items-center  text-green-500 cursor-pointer font-semibold">
//             <span> RENT-TO-OWN </span>
//             <MdNavigateNext className="w-6 h-6" />
//           </h2>
//           <p>
//             Rent-To-Own is the smart alternative to car financing for those with
//             bad or less than perfect credit.
//           </p>
//         </DivStyles>

//         <DivStyles>
//           <img src="./467.gif" alt="" className="w-24 h-24 mb-4" />
//           <h2 className="mb-4 flex items-center  text-green-500 cursor-pointer font-semibold ">
//             <span> RENT-TO-OWN </span>
//             <MdNavigateNext className="w-6 h-6" />
//           </h2>
//           <p>
//             Rent-To-Own is the smart alternative to car financing for those with
//             bad or less than perfect credit.
//           </p>
//         </DivStyles>

//         <DivStyles>
//           <img src="./467.gif" alt="" className="w-24 h-24 mb-4" />
//           <h2 className="mb-4 flex items-center  text-green-500 cursor-pointer font-semibold ">
//             <span> RENT-TO-OWN </span>
//             <MdNavigateNext className="w-6 h-6" />
//           </h2>
//           <p>
//             Rent-To-Own is the smart alternative to car financing for those with
//             bad or less than perfect credit.
//           </p>
//         </DivStyles>
//       </ServicesTypeStyles>
//     </div>
//   );
// };
