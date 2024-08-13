import { useState } from "react";
import { carMakeList } from "../../../../DB/Local_Data_Base";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//todo this are styles
export const InputStyles = styled.input({
  border: "1px solid #d2d2d2",
  borderRadius: "5px",
  fontSize: "14px",
  padding: "0px 5px",
  width: "300px",
});

export const InputStylesEmail = styled.input({
  border: "1px solid #d2d2d2",
  borderRadius: "5px",
  fontSize: "14px",
  padding: "0px 5px",
});

export const Select = styled.select({
  border: "1px solid #d2d2d2",
  borderRadius: "3px",
  fontSize: "14px",
  padding: "5px ",
  width: "300px",
});

export const SectionStyle = styled.div({
  padding: "5px",
  lineHeight: "32px",
});

export const ItemStyle = styled.div({
  margin: "8px 5px",
});

export const Label = styled.label({
  display: "block",
});



function ReservationDropdown({ formData, handleChange }) {
  const [isChecked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    setChecked({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //changed the route path to params.
    navigate(`/All-vehicle-category/${formData.category}`, {
      state: formData,
    });
  };

  return (
    <div className="flex text-lg mx-1 absolute justify-center ">
      {/* //todo this is the form starting */}
      <form
        onSubmit={handleSubmit}
        className=" gap-10 px-4 py-6 text-lg bg-slate-50 w-[912px] border rounded-b-lg"
        id="form"
      >
        {/* //todo this is the names */}

        <SectionStyle className=" flex justify-between ">
          {/* this is for first name */}
          <ItemStyle>
            <Label>First Name: </Label>
            <InputStyles
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {/* <p className="text-red-500">{error}</p> */}
          </ItemStyle>

          {/* this is for last name */}
          <ItemStyle>
            <Label>Last Name: </Label>
            <InputStyles
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </ItemStyle>
        </SectionStyle>

        {/* //todo this is the email */}
        <SectionStyle>
          <ItemStyle>
            <Label>Email: </Label>
            <InputStylesEmail
              id="email"
              type="email"
              placeholder="boyz@email.com"
              className="w-full"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </ItemStyle>
        </SectionStyle>

        {/* //todo this is the phone number and Type of car  */}
        <SectionStyle className="flex justify-between mt-3">
          {/* this is for phone number */}
          <ItemStyle>
            <Label>Phone:</Label>
            <InputStyles
              type="number"
              placeholder="000 000 000"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </ItemStyle>
          {/* this is for Type of car */}

          <ItemStyle>
            <Label>Vehicle Category</Label>
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {carMakeList.map((items, index) => (
                <>
                  <option value="" disabled selected hidden>
                    Choose a vehicle category ...
                  </option>

                  <option key={index}>{items.category}</option>
                </>
              ))}
            </Select>
          </ItemStyle>
        </SectionStyle>

        {/* //todo this is the location  and dates  */}
        <SectionStyle
          className="flex  flex-row justify-between mt-3"
          id="select-box"
        >
          <div>
            {/* this is for pick up location */}
            <ItemStyle>
              <Label>Pick-up Location</Label>

              <Select
                name="pickUpLocation"
                value={formData.pickUpLocation}
                onChange={handleChange}
              >
                <option value="" disabled selected hidden>
                  Choose a pick up location...
                </option>
                <option>9500 Good Luck Road MD 20707</option>
                <option>
                  7900 International Drive Suit 300 Bloomington MN 55425
                </option>
                <option>
                  1959 for Campbell Blvd, #1 Clarksville, TN 37042
                </option>
                <option>
                  1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
                </option>
              </Select>
            </ItemStyle>

            {/* this is for pick up date */}
            <ItemStyle>
              <Label>Pick-up Date</Label>
              <InputStyles
                type="date"
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
              />
            </ItemStyle>
          </div>

          {/* this is for drop off */}
          <div>
            <ItemStyle>
              <Label>Drop Off Location</Label>
              <Select
                name="dropOffLocation"
                value={formData.dropOffLocation}
                onChange={handleChange}
              >
                <option value="" disabled selected hidden>
                  Choose a drop oof location...
                </option>

                <option>9500 Good Luck Road MD 20707</option>

                <option>
                  7900 International Drive Suit 300 Bloomington MN 55425
                </option>

                <option>
                  1959 for Campbell Blvd, #1 Clarksville, TN 37042
                </option>

                <option>
                  1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
                </option>
              </Select>
            </ItemStyle>

            {/* this is for drop off date */}
            <ItemStyle>
              <Label className="mb-2">Drop Off Date</Label>
              <InputStyles
                type="date"
                name="dropOffDate"
                value={formData.dropOffDate}
                onChange={handleChange}
              />
            </ItemStyle>
          </div>
        </SectionStyle>

        <div className="mb-3">
          <ItemStyle className="p-2">
            <p className="text-base p-1">Id Card:</p>
            <input type="file" className=" text-sm " />
          </ItemStyle>
        </div>

        <div className="mb-4">
          <ItemStyle className="p-2">
            <p className="text-base p-1">Age:</p>
            <input
              type="number"
              className=" text-sm border max-w-32 px-3 py-1 rounded-sm"
              placeholder=" 18 and Above"
            />
          </ItemStyle>
        </div>

        <div className=" ml-3 flex align-center gap-2">
          <div>
            <input
              type="checkbox"
              className="h-4 w-4 hover:bg-slate-500 "
              // value={formData.termConditions}
              checked={isChecked}
              name="termConditions"
              onChange={handleCheckBox}
            />
          </div>

          <Label>
            By clicking this button, you confirm our privacy terms and
            conditions
          </Label>
        </div>

        <SectionStyle>
          <ItemStyle>
            <button
              type="submit"
              className=" bg-red-600 text-white px-3 py-[1px] uppercase hover:bg-stone-900  hover:text-white transition-all mr-auto rounded-md mt-3"
            >
              Search
            </button>
          </ItemStyle>
        </SectionStyle>
      </form>
    </div>
  );
}

export default ReservationDropdown;
