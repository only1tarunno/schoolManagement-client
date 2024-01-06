import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import testImg from "../../assets/testimonial-bg.jpg";

const Testimonial = () => {
  return (
    <div
      className="py-10 lg:py-16"
      style={{ backgroundImage: `url(${testImg})` }}
    >
      <Container>
        <div className="space-y-10">
          <SectionTitle
            title={"Creating A Community Of Life Long Learners"}
            subtitle={"TESTIMONIAL"}
          ></SectionTitle>
          <TestimonialCard></TestimonialCard>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
