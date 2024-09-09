import { carMakeList } from "../../../../DB/Local_Data_Base";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../../AppContext";

const SECONDS = 86400000;
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

function ReservationDropdown() {
  const { setReservationFormInfo, bookAsGuest } = useMyContext();

  const { register, handleSubmit, formState, reset, getValues } = useForm();

  const { errors } = formState;
  const navigate = useNavigate();

  const submitFormInputField = (data) => {
    navigate(`/All-vehicle-category/${data.category}`, { state: data });

    setReservationFormInfo({ ...data, bookAsGuest });

    reset();
  };

  const errorState = (error) => {
    console.log(error);
  };

  return (
    <div className="flex text-lg mx-1 absolute justify-center z-10">
      <form
        onSubmit={handleSubmit(submitFormInputField, errorState)}
        className=" gap-10 px-4 py-6 text-lg bg-slate-50 w-[912px] border rounded-b-lg"
        id="form"
      >
        {bookAsGuest ? (
          <>
            <SectionStyle className=" flex justify-between ">
              <ItemStyle>
                <Label>First Name: </Label>
                <InputStyles
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "this field is required",
                    },
                  })}
                />
                <p className="text-red-500">
                  {errors?.firstName && errors?.firstName?.message}
                </p>
              </ItemStyle>

              <ItemStyle>
                <Label>Last Name: </Label>
                <InputStyles
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "this field is required",
                    },
                  })}
                />
                <p className="text-red-500">
                  {errors?.lastName && errors?.lastName?.message}
                </p>
              </ItemStyle>
            </SectionStyle>

            <SectionStyle>
              <ItemStyle>
                <Label>Email: </Label>
                <InputStylesEmail
                  id="email"
                  type="text"
                  placeholder="boyz@email.com"
                  className="w-full"
                  {...register("email", {
                    require: "this field is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "email not valid, input a valid email ",
                    },
                  })}
                />
                <p className="text-red-500">
                  {errors?.email && errors?.email?.message}
                </p>
              </ItemStyle>
            </SectionStyle>
          </>
        ) : null}

        <SectionStyle className="flex justify-between mt-3">
          {/* this is for phone number */}
          <ItemStyle>
            <Label>Phone:</Label>

            <InputStyles
              type="tel"
              placeholder="000 000 000"
              {...register("phone", {
                required: "This field is required",
                validate: (value) => {
                  const phoneRegex = /^\d{8,}$/; // Matches a 10-digit phone number
                  return (
                    phoneRegex.test(value) || "Invalid phone number format"
                  );
                },
              })}
            />

            <p className="text-red-500">
              {errors?.phone && errors?.phone?.message}
            </p>
          </ItemStyle>
          {/* this is for Type of car */}

          <ItemStyle>
            <Select
              {...register("category", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
            >
              <option value="">choose a vehicle category</option>
              {carMakeList.map((items, index) => (
                <option key={index}>{items.category}</option>
              ))}
            </Select>
            <p className="text-red-500">
              {errors?.category && errors?.category?.message}
            </p>
          </ItemStyle>
        </SectionStyle>
        {/* //todo this is the location  and dates  */}
        <SectionStyle
          className="flex  flex-row justify-between mt-3"
          id="select-box"
        >
          <div>
            <ItemStyle>
              <Select
                {...register("pickUpLocation", {
                  required: {
                    value: true,
                    message: "this field is required",
                  },
                })}
              >
                <option value="">Choose a pick-up location</option>
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

              <p className="text-red-500">
                {errors?.pickUpLocation && errors?.pickUpLocation?.message}
              </p>
            </ItemStyle>

            {/* this is for pick up date */}
            <ItemStyle>
              <Label>Pick-up Date</Label>
              <InputStyles
                type="date"
                {...register("pickUpDate", {
                  required: {
                    value: true,
                    message: "this field is required",
                  },
                })}
              />
              <p className="text-red-500">
                {errors?.pickUpDate && errors?.pickUpDate?.message}
              </p>
            </ItemStyle>

            {/* this is for pick up location */}
            <ItemStyle>
              <Select
                {...register("stateOfOperation", {
                  required: {
                    value: true,
                    message: "this field is required",
                  },
                })}
              >
                <option value=""> chose a state of operation</option>
                <option value="marryland"> marryland</option>
                <option value="minnesota"> minnesota</option>
                <option value="tennessee"> tennessee</option>
                <option value="virginia"> virginia</option>
              </Select>

              <p className="text-red-500">
                {errors?.stateOfOperation && errors?.stateOfOperation?.message}
              </p>
            </ItemStyle>
          </div>

          {/* this is for drop off */}
          <div>
            <ItemStyle>
              <Select
                {...register("dropOffLocation", {
                  required: {
                    value: true,
                    message: "this field is required",
                  },
                })}
              >
                <option value="">Choose drop off location</option>
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
              <p className="text-red-500">
                {errors?.dropOffLocation && errors?.dropOffLocation?.message}
              </p>
            </ItemStyle>

            {/* this is for drop off date */}
            <ItemStyle>
              <Label className="mb-2">Drop Off Date</Label>
              <InputStyles
                type="date"
                {...register("dropOffDate", {
                  required: "This field is required",
                  validate: (value) =>
                    (new Date(value).getTime() -
                      new Date(getValues().pickUpDate).getTime()) /
                      SECONDS <=
                      0 && "drop off date cant't be a day before pickup date",
                })}
              />
              <p className="text-red-500">
                {errors?.dropOffDate && errors?.dropOffDate?.message}
              </p>
            </ItemStyle>
          </div>
        </SectionStyle>

        <div className="mb-3">
          <ItemStyle className="p-2">
            <label className="text-base mr-2">Id Card:</label>
            <input
              type="text"
              className=" text-base border px-1 py-2 focus:outline-none"
              placeholder="55555-9999-4444"
              {...register("userNationalId", {
                required: "this field is required",
                pattern: {
                  //regex for US id.
                  //eg: 5555-4563-3423
                  value: /^\d{5}-\d{4}-\d{4}$/,
                  message: "invalid national Id ",
                },
              })}
            />
          </ItemStyle>
          <p className="text-red-500">
            {errors?.userNationalId && errors?.userNationalId?.message}
          </p>
        </div>

        <div className="mb-4">
          <ItemStyle className="p-2">
            <p className="text-base p-1">Age:</p>
            <input
              type="number"
              className=" text-sm border max-w-32 px-3 py-1 rounded-sm"
              placeholder=" 18 and Above"
              {...register("age", {
                required: "this field is required",
                min: {
                  value: 18,
                  message: "must be 18 and above",
                },
              })}
            />
            <p className="text-red-500">
              {errors?.age && errors?.age?.message}
            </p>
          </ItemStyle>
        </div>
        <div className=" ml-3 flex align-center gap-2">
          <div>
            <input
              type="checkbox"
              className="h-4 w-4 hover:bg-slate-500 "
              {...register("termConditions", {
                required: {
                  value: true,
                  message: "agree to the terms and condition",
                },
              })}
            />
            <p className="text-red-500">
              {errors?.termConditions && errors?.termConditions?.message}
            </p>
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
