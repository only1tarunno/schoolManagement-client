import Container from "../../components/shared/Container";

const WhyUs = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="w-full md:w-[48%] space-y-5 text-center md:text-start">
            <span className="text-[#0ab99d] bg-[#0ab99c33] uppercase px-5 py-1 rounded  inline-block">
              OUR ABOUT US
            </span>
            <h2 className="text-[#0e2a46] font-bold text-3xl lg:text-5xl w-full md:max-w-2xl">
              Learn & Grow Your Skills From Anywhere
            </h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris..
            </p>
            <div className="flex justify-between gap-5 flex-col lg:flex-row">
              <div className="flex-1">
                <h2 className="text-[#0e2a46] font-bold text-lg">
                  FLEXIBLE CLASSES
                </h2>
                <p className="text-base lg:text-lg">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
              <div className="flex-1">
                <h2 className="text-[#0e2a46] font-bold text-lg">
                  FLEXIBLE CLASSES
                </h2>
                <p className="text-base lg:text-lg">
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
            </div>
            <button className="text-base font-bold shadow-none  text-white btn bg-[#0ab99d] border-none rounded hover:bg-[#52e7ce] focus:outline-none">
              More About Us
            </button>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
