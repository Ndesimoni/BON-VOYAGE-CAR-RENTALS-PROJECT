import { useState } from "react";
import ActivityList from "./ActivityList";

function RentalActivity({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

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
          {/* 
<<<<<<< HEAD
        <div className="grid grid-cols-2 gap-10 ">
          <ul className="flex flex-col gap-4">
            <li>
              <span>State {data[activeIndex].state}</span>
            </li>

            <li>
              <span>name of vehicle: {data[activeIndex].carType}</span>
            </li>
======= */}
          <ul className="flex flex-row gap-4">
            <div>
              <li className="text-green-700 font-bold mb-4 text-sm border text-center px-2 border-green-600">
                car name:
              </li>
              <span className=" text-lime-950"> {data[activeIndex].name}</span>
            </div>
            {/* >>>>>>> 7e00787 (added some design to the merge request) */}

            <div>
              <li className="text-green-700 font-bold mb-4 text-sm border text-center px-2 border-green-600">
                price:
              </li>
              <span>${data[activeIndex].price}</span>
            </div>

            {/* <<<<<<< HEAD
            <li>
              <span>pick up Location: </span>
              <span>{data[activeIndex].pickUpLocation}</span>
            </li>
            <li>
              <span>drop off Location: </span>
              <span>
                {new Date(data[activeIndex].dropOffLocation).toDateString()}
              </span>
            </li>

            <li>
              <span>pick up date: </span>
              <span>
                {new Date(data[activeIndex].pickUpDate).toDateString()}
              </span>
            </li>

            <li>
              <span>drop off date</span>
              <span>{data[activeIndex].dropOffDate}</span>
            </li>
          </ul>
          <img src="car-1.jpg" alt="car" />
======= */}
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
              <span>{data[activeIndex].DropOffDate}</span>
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
          {/* >>>>>>> 7e00787 (added some design to the merge request) */}
        </div>
      </div>
    </div>
  );
}

export default RentalActivity;
