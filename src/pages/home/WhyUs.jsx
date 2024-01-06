import Container from "../../components/shared/Container";
import img1 from "../../assets/choose.jpg";

const WhyUs = () => {
  return (
    <div className="py-10 lg:py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-[48%] space-y-5 text-center md:text-start">
            <span className="text-[#0ab99d] bg-[#0ab99c33] uppercase px-5 py-1 rounded  inline-block">
              WHY CHOOSE US
            </span>
            <h2 className="text-[#0e2a46] font-bold text-3xl lg:text-5xl w-full md:max-w-2xl">
              Creating A Community Of Life Long Learners
            </h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris..
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-[#f8f6f1] px-5 py-7 rounded-lg">
                <h3 className="text-[#0e2a46] font-bold text-lg">
                  World Class Trainers
                </h3>
                <p>Gravida dictum fusce placerat ultricies integer</p>
              </div>
              <div className="bg-[#f8f6f1] px-5 py-7 rounded-lg">
                <h3 className="text-[#0e2a46] font-bold text-lg">
                  Easy Learning
                </h3>
                <p>Gravida dictum fusce placerat ultricies integer</p>
              </div>
              <div className="bg-[#f8f6f1] px-5 py-7 rounded-lg">
                <h3 className="text-[#0e2a46] font-bold text-lg">Flexible</h3>
                <p>Gravida dictum fusce placerat ultricies integer</p>
              </div>
              <div className="bg-[#f8f6f1] px-5 py-7 rounded-lg">
                <h3 className="text-[#0e2a46] font-bold text-lg">
                  Affordable Price
                </h3>
                <p>Gravida dictum fusce placerat ultricies integer</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%]">
            <img src={img1} className="w-full" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
