import { AiOutlineSend } from "react-icons/ai";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Message({ showMessageForm, setShowMessageForm }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setShowMessageForm(false);

    emailjs
      .sendForm("service_rhjpsld", "template_bvzx32s", form.current, {
        publicKey: "Imax2V-IUZCenjQCm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className={
        showMessageForm &&
        `bg-opacity-80 bg-stone-800 fixed z-100 w-full z-10 h-svh top-0`
      }
    >
      <div className=" bg-white max-w-[420px] z-50 right-20 top-28 text-lg rounded-md shadow-lg overflow-hidden fixed">
        <p className="mb-6 text-white bg-red-700 px-8  h-[120px] flex items-center">
          Please fill out this form and we will get back to you as soon as
          possible
        </p>
        <form className="px-8 py-4 " onSubmit={sendEmail} ref={form}>
          <div className="mb-6">
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="from_name"
              required
              className="border-stone-400 border-2 py-2 px-3 focus:outline-none w-full rounded-md focus:border-red-300"
            />
          </div>

          <div className="mb-6">
            <input
              id="email"
              name="email"
              type="from_email"
              required
              placeholder="Email"
              className="border-stone-400 border-2 py-2 px-3 focus:outline-none w-full rounded-md focus:border-red-300"
            />
          </div>

          <div className="mb-6">
            <textarea
              className="border-stone-400 border-2 w-full p-4 focus:outline-none focus:border-red-300 rounded-md resize-none"
              placeholder="Message"
              required
              name="message"
            ></textarea>
          </div>

          <div className="flex items-center">
            <button className="flex items-center gap-2 border-2 bg-red-700 text-white uppercase px-3 py-1 rounded-md mb-3 hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 transition-all font-semibold">
              <span>Send</span>
              <AiOutlineSend />
            </button>

            <div
              className="flex items-center gap-2 px-3 py-1 rounded-md mb-3 ml-auto border-2 border-red-500 cursor-pointer text-red-700 hover:opacity-50 transition-opacity"
              onClick={() => setShowMessageForm(false)}
            >
              <span>EXIT</span>
            </div>
          </div>
        </form>
      </div>{" "}
    </div>
  );
}

export default Message;
