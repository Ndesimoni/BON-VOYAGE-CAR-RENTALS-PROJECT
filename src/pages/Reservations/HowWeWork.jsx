import Button from "../../components/ui/Reuseable_Ui/Button";
import HowWeWorkContainSection from "../../components/ui/Reuseable_Ui/HowWeWorkContainSection";
import ImageTextView from "../../components/ui/Reuseable_Ui/ImageTextView";

function HowWeWork() {
  return (
    <section className="flex justify-center items-center">
      <div className="w-[1200px] flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col max-w-4xl ">
          <h1 className="font-bold text-3xl capitalize text-center my-6">
            Rent your favorite car with bon voyage car rentals
          </h1>
          <p className="text-center">
            We provide airport service, intercity car rentals, short rentals,
            and many other cars renting services. Book your car while following
            the steps below:
          </p>
        </div>

        <HowWeWorkContainSection
          h2="Open our website"
          step="step 1"
          image="/how-we-work-1.jpg"
          alt="tracking image"
          order="order-last"
        >
          <p>
            We provide airport service, intercity car rentals, short rentals,
            and many other cars renting services. Book your car while following
            the steps below:
          </p>
        </HowWeWorkContainSection>

        <HowWeWorkContainSection
          h2=" A driver match with the passenger"
          step="step 2"
          image="/how-we-work-2.jpg"
          alt="tracking image"
          order="order-first"
        >
          <p>
            When you, the passenger&apos; search for the nearby car&apos;s
            availability, the drivers get notified about the search and are
            asked to accept the request. The nearby driver accepts your request,
            and you are notified about it. When the passenger is around
          </p>
        </HowWeWorkContainSection>

        {/* //todo this is the image text view section */}
        <ImageTextView
          backgroundImage1="url(/about-1.jpg)"
          backgroundImage2="url(/home.jpg)"
          h3=" Drive your way to success"
          heading="Trust Bon Voyage to give you the best traveling experience"
          description="Travel is a new way of perceiving your life. It's a good passion to build it. It's a good passion to build it. Unsafe travel is a lesson for life, while safe travel is a lifetime memory. Rent a BonVoyage Car Rental."
        >
          <h3 className="text-red-500 text-3xl font-bold mb-4">
            A rental car for comfortable <br />
            and easy traveling
          </h3>
          <p className="text-white text-xl mb-8">
            BonVoyage Car Rental provides hygienic, responsible,
            <br />
            and certified cab drivers to drive you safely to your destination.
          </p>
          <button className="text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all">
            Rent a car
          </button>
          <button className="ml-10 text-white bg-stone-900 uppercase py-2 px-4 border border-white hover:opacity-50 transition-all">
            Vehicle collection
          </button>
        </ImageTextView>

        <HowWeWorkContainSection
          h2="   The driver picks up the passenger"
          step="step 3"
          image="/how-we-work-3.jpg"
          alt="tracking image"
          order="order-last"
        >
          <p>
            Once the driver reaches your location, the passenger and driver
            verify each other through car numbers and OTP. Once done, the driver
            picks you up and starts the journey towards the destination
            mentioned above.
          </p>
        </HowWeWorkContainSection>

        <HowWeWorkContainSection
          h2="Passenger reached the destination"
          step="step 4"
          image="/how-we-work-4.jpg"
          alt="tracking image"
          order="order-first"
        >
          <p>
            With the help of the digital map; the driver reaches the destination
            mentioned by the passenger within the specified time.
          </p>
        </HowWeWorkContainSection>

        <HowWeWorkContainSection
          h2="Leave reviews & ratings"
          step="step 5"
          image="/how-we-work-5.jpg"
          alt="tracking image"
          order="order-last"
        >
          <p>
            With the help of the digital map; the driver reaches the destination
            mentioned by the passenger within the specified time.
          </p>
        </HowWeWorkContainSection>

        <div className="w-4/5 mx-auto mb-12 ">
          <h1 className="font-semibold text-xl mb-5 text-red-500">
            Rent with us today
          </h1>
          <p className="mb-7">
            Ready the have the best driving experience to your destination? Rent
            your car and get the best on-road trip with Bon voyages car rentals
          </p>

          <Button>rent with us now</Button>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
