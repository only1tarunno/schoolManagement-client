import bimg from "../../assets/bannerWomen.png";
import Container from "../../components/shared/Container";

const Banner = () => {
  return (
    <div>
      <Container>
        {" "}
        <div className="flex items-center justify-between">
          <div>
            <h2>Develop Your skills with online courses From A Pro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Explore All Courses</button>
          </div>
          <div>
            <img src={bimg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
