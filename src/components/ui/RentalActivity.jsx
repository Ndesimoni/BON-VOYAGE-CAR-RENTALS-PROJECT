import { useState } from "react";
import ActivityList from "./ActivityList";

function RentalActivity({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(setActiveIndex);

  return (
    <div className="mx-auto w-11/12 py-10">
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

        <div className="grid grid-cols-2 gap-10 ">
          <ul className="flex flex-col gap-4">
            <li>
              <span>State {data[activeIndex].state}</span>
            </li>

            <li>
              <span>name of vehicle: {data[activeIndex].carType}</span>
            </li>

            <li>
              <span>price: ${data[activeIndex].price}</span>
            </li>

            <li>
              <span>pick up Location: </span>
              <span>{data[activeIndex].pickUpLocation}</span>
            </li>
            <li>
              <span>drop off Location: </span>
              <span>{data[activeIndex].dropOffLocation}</span>
            </li>

            <li>
              <span>pick up date: </span>
              <span>{data[activeIndex].pickUpDate}</span>
            </li>

            <li>
              <span>drop off date</span>
              <span>{data[activeIndex].dropOffDate}</span>
            </li>
          </ul>
          <img src="car-1.jpg" alt="car" />
        </div>
      </div>
    </div>
  );
}

export default RentalActivity;
