import { useState } from "react";
import ActivityList from "./ActivityList";

function RentalActivity({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log(data[activeIndex].pickUpDate);
  console.log(data[activeIndex]);

  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className=" text-green-700 font-bold mb-4 text-xl">
          Rental activities
        </h1>

        <div className="grid grid-cols-[.3fr_1fr] gap-10">
          <div>
            {data.map((el, i) => (
              <ActivityList
                activity={el}
                key={i}
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
                index={i}
              />
            ))}
          </div>

          <ul className="flex flex-row gap-4">
            <div>
              <li className="text-green-700 font-bold mb-4 text-sm border text-center px-2 border-green-600">
                car name:
              </li>
              <span className=" text-lime-950">
                {" "}
                {data[activeIndex].carType}
              </span>
            </div>

            <div>
              <li className="text-green-700 font-bold mb-4 text-sm border text-center px-2 border-green-600">
                price:
              </li>
              <span>${data[activeIndex].price}</span>
            </div>

            <div>
              <li className="text-green-700 font-bold mb-4 text-sm border text-center px-2 border-green-600">
                <span>pick up date: </span>
              </li>
              <span>{data[activeIndex].pickUpDate}</span>
            </div>

            <div>
              <li className="text-green-700  font-bold mb-4 text-sm border text-center px-2 border-green-600">
                <span>drop off date</span>
              </li>
              <span>{data[activeIndex].dropOffDate}</span>
            </div>

            <div>
              <li className="text-green-700 font-bold mb-4 text-sm border text-center px-2 border-green-600">
                <span>pick up Location: </span>
              </li>
              <span>{data[activeIndex].pickUpLocation}</span>
            </div>

            <div>
              <li className="text-green-700 font-bold mb-4 text-sm border text-center px-2 border-green-600">
                <span>drop off Location: </span>
              </li>
              <span>{data[activeIndex].dropOffLocation}</span>
            </div>

            <div>
              <img src={data[activeIndex].image} alt="car" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RentalActivity;
