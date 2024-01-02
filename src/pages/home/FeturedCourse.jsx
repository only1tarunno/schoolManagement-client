import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import course1 from "../../assets/course-1.jpg";
import course2 from "../../assets/course-2.jpg";
import course3 from "../../assets/course-3.jpg";

const FeturedCourse = () => {
  return (
    <div className="py-10 lg:py-16 bg-[#f2f2f2]">
      <Container>
        <SectionTitle
          subtitle={"TOP POPULAR COURSE"}
          title={"Histudy Course Student Can Join With Us"}
        ></SectionTitle>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure className="px-5 pt-5">
              <img src={course1} alt="" className="rounded-lg" />
            </figure>
            <div className="card-body px-5">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeturedCourse;
