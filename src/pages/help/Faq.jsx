import styled from "styled-components";
import HelpInfo from "./FaqInfo";
import { IoCarSportOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Main = styled.main`
  width: 70%;
  margin: 4rem auto;
  gap: 4rem;
`;

function Faq() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[250px] relative"
        style={{ backgroundImage: "url(/help.jpg)" }}
      >
        <div className="text-red-50 absolute top-40 left-6">
          <h1 className="font-semibold text-xl">Having trouble?</h1>
          <p>{"We're"} here to help</p>
        </div>
      </div>

      <Main>
        <HelpInfo
          icon={<IoCarSportOutline />}
          iconHeading="Booking and Payment"
          question1="How can i book a rental car with Bon voyage car rentals"
          text1=" Our car renting process is a simple and secure way to reach your
          destinations. First, click on the sign-up button and sign up with
          your email id. Once sign-up is completed, you are asked to sign in
          to the portal, and then you can rent your favorite car with
          BonVoyage Car Rentals. After completing the renting steps, we will
          send you the confirmation message with your itinerary number. We
          will also send you the trip details, like your car's number,
          journey route, and an estimated time to reach your destination.
          Moreover, we will also inform you about the driver, his driving
          license details, health conditions, and the car used for your
          service. "
          question2="How can I pay my journey fare with BonVoyage Car Rentals?"
          text2=" BonVoyage Car Rentals provides you with online and offline cash
          payment methods. You can pay using a debit or credit card or even
          in cash. We appreciate it if you pay online for safety."
        />
        <HelpInfo
          icon={<MdOutlineCancelPresentation />}
          iconHeading="cancelation & refund"
          question1="
          What if i have made the wrong booking or want to cancel my ride?"
          text1=" Sometimes things happen without prior knowledge. So, if you are
          caught up in something while renting a car, you do not have to pay
          the bill. Instead, you can just go to the My Trips option and select
          the cancel button to cancel your trip without paying the extra bill. "
          question2="will i have to pay extra charges if i cancel my ride?"
          text2="For an instant, there can be several reasons why you want to cancel
          a ride. So we do not ask you to pay a fine when you cancel a ride,
          but if the driver has already reached your doorsteps or is in the
          range of 300 meters from your pick-up point, you will need to pay a
          small amount for the driver."
        />
        <HelpInfo
          icon={<IoLocationOutline />}
          iconHeading="Wrong or change location"
          question1="Can i change my destination's location during an ongoing ride"
          text1="Yes, you have the right to change your destination's location
          during an ongoing journey. However, you may be charged extra if the
          location is far from the previous location. "
          question2="what if i get stuck at the wrong drop-off location?"
          text2="  We at BonVoyage Car Rentals care about your security, so we do not
          leave you in an unfamiliar place. However, if a situation occurs
          like this, you can ask our driver not to end the ride, drop you off
          at the correct location, and pay the metered amount to the driver."
        />
        <HelpInfo
          icon={<AiOutlineSafetyCertificate />}
          iconHeading="Bon Voyage Safety"
          question1="What to do if i find myself stuck in a car at a silent place with the
          rented car driver"
          text1=" BonVoyage Car Rental hires all the tested and certified car drivers
          you can trust while you travel, even if stuck in uncertain
          circumstances. However, if you get stuck in our car with our driver,
          we have a 24/7 customer support system to help you anytime. Call us
          on our emergency contact number, and we will reach you the earliest. "
          question2=" Can we share our cab details with the cab concerned person?"
          text2="Yes, you have the complete right to share your travel details with
          anyone you wish. We give you the confirmation link on your mobile
          number along with the current location status, which is easily
          shareable in the form of messages. When you travel by BonVoyage Car
          Rentals, your safety is our responsibility."
        />
      </Main>
    </div>
  );
}

export default Faq;
