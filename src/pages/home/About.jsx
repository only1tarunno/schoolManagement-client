import Container from "../../components/shared/Container";
import img1 from "../../assets/thumb-1.jpg";
import img2 from "../../assets/thumb-2.jpg";
import img3 from "../../assets/thumb-3.jpg";

const About = () => {
  return (
    <div className="py-10 md:py-24">
      <Container>
        <div className="flex justify-between items-center gap-5">
          <div className="w-full md:w-[48%] flex gap-5 items-center justify-center">
            <div className="w-[40%] lg:block hidden">
              <img src={img1} className="rounded-xl pb-5 w-full" alt="" />
              <img src={img2} className="rounded-xl w-full" alt="" />
            </div>
            <div className="w-full md:w-[50%]">
              <img src={img3} className="rounded-lg w-full" alt="" />
            </div>
          </div>
          <div className="w-full md:w-[48%] space-y-5">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
