import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Category = () => {
  return (
    <div className="py-10 lg:py-16">
      <Container>
        <SectionTitle
          title={"Browse By Categories"}
          subtitle={"CATEGORIES"}
        ></SectionTitle>
      </Container>
    </div>
  );
};

export default Category;
