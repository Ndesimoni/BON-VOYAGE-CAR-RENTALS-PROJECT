const itemArr = [
  {
    heading: "help",
    items: ["this", "that", "finger"],
  },
  {
    heading: "lang",
    items: ["mine", "them"],
  },
  {
    heading: "usd",
    items: ["those", "simoni"],
  },
  {
    heading: "home",
    items: ["boyz", "sabi pikin", "that", "the name"],
  },
];

function Nav_1Item({ activeItem, setActiveItem }) {
  function handleClick(index) {
    console.log(index);
    setActiveItem(index === activeItem ? null : index);
  }
  return (
    <div className="flex gap-8">
      {itemArr.map((item, i) => (
        <div key={i}>
          <h1 onClick={() => handleClick(i)}>{item.heading}</h1>
          {item.items.map(
            (el, elI) => activeItem === i && <li key={elI}>{el}</li>
          )}
        </div>
      ))}
    </div>
  );
}

export default Nav_1Item;
