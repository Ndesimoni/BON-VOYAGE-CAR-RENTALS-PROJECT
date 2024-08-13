import { IoKeyOutline, IoPricetagsOutline } from "react-icons/io5";
import TypesOfDealContain from "../../components/Services/DealsOffered/TypesOfDealContain";
import TypesOfDealsOffered from "../../components/Services/DealsOffered/TypesOfDealsOffered";
import { MdNavigateNext } from "react-icons/md";
import { IoIosCar, IoMdBuild } from "react-icons/io";
import MoreServices from "../../components/Services/MoreServices";
import OfferingContains from "../../components/Services/offering/OfferingContains";
import Offerings from "../../components/Services/offering/Offerings";

const Services = () => {
  return (
    <div>
      {/* //todo this is the  types of deals offered section in home page */}
      <TypesOfDealsOffered>
        <TypesOfDealContain
          Icons={IoPricetagsOutline}
          title="deals"
          NextArrow={MdNavigateNext}
          description=" Rent-To-Own is the smart alternative to car financing for those with bad
or less than perfect credit."
        />

        <TypesOfDealContain
          Icons={IoMdBuild}
          title="rent After Accident "
          NextArrow={MdNavigateNext}
          description="Rent-To-Own is the smart alternative to car financing for those with
bad or less than perfect credit. "
        />

        <TypesOfDealContain
          Icons={IoKeyOutline}
          title="RENT-TO-OWN "
          NextArrow={MdNavigateNext}
          description=" Rent-To-Own is the smart alternative to car financing for those with
bad or less than perfect credit. "
        />

        <TypesOfDealContain
          Icons={IoIosCar}
          title="Ride share "
          NextArrow={MdNavigateNext}
          description=" Rent-To-Own is the smart alternative to car financing for those with
bad or less than perfect credit. "
        />
      </TypesOfDealsOffered>

      {/* //todo this is the  first Offering section in home page */}
      <Offerings
        heading="Latest Offerings"
        description="Trust your local Enterprise experts to help you find the light and medium-duty vehicles you need, including pickup trucks, box trucks, moving trucks and cargo vans."
      >
        {/* this is the offering section which hold the image, description and button */}
        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
        />

        <OfferingContains
          image="https://www.enterprisetrucks.com/content/dam/truckrental/en_us/homepage/Truck_T16_Eng_Branch-Lineup-375x210-new.jpeg"
          h3="Dependable vehicles, great service"
          description="Enterprise specializes in commercial grade cargo vans and trucks to deliver the dependability, flexibility and service you need to keep moving."
          button="View Truck Rental Vehicles"
        />
      </Offerings>

      {/* //todo this is the more service section */}
      <MoreServices />
    </div>
  );
};

export default Services;
