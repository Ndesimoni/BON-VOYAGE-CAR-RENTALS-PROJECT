
import { carTypeCategory } from "../../../DB/Local_Data_Base";
import AllVehicleCategoryContain from "./AllVehicleCategoryContain";


function AllVehicleCategory() {


  return (
    <main className="  bg-gray-100 flex justify-center items-center">
      <div className="w-[1200px] mx-auto ">
        <h1 className="text-3xl font-semibold pt-10 capitalize">
        </h1>

        {/* //todo this is going to all vehicle category */}
        {carTypeCategory.map((category, index) => (
          <AllVehicleCategoryContain
            key={index}
            description={category.description}
            carImage={category.carImage}
            categoryName={category.title}
          />
        ))}
      </div>
    </main>
  );
}

export default AllVehicleCategory;
