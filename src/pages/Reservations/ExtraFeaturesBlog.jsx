function ExtraFeaturesBlog({ icon, heading, text }) {
  return (
    <>
      <div className="hover:bg-red-50 transition-all p-4 shadow-md bg-slate-50">
        <p className="text-3xl mb-2 text-red-500">{icon}</p>

        <h1 className="text-red-500 text-xl  mb-2">{heading}</h1>

        <p>{text}</p>
      </div>
    </>
  );
}

export default ExtraFeaturesBlog;
