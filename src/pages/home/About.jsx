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
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default About;
