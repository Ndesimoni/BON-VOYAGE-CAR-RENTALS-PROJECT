import { useForm } from "react-hook-form";
import {
  InputStyles,
  InputStylesEmail,
  ItemStyle,
  SectionStyle,
  Label,
  Select,
} from "../../components/Form/reservationForm/ReservationDropdown";

const CarDetailsFormNotFilled = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const submitIt = () => {
    console.log("hello world");
  };

  return (
    <form onSubmit={handleSubmit(submitIt)}>
      {/* <h1 className="font-extrabold text-4xl pb-5">Reserve a Vehicle</h1> */}

      <h1 className="font-extrabold text-3xl pb-5 capitalize p-2">
        Reserve a Vehicle
      </h1>

      <div className="px-[9px]">
        <label className="flex items-center justify-between ">
          <p className="font-semibold text-sm ">
            Pic-up & Return Location ( City, State or Airport )*
          </p>
          <span className="text-red-600 italic"> * Required Field</span>
        </label>

        {/* //todo  this is the state operation section */}
        <select
          id=""
          className="w-full h-10 border-gray-200 border placeholder:pl-4 px-5 appearance-none rounded-sm"
          type="text"
          placeholder="Click to start a reservation"
        >
          <option value="" disabled selected hidden>
            Choose a state of operation...
          </option>
          <option value="marryland"> marryland</option>
          <option value="minnesota"> minnesota</option>
          <option value="tennessee"> tennessee</option>
          <option value="virginia"> virginia</option>
        </select>
      </div>

      {/* //todo this is the names */}

      <SectionStyle className=" flex justify-between ">
        {/* this is for first name */}
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

        {/* this is for last name */}
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

      {/* //todo this is the email */}
      <SectionStyle>
        <ItemStyle>
          <Label>Email: </Label>
          <InputStylesEmail
            id="email"
            type="email"
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

      {/* //todo this is the phone number and Type of car  */}
      <SectionStyle className="flex justify-between mt-3">
        {/* this is for phone number */}
        <ItemStyle>
          <Label>Phone:</Label>
          <InputStyles
            type="number"
            placeholder="000 000 000"
            {...register("phone", {
              required: "This field is required",
              validate: (value) => {
                const phoneRegex = /^\d{8,}$/; // Matches a 10-digit phone number
                return phoneRegex.test(value) || "Invalid phone number format";
              },
            })}
          />
          <p className="text-red-500">
            {errors?.phone && errors?.phone?.message}
          </p>
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
              {...register("pickUpLocation", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
            >
              <option value="" disabled selected hidden>
                Choose a pick up location...
              </option>
              <option>9500 Good Luck Road MD 20707</option>
              <option>
                7900 International Drive Suit 300 Bloomington MN 55425
              </option>
              <option>1959 for Campbell Blvd, #1 Clarksville, TN 37042</option>
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
        </div>

        {/* this is for drop off */}
        <div>
          <ItemStyle>
            <Label>Drop Off Location</Label>
            <Select
              {...register("dropOffLocation", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
            >
              <option value="" disabled selected hidden>
                Choose a drop oof location...
              </option>

              <option>9500 Good Luck Road MD 20707</option>

              <option>
                7900 International Drive Suit 300 Bloomington MN 55425
              </option>

              <option>1959 for Campbell Blvd, #1 Clarksville, TN 37042</option>

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
                required: {
                  value: true,
                  message: "this field is required",
                },
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
          <p className="text-base p-1">Id Card:</p>
          <input
            type="file"
            className=" text-sm "
            {...register("IdCard", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
          />
          <p className="text-red-500">
            {errors?.IdCard && errors?.IdCard?.message}
          </p>
        </ItemStyle>
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
          <p className="text-red-500">{errors?.age && errors?.age?.message}</p>
        </ItemStyle>
      </div>
      <button type="submit">click me</button>
    </form>
  );
};

export default CarDetailsFormNotFilled;

// import {
//     InputStyles,
//     InputStylesEmail,
//     ItemStyle,
//     SectionStyle,
//     Label,
//     Select,
// } from "../../components/Form/reservationForm/ReservationDropdown";

// const CarDetailsFormNotFilled = () => {
//     return (
//         <div>
//             {/* <h1 className="font-extrabold text-4xl pb-5">Reserve a Vehicle</h1> */}

//             <h1 className="font-extrabold text-3xl pb-5 capitalize p-2">
//                 Reserve a Vehicle
//             </h1>

//             <div className="px-[9px]">

//                 <label className="flex items-center justify-between ">
//                     <p className="font-semibold text-sm ">
//                         Pic-up & Return Location ( City, State or Airport )*
//                     </p>
//                     <span className="text-red-600 italic"> * Required Field</span>
//                 </label>

//                 {/* //todo  this is the state operation section */}
//                 <select
//                     id=""
//                     className="w-full h-10 border-gray-200 border placeholder:pl-4 px-5 appearance-none rounded-sm"
//                     type="text"
//                     placeholder="Click to start a reservation"

//                 // name="stateOfOperation"
//                 // value={formData.stateOfOperation}
//                 // onChange={handleChange}
//                 >
//                     <option value="" disabled selected hidden>
//                         Choose a state of operation...
//                     </option>
//                     <option value="marryland"> marryland</option>
//                     <option value="minnesota"> minnesota</option>
//                     <option value="tennessee"> tennessee</option>
//                     <option value="virginia"> virginia</option>
//                 </select>

//             </div>

//             {/* //todo this is the names */}

//             <SectionStyle className=" flex justify-between ">
//                 {/* this is for first name */}
//                 <ItemStyle>
//                     <Label>First Name: </Label>
//                     <InputStyles
//                         type="text"
//                         placeholder="First Name"
//                         name="firstName"
//                     //   value={formData.firstName}
//                     //   onChange={handleChange}
//                     />
//                     {/* <p className="text-red-500">{error}</p> */}
//                 </ItemStyle>

//                 {/* this is for last name */}
//                 <ItemStyle>
//                     <Label>Last Name: </Label>
//                     <InputStyles
//                         type="text"
//                         placeholder="Last Name"
//                         name="lastName"
//                     //   value={formData.lastName}
//                     //   onChange={handleChange}
//                     />
//                 </ItemStyle>
//             </SectionStyle>

//             {/* //todo this is the email */}
//             <SectionStyle>
//                 <ItemStyle>
//                     <Label>Email: </Label>
//                     <InputStylesEmail
//                         id="email"
//                         type="email"
//                         placeholder="boyz@email.com"
//                         className="w-full"
//                         name="email"
//                     //   value={formData.email}
//                     //   onChange={handleChange}
//                     />
//                 </ItemStyle>
//             </SectionStyle>

//             {/* //todo this is the phone number and Type of car  */}
//             <SectionStyle className="flex justify-between mt-3">
//                 {/* this is for phone number */}
//                 <ItemStyle>
//                     <Label>Phone:</Label>
//                     <InputStyles
//                         type="number"
//                         placeholder="000 000 000"
//                         name="phone"
//                     //   value={formData.phone}
//                     //   onChange={handleChange}
//                     />
//                 </ItemStyle>
//             </SectionStyle>

//             {/* //todo this is the location  and dates  */}
//             <SectionStyle
//                 className="flex  flex-row justify-between mt-3"
//                 id="select-box"
//             >
//                 <div>
//                     {/* this is for pick up location */}
//                     <ItemStyle>
//                         <Label>Pick-up Location</Label>

//                         <Select
//                             name="pickUpLocation"
//                         // value={formData.pickUpLocation}
//                         // onChange={handleChange}
//                         // className="appearance-none"
//                         >
//                             <option value="" disabled selected hidden>
//                                 Choose a pick up location...
//                             </option>
//                             <option>9500 Good Luck Road MD 20707</option>
//                             <option>
//                                 7900 International Drive Suit 300 Bloomington MN 55425
//                             </option>
//                             <option>1959 for Campbell Blvd, #1 Clarksville, TN 37042</option>
//                             <option>
//                                 1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
//                             </option>
//                         </Select>
//                     </ItemStyle>

//                     {/* this is for pick up date */}
//                     <ItemStyle>
//                         <Label>Pick-up Date</Label>
//                         <InputStyles
//                             type="date"
//                             name="pickUpDate"
//                         // value={formData.pickUpDate}
//                         // onChange={handleChange}
//                         />
//                     </ItemStyle>
//                 </div>

//                 {/* this is for drop off */}
//                 <div>
//                     <ItemStyle>
//                         <Label>Drop Off Location</Label>
//                         <Select
//                             name="dropOffLocation"
//                         // value={formData.dropOffLocation}
//                         // onChange={handleChange}
//                         >
//                             <option value="" disabled selected hidden>
//                                 Choose a drop oof location...
//                             </option>

//                             <option>9500 Good Luck Road MD 20707</option>

//                             <option>
//                                 7900 International Drive Suit 300 Bloomington MN 55425
//                             </option>

//                             <option>1959 for Campbell Blvd, #1 Clarksville, TN 37042</option>

//                             <option>
//                                 1346 Old Bridge Road WoodBridge Ca 22192 Suite 101
//                             </option>
//                         </Select>
//                     </ItemStyle>

//                     {/* this is for drop off date */}
//                     <ItemStyle>
//                         <Label className="mb-2">Drop Off Date</Label>
//                         <InputStyles
//                             type="date"
//                         //   // name="dropOffDate"
//                         //   // value={formData.dropOffDate}
//                         //   // onChange={handleChange}
//                         />
//                     </ItemStyle>
//                 </div>
//             </SectionStyle>

//             <div className="mb-3">
//                 <ItemStyle className="p-2">
//                     <p className="text-base p-1">Id Card:</p>
//                     <input type="file" className=" text-sm " />
//                 </ItemStyle>
//             </div>

//             <div className="mb-4">
//                 <ItemStyle className="p-2">
//                     <p className="text-base p-1">Age:</p>
//                     <input
//                         type="number"
//                         className=" text-sm border max-w-32 px-3 py-1 rounded-sm"
//                         placeholder=" 18 and Above"
//                     />
//                 </ItemStyle>
//             </div>
//         </div>
//     );
// };

// export default CarDetailsFormNotFilled;
