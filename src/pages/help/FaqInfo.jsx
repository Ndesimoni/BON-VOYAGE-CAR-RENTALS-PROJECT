import { useState } from "react";

//props validation error
// corrected by going to the .eslintrc.cjs file and adding "react/prop-types":"off"
function HelpInfo({ icon, iconHeading, question1, text1, question2, text2 }) {
  const [showText, setShowText] = useState(false);
  return (
    <div className="mb-20 p-4">
      <div className="flex gap-4 items-center mb-6 text-red-700">
        {icon}

        <h1>{iconHeading}</h1>
      </div>

      <div
        className="flex gap-10 text-2xl font-semibold text-red-500 border-t-4 border-red-600 py-4 cursor-pointer"
        onClick={() => setShowText((show) => !show)}
      >
        <h1>{question1}</h1>
        <p className="ml-auto">{showText ? "-" : "+"}</p>
      </div>

      {showText && (
        <>
          <p className="text-lg">{text1}</p>
          <p className="font-bold mt-6 mb-2 text-red-400">{question2}</p>
          <p className="text-lg">{text2}</p>{" "}
        </>
      )}
    </div>
  );
}

export default HelpInfo;
