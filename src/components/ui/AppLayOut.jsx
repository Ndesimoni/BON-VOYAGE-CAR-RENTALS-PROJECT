import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";
import Message from "./Message";
import Footer from "./Footer/Footer";

const AppLayOut = () => {
  const [showMessageForm, setShowMessageForm] = useState(false);
  return (
    <>
      <Header />
      <main className="mt-36 py-[2px]  bg-slate-50">
        {showMessageForm ? (
          <Message
            setShowMessageForm={setShowMessageForm}
            showMessageForm={showMessageForm}
          />
        ) : (
          <AiOutlineMessage
            className="text-[4rem] bg-red-600 p-2  fixed right-10 bottom-10 rounded-full text-white"
            role="button"
            title="send us a message"
            onClick={() => setShowMessageForm(true)}
          />
        )}
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AppLayOut;
