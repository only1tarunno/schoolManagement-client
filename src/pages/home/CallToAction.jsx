import img from "../../assets/cto.jpg";

const CallToAction = () => {
  return (
    <div
      className="error-banner min-h-[400px] flex  justify-center items-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 42, 70, 0.8), rgba(14, 42, 70, 0.8)),url(${img})`,
      }}
    >
      <div className=" z-30 text-center space-y-4 text-white font-bold">
        <h3 className="text-lg md:text-2xl">Join Our New Session</h3>
        <h2 className=" text-3xl md:text-4xl lg:text-5xl">
          Call To Enroll Your Child
        </h2>
        <h2 className=" text-3xl md:text-4xl lg:text-5xl">(+880) 1569130064</h2>
        <button className="text-base font-bold shadow-none  text-white btn bg-[#0ab99d] border-none rounded hover:bg-[#52e7ce] focus:outline-none">
          Join With Us
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
