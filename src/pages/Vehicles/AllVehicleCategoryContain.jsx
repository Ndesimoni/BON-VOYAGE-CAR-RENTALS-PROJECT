import { IoBagOutline, IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllVehicleCategoryContain = ({ data, id }) => {
  const { type, categoryName, description, carImage } = data;
  return (
    <div
      className="grid grid-cols-2 items-center justify-between mb-2 text-lg "
      id={id}
    >
      <div>
        <span className=" text-2xl border-b-2 mb-6  inline-block border-stone-900 text-red-500">
          {type}
        </span>

        <p className="flex gap-2 items-center mb-4 text-green-600">
          <IoPeopleOutline className="opacity-50 text-xl " color="red" />
          <span>{type === "Vans" ? "8-12" : "4-5"} People</span>
        </p>

        <p className="flex gap-2 items-center mb-3 text-green-600">
          <IoBagOutline className="opacity-50 text-xl" color="red" />
          <span>{type === "Vans" ? "7-10" : "2-5"} Bags</span>
        </p>

        <p className="mb-8">{description}</p>

        <Link
          to={`${categoryName}`}
          className="header_2 capitalize  text-sm text-white bg-red-500 py-1 px-4 rounded-lg hover:opacity-80 transition-all hover:bg-black hover:text-white"
        >
          View {categoryName}
        </Link>
      </div>

      <img src={carImage} alt={type} className="w-2/3 ml-auto  " />
    </div>
  );
};

export default AllVehicleCategoryContain;
