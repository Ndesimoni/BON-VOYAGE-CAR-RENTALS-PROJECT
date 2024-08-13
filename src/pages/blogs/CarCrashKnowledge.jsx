import { useState } from "react";

function CarCrashKnowledge() {
  const [firstQuest, setFirstQuest] = useState(false);
  const [secondQuest, setSecondQuest] = useState(true);

  return (
    <div className="text-lg w-11/12 mx-auto">
      <div className="grid grid-cols-2 items-center gap-10 mt-8 mb-20">
        <div>
          <h1 className="text-red-500 text-2xl mb-4 font-semibold">
            Things to know if you crash a rental car
          </h1>

          <p className="text">
            Car rental services are becoming more popular every day because of
            the convenience and affordability they provide. No matter if you
            want a limo, sedan, or economical car, you can have it by filling
            out a small form provided by car rental companies.
          </p>
          <p className="text">
            However, with the benefits, there are also various doubts that come
            to
            {"one's"} mind, especially when {"it's"} their first time renting a
            car. The common doubts include what will happen if you mistakenly
            crash a rental car.{" "}
          </p>
          <p className="text">
            Dealing with a rental car accident is almost the same as handling
            your own car in an accident. But it involves several added levels of
            paperwork and complexities that one should prepare for. If you are
            clueless about what happens if you crash a rental car and how to
            tackle it, here we have compiled full information to help you deal
            with it.{" "}
          </p>
        </div>

        <img src="/crash-image.jpg" alt="car crash" />
      </div>
      <h1 className="intro-heading">Things to do after a car crash</h1>
      <p className="last-text">
        A car Crash is surely a very frustrating situation to be in. It can
        damage and hurt both the car and the people inside it. But not panicking
        and keeping your calm is the first thing one can do in such a situation.{" "}
        {"Let's"} find out the ways and methods to tackle such situations
        sensibly.{" "}
      </p>
      <h2 className="sub-heading">Exchange contact data</h2>
      <p className="text">
        Once you determine that the situation is safe now, exchange the contact
        number and insurance details with the other car owner if involved. The
        details should be shared comprises:
      </p>

      <ul className="list-box">
        <li>Name of the car owner</li>
        <li>Home address</li>
        <li>Contact number & email </li>
        <li>Insurance Provider & Policy Number</li>
        <li>
          {"Driver's"} License number, {"vehicle's"} license plate and vehicle
          registration details
        </li>
        <li>Collect the contact details of the witnesses, if any</li>
      </ul>
      <p className="text">
        Also, keep in mind that it will be great for you if you {"won't"} admit
        your fault for the car crash while interacting with other parties or the
        police. Even if you think that your rental car crashed because of your
        fault, just {"don't"} admit it, as it can use against you in further
        procedures.
      </p>
      <p className="last-text">
        Also doing so, your insurance company can deny giving you protection
        against the damages. Be cautious interacting with other car drivers, and
        do not sign any paper offered by them. Also, do not mention to the other
        party that your car is rented, as hearing it, others can place the blame
        on you.{" "}
      </p>

      <h2 className="sub-heading">Call your rental company</h2>
      <p className="last-text">
        After collecting every detail of the accident that occurred, {"it's"}{" "}
        time to contact your rental company and inform them about it. Go through
        your rental agreement and dial the helpline number mentioned in the
        form. Your rental company might ask you to fill out a report consisting
        of all the information you have already collected.
      </p>
      <h2 className="intro-heading">What about rental car insurance</h2>
      <p className="text">
        Whenever you visit any car rental company, the provider asks you to take
        rent coverage with it. People often decline to take such coverage to
        save themselves some bucks. But they {"don't"} know how important these
        coverages can be in specific situations. So next time you visit a car
        rental, reconsider taking insurance coverage with it. You can ask for
        different insurance policies that rental car companies offer, including
        liability insurance, personal accident insurance, collision coverage,
        and more.{" "}
      </p>
      <p className="last-text">
        These coverages might cost you a bit initially but also will be your
        savior when insurance cannot cover damage or the other party is
        uninsured. Be cautious while reading the rental agreement form and check
        if the coverage matches your needs.
      </p>

      <h2 className="sub-heading">Primary Insurance</h2>
      <p className="last-text">
        Primary insurance is a type of insurance that the majority kicks in
        first just after you file a claim. As long as you pay the premium, few
        insurance policies offer full coverage in a mishap. It means they cover
        both the damage to your rental car and the other car that you hit if the
        fault is on you.{" "}
      </p>

      <h2 className="sub-heading">Who is at fault in the car crash</h2>
      <p className="last-text">
        After a car crash, it is important to figure out a liable party whose
        fault leads to the accident. It will help detect people that will pay
        for car damage and a {"person's"} treatment if anyone has been hurt in
        an accident.
      </p>
      <h2 className="sub-heading">Another party is liable for the cause</h2>
      <p className="last-text">
        If you are not liable for the accident and the other party is, then they
        must pay for all the loss. This loss includes damage to the rental car
        and a {"person's"} injury if anyone is hurt. In such a situation, the
        rental car damage will be covered by his insurance. Also, remember that
        rental car companies do not offer cost coverage for deluxe or luxurious
        rental cars.{" "}
      </p>
      <h2 className="sub-heading">
        How To Prepare For A Potential Rental Car Accident?
      </h2>
      <p className="last-text">
        Accidents are very unpleasant situations that can inconvenience you on
        your way and ruin your trip. But there are a few measures that, if taken
        priorly, can help you deal with the potential accident.{" "}
      </p>
      <h2 className="sub-heading">Buy rental car insurance</h2>
      <p className="last-text">
        If your current insurance policy does not include car rentals and you
        are not willing to buy insurance from the rental company, you can choose
        another way too. You can buy rental car insurance from a third-party
        rental car insurance company.
      </p>

      <h1 className="text-red-500 text-2xl mb-4 ">
        Frequently Asked Questions
      </h1>

      <p
        className="text-red-500 mb-2 cursor-pointer"
        onClick={() => setFirstQuest((cur) => !cur)}
      >
        <span className="mr-8">{firstQuest ? "-" : "+"}</span>
        <span>How can a lawyer help in a car accident?</span>
      </p>
      {firstQuest && (
        <p className=" w-4/5 ml-12 mb-8">
          No matter how severe the accident is and how badly you are stuck in a
          situation, a car accident lawyer always has your back. The lawyer
          helps you deal with the situation and walk away with the best possible
          results. An experienced attorney can also help you get compensation if
          you are injured. The car accident lawyer investigates well about the
          accident area and builds a strong case in your favor to help you
          escape any liability.Â Â{" "}
        </p>
      )}
      <p
        className="text-red-500 mb-2 cursor-pointer"
        onClick={() => setSecondQuest((cur) => !cur)}
      >
        <span className="mr-8">{secondQuest ? "-" : "+"}</span>
        <span>will the car insurance cover rental car damage?</span>
      </p>
      {secondQuest && (
        <p className=" w-4/5 ml-12 mb-20">
          Depending on the policy, your primary car insurance typically offers
          your rental car if you use it for private use. Any deductibles and
          coverage limits indicated as part of primary insurance coverage will
          also apply to the rental car.Â{" "}
        </p>
      )}
    </div>
  );
}

export default CarCrashKnowledge;
