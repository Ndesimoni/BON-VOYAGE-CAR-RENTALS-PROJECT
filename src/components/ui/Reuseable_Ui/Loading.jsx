import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="flex justify-center items-center flex-col-reverse w-full h-[100vh]">
      <h2 className="text-red-500 capitalize">Bon voyage to success</h2>

      <ReactLoading
        type="spinningBubbles"
        color="#379f37"
        height={100}
        width={50}
      />
      {/* <ReactLoading type="cubes" color="#0000FF" height={100} width={50} /> */}
      {/* <ReactLoading type="spokes" color="#0000FF" height={100} width={50} />  */}
      {/* <ReactLoading type="balls" color="#0000FF" height={100} width={50} /> */}
      {/* <ReactLoading type="cylon" color="#0000FF" height={100} width={50} /> */}
      {/* <ReactLoading type="bubbles" color="#0000FF" height={100} width={50} /> */}
      {/* <ReactLoading type="bars" color="#0000FF" height={100} width={50} /> */}
    </div>
  );
}

//todo this are order loader
{
  /* <ReactLoading type="balls" color="#0000FF" height={100} width={50} />
      <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
      <ReactLoading type="bubbles" color="#0000FF" height={100} width={50} />
      <ReactLoading type="cubes" color="#0000FF" height={100} width={50} />
      <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
      <ReactLoading type="spokes" color="#0000FF" height={100} width={50} /> */
}
