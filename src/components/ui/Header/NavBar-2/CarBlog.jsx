import { IoBagOutline, IoPeopleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

let carType = "";

function CarBlog({ type, description, carImage }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 items-center justify-between mb-2 text-lg">
      <div>
        <span className=" text-2xl border-b-2 mb-6  inline-block border-stone-900">
          {type}
        </span>

        <p className="flex gap-2 items-center mb-4">
          <IoPeopleOutline className="opacity-50 text-xl" />
          <span>{type === "Vans" ? "8-12" : "4-5"} People</span>
        </p>
        <p className="flex gap-2 items-center mb-3">
          <IoBagOutline className="opacity-50 text-xl" />
          <span>{type === "Vans" ? "7-10" : "2-5"} Bags</span>
        </p>

        <p className="mb-8">{description}</p>
        <button
          className="px-4 py-2 bg-red-700 text-white font-bold rounded-md hover:bg-red-100 hover:text-red-700 transition-all"
          onClick={() => {
            if (type === "Cars") carType = "all-cars";
            else if (type === "Vans") carType = "vans";
            else if (type === "Suv's") carType = "suvs";
            else if (type === "Trucks") carType = "trucks";
            else carType = "luxury-cars";

            navigate(`/our-vehicle-collection/${carType}`);
          }}
        >
          View All {type}
        </button>
      </div>

      <img src={carImage} alt={type} className="w-2/3 ml-auto  " />
    </div>
  );
}

export default CarBlog;
