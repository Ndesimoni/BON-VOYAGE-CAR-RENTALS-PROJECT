const RideShareReservationAndMoreContain = ({
  children,
  h3,
  p1,
  p2,
  p3,
  p4,
}) => {
  return (
    <div className="w-4/5 mx-auto px-4 text-lg">
      <section>
        <div className="last-text uppercase">{p1}</div>

        <h1 className="sub-heading capitalize">{h3}</h1>
        <p className="text">{p2}</p>
        <p className="text">{p3}</p>
        <p className="last-text">{p4}</p>
      </section>

      <div>{children}</div>
    </div>
  );
};

export default RideShareReservationAndMoreContain;
