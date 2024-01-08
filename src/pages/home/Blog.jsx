import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const Blog = () => {
  return (
    <div className="py-10 lg:py-16">
      <Container>
        <div>
          <SectionTitle title={"Post Popular Post"} subtitle={"BLOG POST"} />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
