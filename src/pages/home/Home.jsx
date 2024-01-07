import About from "./About";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Category from "./Category";
import FeturedCourse from "./FeturedCourse";
import TeamMembers from "./TeamMembers";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <FeturedCourse></FeturedCourse>
      <About></About>
      <CallToAction></CallToAction>
      <WhyUs></WhyUs>
      <Testimonial></Testimonial>
      <TeamMembers></TeamMembers>
    </>
  );
};

export default Home;
