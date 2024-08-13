import { IoBagOutline, IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllVehicleCategoryContain = ({
  type,
  categoryName,
  description,
  carImage,
  id,
}) => {

  return (
    <div
      className="grid grid-cols-2 items-center justify-between mb-2 text-lg "
      id={id}
    >
      <div>
        <span className=" text-2xl border-b-2 mb-6  inline-block border-stone-900 text-red-500">
          {type}
        </span>

        <p className="flex gap-2 items-center mb-4">
          <IoPeopleOutline className="opacity-50 text-xl" color="red" />
          <span>{type === "Vans" ? "8-12" : "4-5"} People</span>
        </p>

        <p className="flex gap-2 items-center mb-3">
          <IoBagOutline className="opacity-50 text-xl" color="red" />
          <span>{type === "Vans" ? "7-10" : "2-5"} Bags</span>
        </p>

        <p className="mb-8">{description}</p>

        <Link
          to={`${categoryName}`}
          className="px-4 py-2 bg-red-700 text-white font-bold rounded-md hover:bg-red-100 hover:text-red-700 transition-all capitalize"
        >
          View {categoryName}
        </Link>
      </div>

      <img src={carImage} alt={type} className="w-2/3 ml-auto  " />
    </div>
  );
};

export default AllVehicleCategoryContain;
