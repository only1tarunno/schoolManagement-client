import About from "./About";
import Banner from "./Banner";
import Blog from "./Blog";
import CallToAction from "./CallToAction";
import Category from "./Category";
import FeturedCourse from "./FeturedCourse";
import NewsLetter from "./NewsLetter";
import TeamMembers from "./TeamMembers";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <FeturedCourse />
      <About />
      <CallToAction />
      <WhyUs />
      <Testimonial />
      <TeamMembers />
      <Blog />
      <NewsLetter />
    </>
  );
};

export default Home;
