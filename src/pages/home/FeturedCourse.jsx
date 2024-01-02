import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import course1 from "../../assets/course-1.jpg";
import course2 from "../../assets/course-2.jpg";
import course3 from "../../assets/course-3.jpg";
import CourseCard from "../../components/shared/CourseCard";

const FeturedCourse = () => {
  return (
    <div className="py-10 lg:py-16 bg-[#f2f2f2]">
      <Container>
        <SectionTitle
          subtitle={"TOP POPULAR COURSE"}
          title={"Histudy Course Student Can Join With Us"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 pt-8 lg:pt-10">
          <CourseCard
            courseIMg={course1}
            title={"It Statistics Data Science And Business Analysis"}
          />
          <CourseCard
            courseIMg={course2}
            title={"It Statistics Data Science And Business Analysis"}
          />
          <CourseCard
            courseIMg={course3}
            title={"It Statistics Data Science And Business Analysis"}
          />
        </div>
      </Container>
    </div>
  );
};

export default FeturedCourse;
