function Offerings() {
  return (
    <div className="w-11/12 mx-auto text-lg">
      <h1 className="text-3xl  text-red-500 mt-10 mb-2">
        Bon Voyage Car Rentals
      </h1>
      <p className="mb-4  italic">Pathway to a {"safer journey"}</p>
      <div>
        <div className="grid grid-cols-2 items-center justify-between mb-20">
          <div>
            <p className="mb-4">
              Bon Voyages Car Rentals is a whole package of technology that
              benefit and entertain you in your journey. We are a company with a
              mission to provide a safer road journey and restructure the world
              with better movement. The technologies that help us to maintain
              multi-sided platforms to match our consumers looking for car
              rentals.
            </p>
            <p className="mb-6">
              While on the journey with the BonVoyage, we provide our passengers
              with various facilities like free wifi, music of choice, certified
              drivers with excellent driving skills, and many more. Moreover, we
              keep our passengers’ safety our top priority, so we work for it
              the most. Therefore, we offer our passengers safe cars that are
              completely clean and hygienic and have the facility of rentals and
              outstation travel.
            </p>
            <button className="uppercase font-semibold text-white bg-red-500 px-3 py-2 ml-2 rounded-md hover:bg-red-100 hover:text-red-600 transition-all">
              book now
            </button>
          </div>

          <img
            src="https://plus.unsplash.com/premium_photo-1661405462154-ce23978ccf0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJpdmluZyUyMGFuZCUyMGxpc3RlbmluZyUyMHRvJTIwbXVzaWMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="features-image"
            className="w-4/5 ml-auto"
          />
        </div>
        <div className="px-4">
          <p className="mb-6">
            Besides the above-described features, we provide our passengers with
            the following mentioned unique facility while traveling with us:
          </p>
          <h1 className="text-xl text-red-500 mb-2">
            An early pay for better savings
          </h1>
          <p className="mb-10">
            to enjoy heavy discounts,pre-rent a car for a planned trip from Bon
            Voyage Car Rental in Lanham . When you select a prepaid service like
            a pre-rented car, you save up tp 35% on your bookings. Moreover, one
            prepaid car rental can bring heavy discounts on your next booking,
            so{" "}
            <button className="text-red-500 font-semibold hover:underline">
              {" "}
              book now
            </button>
          </p>

          <h1 className="text-red-500 italic text-xl mb-4">
            To Make Your Drive Best Is Our Responsibility
          </h1>
          <p>
            Get around the city or go on weekend, long-day outings with complete
            convenience, reliability, and comfort provided by us. Book us for a
            budget car rental in Lanham with a hassle-free experience.
          </p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Offerings;
