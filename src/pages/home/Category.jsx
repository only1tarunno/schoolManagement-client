import { Link } from "react-router-dom";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../assets/c1.png";
import img2 from "../../assets/c2.png";
import img3 from "../../assets/c3.png";
import img4 from "../../assets/c4.png";
import img5 from "../../assets/c5.png";
import img6 from "../../assets/c6.png";
import img7 from "../../assets/c7.png";
import img8 from "../../assets/c8.png";

const Category = () => {
  return (
    <div className="py-10 lg:py-16">
      <Container>
        <SectionTitle
          title={"Browse By Categories"}
          subtitle={"CATEGORIES"}
        ></SectionTitle>
        <div className="mt-8 lg:mt-10">
          <div className="bg-[#f2f2f2] px-4 py-16 rounded-lg text-center hover:bg-[#0ab99d] cat-container">
            <span className="bg-[#0ab99d] rounded-[50%] h-24 w-24 flex items-center justify-center mx-auto mb-9">
              <img src={img1} className="h-11 w-11" alt="" />
            </span>
            <h2 className="text-2xl font-semibold text-[#0e2a46] mb-4">
              Web Design
            </h2>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 text-[#4d5756]"
            >
              25 Courses
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
