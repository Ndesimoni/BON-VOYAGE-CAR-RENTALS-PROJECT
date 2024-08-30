import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
// import { AiOutlineMessage } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";

import { useState } from "react";
import Message from "./Message";
import Footer from "./Footer/Footer";
// import { GoogleOAuthProvider } from "@react-oauth/google";

const AppLayOut = () => {
  const [showMessageForm, setShowMessageForm] = useState(false);
  // const clientID = import.meta.env.VITE_APP_CLIENT_ID;
  return (
    <>
      {/* <GoogleOAuthProvider clientId={clientID}> */}
      <Header />

      <main className="py-[.5px]  bg-slate-50">
        {showMessageForm ? (
          <Message
            setShowMessageForm={setShowMessageForm}
            showMessageForm={showMessageForm}
          />
        ) : (
          <div>
            <p>
              <img
                src="/help.svg"
                className="p-2  fixed right-4 bottom-8 h-32 w-36 text-white z-50"
              />
            </p>
            <RiCustomerService2Line
              className="text-[4rem] bg-red-600 p-2  fixed right-10 bottom-10 rounded-full text-white z-50"
              role="button"
              title="send us a message"
              onClick={() => setShowMessageForm(true)}
            />
          </div>
        )}
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
      {/* </GoogleOAuthProvider> */}
    </>
  );
};

export default AppLayOut;
