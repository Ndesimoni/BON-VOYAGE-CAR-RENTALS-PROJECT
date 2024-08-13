function DashboardItems({ item }) {
  return (
    <ul className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] mb-1 place-items-center">
      <li>{item.carType}</li>
      <li>{item.pickLocation}</li>
      <li>{item.dropLocation}</li>
      <li>{item.pickUp}</li>
      <li>{item.dropOff}</li>
      <li>$ {item.amount}</li>
    </ul>
  );
}

export default DashboardItems;
