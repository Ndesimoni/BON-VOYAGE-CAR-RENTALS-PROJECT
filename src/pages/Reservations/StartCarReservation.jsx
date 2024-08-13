import ReservationForm from "../../components/Form/reservationForm/ReservationForm";
import SingleTextImageView from "../../components/ui/Reuseable_Ui/SingleTextImageView";
import ExtraFeatures from "./ExtraFeatures";
import Safety from "@/components/ui/Safety";
// import ImageTextView from "../../components/ui/Reuseable_Ui/ImageTextView";

const LanHamMaryland = () => {
  return (
    <div>
      {/* //todo  this is the single image text view */}
      <SingleTextImageView image="url(/help.jpg)">
        <p> Drive your way to success</p>
      </SingleTextImageView>

      <div className="flex justify-center">
        <ReservationForm />
      </div>
      <ExtraFeatures />
      <Safety />
    </div>
  );
};

export default LanHamMaryland;
