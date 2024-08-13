// import { cars } from "../../DB/Local_Data_Base";
import {
  // DropDownSelectStyles,
  InputStyles,
  InputStylesEmail,
  ItemStyle,
  SectionStyle,
} from "../../components/Form/reservationForm/ReservationDropdown";
import Button from "../../components/ui/Reuseable_Ui/Button";
import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";

const SellACar = () => {
  return (
    <>
      <SingleTextImageView image="url(/help.jpg)">
        <p> Alway Ready For Business</p>
        <p className="text-yellow-50 text-lg capitalize"> sell your car</p>
      </SingleTextImageView>

      <div className="flex text-lg mx-1 justify-center p-5">
        {/* //todo this is the form starting */}
        <form
          className=" gap-10 px-4 py-6 text-lg bg-slate-50 w-[912px] border my-10 rounded-lg"
          id="form"
        >
          <div className="flex flex-col justify-center items-center  p-3">
            <h1 className=" text-red-500 font-bold text-xl uppercase ">
              Provide details about the car you want to sell
            </h1>
            <p className="capitalize text-base">
              the information you provide will helps us get back to you quicker
            </p>
          </div>

          {/* //todo this is the names */}
          <SectionStyle className=" flex justify-between ">
            {/* this is for first name */}
            <ItemStyle>
              <p>First Name: </p>
              <InputStyles type="text" placeholder="First Name" />
            </ItemStyle>

            {/* this is for last name */}
            <ItemStyle>
              <p>Last Name: </p>
              <InputStyles type="text" placeholder="Last Name" />
            </ItemStyle>
          </SectionStyle>

          {/* //todo this is the email */}
          <SectionStyle>
            <ItemStyle>
              <p>Email: </p>
              <InputStylesEmail
                id="email"
                type="email"
                placeholder="boyz@email.com"
                className="w-full"
              />
            </ItemStyle>
          </SectionStyle>

          <SectionStyle>
            <ItemStyle>
              <p>Location / Address: </p>
              <InputStylesEmail
                id="email"
                type="text"
                placeholder="Input Your Location , Address"
                className="w-full"
              />
            </ItemStyle>
          </SectionStyle>

          {/* //todo this is the phone number and Type of car  */}
          <SectionStyle className="flex justify-between mt-3">
            {/* this is for phone number */}
            <ItemStyle>
              <p>Phone:</p>
              <InputStyles type="tel" placeholder="000 000 000" />
            </ItemStyle>
            {/* this is for Type of car */}

            <ItemStyle>
              <p>Mark:</p>
              <InputStyles type="text" placeholder="Car mark" />
            </ItemStyle>
          </SectionStyle>

          {/* //todo this is the car specification  section */}
          <SectionStyle
            className="flex  flex-row justify-between mt-3"
            id="select-box"
          >
            <div>
              {/* this is for pick up location */}
              <ItemStyle>
                <p>Fuel Type:</p>
                <InputStyles type="text" placeholder="Fuel Type" />
              </ItemStyle>
              {/* this is for pick up date */}
              <ItemStyle>
                <p>Miles:</p>
                <InputStyles
                  type="number"
                  //   value={pickupDate}
                  //   onChange={(e) => setPickupDate(e.target.value)}
                  placeholder="Car Mileage"
                />
              </ItemStyle>
            </div>

            {/* this is for drop off */}
            <div>
              <ItemStyle>
                <p>Model:</p>

                <InputStyles
                  type="text"
                  //   value={pickupDate}
                  //   onChange={(e) => setPickupDate(e.target.value)}
                  placeholder="Car Model"
                />
              </ItemStyle>

              {/* this is for drop off date */}
              <ItemStyle>
                <p>Year:</p>
                <InputStyles
                  type="number"
                  //   value={dropOffDate}
                  //   onChange={(e) => setDropOffDate(e.target.value)}
                  placeholder="Car Year"
                />
              </ItemStyle>
            </div>
          </SectionStyle>

          <div>
            <ItemStyle className="p-2">
              <p className="text-base">Car Images</p>
              <input type="file" className=" text-sm " />
            </ItemStyle>
          </div>

          <div>
            <ItemStyle className="p-2">
              <p className="text-base">Price Range : Form</p>
              <input
                type="numbers"
                className=" text-sm border rounded-sm p-1"
                placeholder="Starting"
              />

              <p className="text-base mt-2">To : </p>
              <input
                type="numbers"
                className=" text-sm border rounded-sm p-1"
                placeholder=" End"
              />
            </ItemStyle>
          </div>

          <SectionStyle>
            <ItemStyle>
              <p>Vehicle Condition:</p>
              <textarea
                type="text"
                className="w-full border rounded-sm h-24"
              ></textarea>

              {/* <InputStylesEmail
                placeholder="boyz@email.com"
                className="w-full"
              /> */}
            </ItemStyle>
          </SectionStyle>

          <div className=" ml-3 flex align-center gap-2 text-base">
            <p>
              <input type="checkbox" className="h-4 w-4 hover:bg-slate-500 " />
            </p>
            <p>
              By clicking this button, you confirm our privacy terms and
              conditions
            </p>
          </div>

          <SectionStyle>
            <ItemStyle>
              <Button>submit</Button>
              {/* <button className=" bg-red-600 text-white px-3 py-1 uppercase hover:bg-stone-900  hover:text-white transition-all mr-auto rounded-md mt-3">
                book now
              </button> */}
            </ItemStyle>
          </SectionStyle>
        </form>
      </div>
    </>
  );
};
export default SellACar;
