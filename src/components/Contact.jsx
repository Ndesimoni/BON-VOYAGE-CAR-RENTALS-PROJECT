function Contact() {
  return (
    <div className="py-6 mb-16">
      <h1 className="text-center text-red-500 text-3xl font-semibold uppercase mb-4">
        Contact us{" "}
      </h1>

      <div className="grid grid-cols-2">
        <form className="text-lg px-4">
          <div className="flex flex-wrap mb-6 gap-10">
            <div className=" flex flex-col gap-2">
              <label htmlFor="name" className="mr-2 ">
                Full Name
              </label>
              <input
                id="name"
                className="focus:outline-none focus:border-red-300 border-stone-400 border-2 px-3 py-2 rounded-md bg-inherit"
              />
            </div>
            <div className="mb-6 flex flex-col gap-2">
              <label htmlFor="email" className="mr-2 ">
                Email
              </label>
              <input
                id="email"
                className="focus:outline-none focus:border-red-300 border-stone-400 border-2 px-3 py-2 rounded-md bg-inherit"
              />
            </div>
          </div>
          <textarea
            placeholder="Message "
            className="w-4/5 focus:outline-none focus:border-red-300 border-stone-400 border-2 px-3 py-2 rounded-md mb-8 bg-inherit"
          ></textarea>
          <button className="block uppercase bg-red-500 px-2 py-1 rounded-md font-semibold border-2 border-red-500 hover:bg-white transition-all text-white hover:text-stone-800">
            send
          </button>
        </form>

        <div>
          <h1 className="text-xl font-bold mb-2">Reach us at</h1>

          <p className="text-xl mb-4">
            <span>Email : </span>
            <span className="font-semibold">
              Bonvoyagecarrental22@gmail.com
            </span>
          </p>
          <p className="text-xl mb-8">
            <span>Tel: </span>
            <span className="font-semibold">202 698 6487</span>
          </p>

          <p className="text-xl mb-8">
            You can start a live chat with us where you communicate directly
            with the manager of bon voyage ar rental{" "}
          </p>
          <button className="block  bg-stone-200 px-2 py-1 rounded-md font-semibold border-2 border-stone-500 hover:bg-white transition-all hover:text-red-500 hover:border-red-200">
            Start live chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
