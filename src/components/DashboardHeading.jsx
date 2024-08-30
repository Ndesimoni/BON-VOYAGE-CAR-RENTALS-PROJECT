function DashboardHeading() {
  return (
    <>
      <h1 className="font-bold text-xl mb-4 text-red-500">
        All My Rental Activities
      </h1>

      <ul className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] place-items-center mb-4">
        <li className="capitalize font-semibold text-lg">car type</li>
        <li className="capitalize font-semibold text-lg"> pick up location</li>
        <li className="capitalize font-semibold text-lg"> dropOff location</li>
        <li className="capitalize font-semibold text-lg"> pick up date</li>
        <li className="capitalize font-semibold text-lg"> dropOff date</li>
        <li className="capitalize font-semibold text-lg"> amount paid</li>
      </ul>
    </>
  );
}

export default DashboardHeading;
