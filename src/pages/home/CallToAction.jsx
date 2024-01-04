import img from "../../assets/cto.jpg";

const CallToAction = () => {
  return (
    <div
      className="error-banner min-h-[400px] flex  justify-center items-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 42, 70, 0.8), rgba(14, 42, 70, 0.8)),url(${img})`,
      }}
    >
      <div className=" z-30 text-center space-y-2">
        <h3>Join Our New Session</h3>
        <h2 className="font-bold text-3xl max-w-3xl capitalize text-white ">
          Call To Enroll Your Child
        </h2>
        <h2>+880 1569130064</h2>
        <button className="text-base font-bold shadow-none  text-white btn bg-[#0ab99d] border-none rounded hover:bg-[#52e7ce] focus:outline-none">
          More About Us
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
