import Button from "../../ui/Reuseable_Ui/Button";

const OfferingContains = ({ image, h3, description, button, }) => {


  return (
    <div className="flex gap-5 mt-14">
      <div className="flex flex-col  justify-center items-center bg-white">
        <img src={image} alt="" />

        <div className="mt-5 max-w-80 flex flex-col my-2 justify-center items-center px-5 ">
          <h3 className="header_2 ">{h3}</h3>

          <p className="mt-1 mb-6">{description} </p>
          <Button>{button}</Button>
        </div>
      </div>
    </div>
  );
};

export default OfferingContains;
