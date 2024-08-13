import DashboardItems from "./DashboardItems";

const data = [
  {
    carType: "mecerdes",
    pickLocation: "7900 International Drive Suit 300 Bloomington MN 55425",
    dropLocation: "7900 International Drive Suit 300 Bloomington MN 55425",
    pickUp: "12 july 2024 ",
    dropOff: "19 july 2024",
    amount: 200,
  },
];
function UserDashboard() {
  const user = localStorage.getItem("userData");

  if (!user)
    return <p>You are not signed in. Sign in to see your rental activities</p>;
  return (
    <div className="p-4">
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
      {data.map((item, i) => (
        <DashboardItems key={i} item={item} />
      ))}
    </div>
  );
}

export default UserDashboard;
