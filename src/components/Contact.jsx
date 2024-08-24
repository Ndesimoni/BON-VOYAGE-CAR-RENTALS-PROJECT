function Contact() {
  return (
    <div className="p-3 my-16 flex  flex-col justify-center items-center">
      <h1 className="text-center text-red-500 text-3xl font-semibold uppercase mb-7 ">
        Contact us{" "}
      </h1>

      <div className="grid grid-cols-2 w-[1200px] gap-12">
        <div>
          <form className="text-lg flex flex-col justify-start items-start border  p-6">
            <div className="flex   flex-row  gap-4 mb-6  ">
              <div className=" flex flex-col gap-2">
                <label htmlFor="name" className="mr-2 px-2">
                  Full Name:
                </label>
                <input
                  id="name"
                  className=" border rounded-md px-5 py-1 w-64"
                />
              </div>

              <div className="mb-6 flex flex-col gap-2 ">
                <label htmlFor="email" className="mr-2 px-2 ">
                  Email:
                </label>
                <input
                  id="email"
                  className=" border rounded-md px-5 py-1 w-64"
                />
              </div>
            </div>

            <textarea
              placeholder="Message "
              className="w-full p-3 mb-5 rounded-md"
            ></textarea>

            <button className="block uppercase bg-red-500 px-2 py-1 rounded-md font-semibold border-2 border-red-500 hover:bg-white transition-all text-white hover:text-stone-800">
              send
            </button>
          </form>
        </div>

        <div className="flex flex-col">
          <div>
            <h1 className="text-xl font-bold mb-2">
              Reach us at :{" "}
              <span className="text-green-600">State of marry land</span>
            </h1>

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
          </div>

          <div className="flex flex-col">
            <div>
              <h1 className="text-xl font-bold mb-2">
                Reach us at :{" "}
                <span className="text-green-600">State of minnesota</span>
              </h1>

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
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <h1 className="text-xl font-bold mb-2">
                Reach us at :{" "}
                <span className="text-green-600">State of tennessee </span>
              </h1>

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
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <h1 className="text-xl font-bold mb-2">
                Reach us at :{" "}
                <span className="text-green-600">State of Virginia</span>
              </h1>

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
            </div>
          </div>

          <button className="block  bg-stone-200 px-2 py-1 rounded-md font-semibold border-2 border-stone-500 hover:bg-white transition-all hover:text-red-500 hover:border-red-200">
            Start live chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
