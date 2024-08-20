import Button from "../../ui/Reuseable_Ui/Button";

const OfferingContains = ({
  image,
  h3,
  description,
  routeLinks,
  routeLinksForBetterPlace,
}) => {
  return (
    <div className=" flex gap-5  hover:shadow-lg transition duration-300 ease-in-out rounded-md shadow-xl ">
      <div className="flex flex-col  justify-center items-center bg-white ">
        <img src={`${image}`} alt={h3} className="h-48 w-80  object-cover" />

        <div className=" max-w-80 flex flex-col my-2 justify-center items-center px-5 ">
          <h3 className="header_2 text-green-600 ">{h3}</h3>

          <p className=" ">{description} </p>

          <Button
            routeLinks={routeLinks}
            routeLinksForBetterPlace={routeLinksForBetterPlace}
          >
            {routeLinksForBetterPlace ? "learn more" : " see More Vehicles"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferingContains;
