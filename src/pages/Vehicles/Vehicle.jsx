import { useParams } from "react-router-dom";

import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import VehicleContain from "./VehicleContain";
import { useQuery } from "@tanstack/react-query";
import { getAllCars } from "../../lib/supabaseApi";
import Loading from "../../components/ui/Reuseable_Ui/Loading";

function Vehicle() {
  const { carsId: incomingPath } = useParams();

  const { data: vehicleCategory = [], isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: getAllCars,
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <SingleTextImageView image="url(/help.jpg)">
        <p> Alway Ready For Business</p>
        <p className="text-yellow-50 text-lg capitalize"> sell your car</p>
      </SingleTextImageView>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-20 my-12 w-[1200px]">
          {vehicleCategory
            .filter(
              (selectedCategory) =>
                (selectedCategory =
                  selectedCategory.description === incomingPath)
            )

            .map((car, index) => (
              <VehicleContain car={car} key={index} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Vehicle;
