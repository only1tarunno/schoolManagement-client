import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import course1 from "../../assets/course-1.jpg";
import course2 from "../../assets/course-2.jpg";
import course3 from "../../assets/course-3.jpg";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="py-10 lg:py-16">
      <Container>
        <div>
          <SectionTitle title={"Post Popular Post"} subtitle={"BLOG POST"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          <BlogCard blogIMg={course1} />
          <BlogCard blogIMg={course1} />
          <BlogCard blogIMg={course1} />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
