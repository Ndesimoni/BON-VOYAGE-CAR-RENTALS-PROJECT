function AboutUs() {
  return (
    <main>
      <div className="">
        <div
          className="bg-cover bg-center h-[300px] relative mb-10"
          style={{
            backgroundImage: "url(/about-1.jpg)",
          }}
        >
          <p className="top-1/2 absolute text-white text-3xl font-bold left-20">
            About us
          </p>
        </div>

        <div className=" ml-20 mb-20">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Trust Bon Voyage to give you the best traveling experience
          </h1>

          <p>
            Travel is a new way of perceiving your life. It&apos;s a good
            passion to build it. It&apos;s a good passion to build it. <br />
            Unsafe travel is a lesson for life, while safe travel is a lifetime
            memory. Rent a BonVoyage Car Rental.
          </p>
        </div>

        <div className="mb-20">
          <div
            className="h-[280px] relative bg-cover bg-center "
            style={{
              backgroundImage: "url(/about-man.jpg)",
            }}
          >
            <div className="absolute top-6 left-6">
              <h1 className="text-red-500 text-3xl font-bold mb-4">
                A rental car for comfortable <br />
                and easy traveling
              </h1>
              <p className="text-white text-xl mb-8">
                BonVoyage Car Rental provides hygienic, responsible,
                <br />
                and certified cab drivers to drive you safely to your
                destination.
              </p>
              <button className="text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all">
                Rent a car
              </button>
              <button className="ml-10 text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all">
                Vehicle collection
              </button>
            </div>
          </div>
        </div>

        <section className="flex flex-col px-10 ">
          <div className="grid grid-cols-2 items-center mb-20 justify-between">
            <img src="/ab-woman.png" alt="woman-driving" />

            <div>
              <h1 className="text-red-500 font-semibold text-xl mb-2">
                A company that is imperishable
              </h1>
              <p>
                BonVoyage Car Rental is a company with long-term goals and
                full-proof plans. We take steps to help us sustain ourselves in
                the future for a more extended period, whether economically or
                environmentally. While every step is taken considering how it
                will affect our stability in the market, all the cars we offer
                are sustainable towards the environment. We, a growing car
                rental company with the mission to expand globally, take it as
                our responsibility to dive assertively into the climatic
                challenge. Moreover, we handle the environmental situation by
                adding more and more environmentally friendly, electric, and
                zero-emission cars to our list. Thus, BonVoyage Car Rental is a
                sustainable car rental company that you can rely entirely on
                upon.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-between items-center mb-20 ">
            <div>
              <h1 className="text-red-500 font-semibold text-xl mb-2">
                We define mobility
              </h1>
              <p>
                While one of the fastest-growing car rental companies, BonVoyage
                Car Rental is all set to redefine mobility solutions globally.
                We connect you, the clients, to the certified drivers and bring
                a wide range of cars to find the best one that suits your needs.
                Moreover, we are working towards bringing more electric cars
                into our fleet, aiming to enable millions of livelihood
                opportunities. Further, our redefining mobility also covers the
                efficiency in mobility from airport to destination or vice versa
                and even intercity rides. Thus, BonVoyage is the company formed
                to bring accessible and convenient transportation to
                everyone&aps;s life.
              </p>
            </div>

            <img src="ab-men.png" alt="two men" className="ml-20" />
          </div>

          <div className="grid grid-cols-2 justify-between items-center mb-20">
            <img src="/ab-seat-belt.png" alt="man-in-car" />
            <div>
              <h1 className="text-red-500 font-semibold text-xl mb-2">
                Your safety is our Priority
              </h1>
              <p>
                While one of the fastest-growing car rental companies, BonVoyage
                Car Rental is all set to redefine mobility solutions globally.
                We connect you, the clients, to the certified drivers and bring
                a wide range of cars to find the best one that suits your needs.
                Moreover, we are working towards bringing more electric cars
                into our fleet, aiming to enable millions of livelihood
                opportunities. Further, our redefining mobility also covers the
                efficiency in mobility from airport to destination or vice versa
                and even intercity rides. Thus, BonVoyage is the company formed
                to bring accessible and convenient transportation to
                everyone&apos;s life.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;
