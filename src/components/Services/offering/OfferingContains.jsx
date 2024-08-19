import Button from "../../ui/Reuseable_Ui/Button";

const OfferingContains = ({
  image,
  h3,
  description,
  routeLinks,
  routeLinksForBetterPlace,
}) => {
  return (
    <div className=" flex gap-5 mt-14 hover:shadow-lg transition duration-300 ease-in-out rounded-md">
      <div className="flex flex-col  justify-center items-center bg-white ">
        <img src={`${image}`} alt={h3} className="h-48 w-80  object-cover" />

        <div className="mt-5 max-w-80 flex flex-col my-2 justify-center items-center px-5 ">
          <h3 className="header_2 ">{h3}</h3>

          <p className="mt-1 mb-6 ">{description} </p>

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
