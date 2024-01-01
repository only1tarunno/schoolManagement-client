import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

import img1 from "../../assets/c1.png";
import img2 from "../../assets/c2.png";
import img3 from "../../assets/c3.png";
import img4 from "../../assets/c4.png";
import img5 from "../../assets/c5.png";
import img6 from "../../assets/c6.png";
import img7 from "../../assets/c7.png";
import img8 from "../../assets/c8.png";
import CategoryCard from "../../components/shared/CategoryCard";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="py-10 lg:py-16">
      <Container>
        <SectionTitle
          title={"Browse By Categories"}
          subtitle={"CATEGORIES"}
        ></SectionTitle>
        <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 lg:gap-10">
          <CategoryCard iconImg={img1} title={"Web Design"} />
          <CategoryCard iconImg={img2} title={"Graphic Design"} />
          <CategoryCard iconImg={img3} title={"Personal Development"} />
          <CategoryCard iconImg={img7} title={"IT And Software"} />
          <CategoryCard iconImg={img5} title={"Seles Marketing"} />
          <CategoryCard iconImg={img6} title={"Art & Humanities"} />
          <CategoryCard iconImg={img4} title={"Mobile Application"} />
          <CategoryCard iconImg={img8} title={"Finance & Accounting"} />
        </div>
      </Container>
    </div>
  );
};

export default Category;
