import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { handleScroll } from "./scroll";

function Footer() {
  function scroll(e) {
    if (e.target.parentElement.closest("ul")) handleScroll();
  }

  return (
    <footer className="">
      <div className="flex justify-between w-11/12 mx-auto" onClick={scroll}>
        <div>
          <h3 className="text-lg font-semibold mb-2">Our vehicle collection</h3>
          <ul id="car">
            <li>
              <Link
                to="/our-vehicle-collection"
                className="hover:text-red-500 hover:underline"
              >
                car collection
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text- mb-2">Customer service</h3>
          <ul id="service" className="flex flex-col gap-4">
            <li className="hover:text-red-500 hover:underline">
              <Link to="/cancel-booking">Help</Link>
            </li>
            <li className="hover:text-red-500 hover:underline">
              <Link to="/about-us">About us</Link>
            </li>
            <li className="hover:text-red-500 hover:underline">
              <Link to="/how-we-work">how we work</Link>
            </li>
            <li className="hover:text-red-500 hover:underline">
              <Link to="/safety">safety </Link>
            </li>
            <li className="hover:text-red-500 hover:underline">
              <Link>faq</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold  text- mb-2">Blogs</h3>
          <ul id="blogs" className="flex flex-col gap-4">
            <li className="hover:text-red-500 hover:underline">
              <Link to="/Avoid-Paying-Deposits">How to avoid pay deposits</Link>
            </li>
            <li className="hover:text-red-500 hover:underline">
              <Link to="/Accident">What to know about accidents</Link>
            </li>
            <li className="hover:text-red-500 hover:underline">
              <Link to="/Car-crash-without-insurance">
                what to know on car crash without insurance
              </Link>
            </li>
            <li className="hover:text-red-500 hover:underline">
              <Link to="/Insurance-Importance">
                Importance of car insurance
              </Link>
            </li>

            <li className="hover:text-red-500 hover:underline">
              <Link to="/Pay-tolls">How to pay tolls</Link>
            </li>
            <li className="hover:text-red-500 hover:underline">
              <Link to="/Rental-car-state">
                Effects of taking a rental vehicle out of state
              </Link>
            </li>
            <li className="hover:text-red-500 hover:underline">
              <Link to="/Rental-car-stolen">
                What to know if rental car is stolen
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text- mb-2">Contact</h3>

          <h4 className="text-red-500 font-semibold mb-4">
            Bon Voyage Car Rental Corporation
          </h4>
          <div className="flex flex-col gap-2 mb-6">
            <p className="font-semibold">Lanham Maryland</p>
            <p>202 698 6487</p>
            <p>Bonvoyagecarrental22@gmail.com</p>
            <p>9500 Annapolis Road Suite B5 Lanham MD 20706</p>
            <p>9937 Good Luck Road Lanham MD 20706</p>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <h4 className="font-semibold">Bloomington Minnesota</h4>
            <p>+1 (612) 685-2055</p>
            <p>7900 International Drive Suite 300 Bloomington MN 55425</p>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <h4 className="font-semibold">Clarksville Tennessee</h4>
            <span>+1 641 244 2374</span>
            <span>+1 931 980 9124</span>
            <p>1959 Fort Campbell Blvd, #1 CLarksville Tennessee 37042</p>
          </div>

          <div className="flex flex-col gap-2 ">
            <h4 className="font-semibold">Woodbridge Virginia</h4>
            <span>804-220-5405</span>
            <p>1346 Old Bridge Rd, Suite 101 Woodbridge, VA 22192</p>
          </div>
        </div>
      </div>

      <div className=" bg-[#928474]">
        <div className="flex justify-between w-11/12 mx-auto p-5">
          <p>
            <span>privacy policy</span> <span>terms of use</span>
            <span>cookie policy</span>
            <span>
              All rights reserved by Bon Voyages Car Rental Designed By
              Chetech.io
            </span>
          </p>
          <div className="flex items-center gap-3">
            <IoLogoFacebook className="text-blue-500 " />
            <IoLogoInstagram className="text-red-500" />
            <IoLogoTiktok />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
