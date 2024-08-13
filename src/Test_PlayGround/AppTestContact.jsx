import emailjs from "@emailjs/browser";
import { useRef } from "react";

const AppTestContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // serviceID: import.meta.env.VITE_PUBLIC_KEY,
    // publicKEY: import.meta.env.VITE_TEMPLATEID,
    // templateID: import.meta.env.VITE_SERVICEID,

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col max-w-56 justify-center  mt-48"
    >
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />

      <button type="submit" className="border my-4 bg-amber-500">
        send message
      </button>
    </form>
  );
};

export default AppTestContact;
