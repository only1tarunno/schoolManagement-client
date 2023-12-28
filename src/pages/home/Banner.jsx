import bimg from "../../assets/bannerWomen.png";
import Container from "../../components/shared/Container";
import bgimg from "../../assets/bannnerWomenShape.png";
import banner from "../../assets/hero-bg.jpg";
import bannerBottom from "../../assets/bannerBottomShape.png";

const Banner = () => {
  return (
    <div
      className="error-banner min-h-[200px] flex  justify-center items-center bg-cover relative"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <Container>
        {" "}
        <div className="flex items-center justify-between relative z-20 flex-col md:flex-row">
          <div className="w-full md:w-1/2 order-2 md:order-1 pt-8 md:pt-0 text-center md:text-start">
            <h2 className="text-[#0e2a46] text-3xl md:text-4xl lg:text-6xl font-bold max-w-[650px]">
              Develop Your skills with online courses From A Pro
            </h2>
            <p className="text-[#333931] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="text-base font-bold shadow-none  text-white btn bg-[#0ab99d] border-none rounded hover:bg-[#52e7ce] focus:outline-none">
              Explore All Courses
            </button>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            <img
              src={bgimg}
              className="absolute hidden md:block z-10 left-2/4 -translate-x-1/2 top-5"
              alt=""
            />
            <img src={bimg} className="mx-auto pt-8 relative z-20" alt="" />
          </div>
        </div>
      </Container>
      <img
        src={bannerBottom}
        className=" bottom-0 right-0 z-0 hidden md:block absolute"
        alt=""
      />
    </div>
  );
};

export default Banner;
