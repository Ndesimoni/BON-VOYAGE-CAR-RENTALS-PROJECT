import { CarFleetSVGs } from "../../../DB/Local_Data_Base";
import { useNavigate } from "react-router-dom";

const CarFleet = () => {
  const navigate = useNavigate();

  function handleSubmit(activeFleet) {
    navigate(`All-vehicle-category/${activeFleet}`, { state: activeFleet });
  }

  //todo this is navigating to the all allVehicleCategory component
  function allVehicleCategory() {
    navigate(`All-vehicle-category`);
  }

  return (
    <div className="p-2">
      <div className="flex justify-center items-center">
        <h2 className="header_2 capitalize text-2xl">Meet The Fleet</h2>
      </div>

      <div className="flex  ">
        {/* //todo data from data base */}
        {CarFleetSVGs.map((items, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center  "
          >
            {" "}
            <img src={items.image} alt="" />
            <button
              onClick={() => handleSubmit(items.title)}
              className="header_3 my-3 py-2 capitalize text-lg underline"
            >
              {items.title}
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-5">
        <button
          onClick={allVehicleCategory}
          className="header_2 capitalize text-xl text-white bg-stone-900 py-2 px-4 rounded-lg hover:opacity-80 transition-all hover:bg-red-600 hover:text-black"
        >
          <h2> View all Vehicle</h2>
        </button>
      </div>
    </div>
  );
};

export default CarFleet;
