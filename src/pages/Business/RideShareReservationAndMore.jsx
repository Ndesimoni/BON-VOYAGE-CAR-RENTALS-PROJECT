import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import { useRideAndRentToOwn } from "../../lib/UrlCustomHook";
import RideShareReservationAndMoreContain from "./RideShareReservationAndMoreContain";

const RideShareReservationAndMore = () => {
  const { shareRide, renToOwn } = useRideAndRentToOwn();
  return (
    <div>
      {/* //todo ths is the Ride Share  Contain  section  */}
      {shareRide && (
        <div>
          <SingleTextImageView image="url(/help.jpg)">
            <p> Ride Share With Bonvoyage </p>
          </SingleTextImageView>

          {/* //todo Ride Share  Contain */}
          <RideShareReservationAndMoreContain
            h3="How Ride Share Works"
            p1="No matter if you are a traveler looking to explore the city or a
                local needing a temporary vehicle. You may find numerous commuting
                options with bonevoyage, Below are some of the highly-rated car"
            p2="Bon Voyage is the first on the list of the best car rental
                companies. For all budding travelers, Bon Voyage is a trustworthy
                choice. The company features an array of vehicles, including
                economy cars, SUV cars, and premium cars."
            p3="Moreover, past customers had a great experience working with Bon
                Voyage. Many were impressed by their simple, secure car renting
                process and quick response. Some also appreciated the
                pick-and-drop and the comfort experienced throughout the journey."
            p4="So, if you want to explore new places and make a memorable
                excursion, Bon Voyage is the one-stop destination. Get the perfect
                car and take the best advantage of your next trip."
          >
            <p className="  sub-heading">Contact information</p>

            <p className="text flex gap-4">
              <span>Call At:</span>
              <strong className="text-red-500 ">202 696 6487</strong>{" "}
            </p>
            <p className="text flex gap-4">
              <span>Mail At: </span>
              <strong className="text-red-500 ">
                Bonvoyagecarrental22@gmail.com
              </strong>
            </p>
            <p className="text  flex gap-4">
              <span>Address:</span>
              <strong className="text-red-500  ">
                9500 Annapolis Road Suite B5 Lanham MD 20706
              </strong>
            </p>
            <p className="last-text flex gap-4">
              <span>Website:</span>
              <strong className="text-red-500">
                https://bonvoyagecarrentals.com/
              </strong>
            </p>
          </RideShareReservationAndMoreContain>
        </div>
      )}

      {renToOwn && (
        <div>
          {" "}
          <SingleTextImageView image="url(/help.jpg)">
            <h1> Rent To Own With Bonvoyage </h1>
          </SingleTextImageView>{" "}
          {/* //todo Rent to own Contain */}
          <RideShareReservationAndMoreContain
            h3="How rent to own Works"
            p1="No matter if you are a traveler looking to explore the city or a
                local needing a temporary vehicle. You may find numerous commuting
                options with bonevoyage, Below are some of the highly-rated car"
            p2="Bon Voyage is the first on the list of the best car rental
                companies. For all budding travelers, Bon Voyage is a trustworthy
                choice. The company features an array of vehicles, including
                economy cars, SUV cars, and premium cars."
            p3="Moreover, past customers had a great experience working with Bon
                Voyage. Many were impressed by their simple, secure car renting
                process and quick response. Some also appreciated the
                pick-and-drop and the comfort experienced throughout the journey."
            p4="So, if you want to explore new places and make a memorable
                excursion, Bon Voyage is the one-stop destination. Get the perfect
                car and take the best advantage of your next trip."
          >
            <p className="  sub-heading">Contact information</p>

            <p className="text flex gap-4">
              <span>Call At:</span>
              <strong className="text-red-500 ">202 696 6487</strong>{" "}
            </p>
            <p className="text flex gap-4">
              <span>Mail At: </span>
              <strong className="text-red-500 ">
                Bonvoyagecarrental22@gmail.com
              </strong>
            </p>
            <p className="text  flex gap-4">
              <span>Address:</span>
              <strong className="text-red-500  ">
                9500 Annapolis Road Suite B5 Lanham MD 20706
              </strong>
            </p>
            <p className="last-text flex gap-4">
              <span>Website:</span>
              <strong className="text-red-500">
                https://bonvoyagecarrentals.com/
              </strong>
            </p>
          </RideShareReservationAndMoreContain>
        </div>
      )}
    </div>
  );
};

export default RideShareReservationAndMore;
