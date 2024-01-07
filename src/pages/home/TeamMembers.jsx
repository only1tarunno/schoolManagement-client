import Container from "../../components/shared/Container";
import img1 from "../../assets/team-1-1.png";
import img2 from "../../assets/team-1-2.png";
import img3 from "../../assets/team-1-3.png";
import img4 from "../../assets/team-1-4.png";

const TeamMembers = () => {
  return (
    <div className="py-10 md:py-24">
      <Container>
        <div className="flex justify-between items-center gap-5 flex-col lg:flex-row">
          <div className="w-full md:w-[38%] space-y-5 text-center md:text-start">
            <span className="text-[#0ab99d] bg-[#0ab99c33] uppercase px-5 py-1 rounded  inline-block">
              OUR INSTRUCTOR
            </span>
            <h2 className="text-[#0e2a46] font-bold text-3xl lg:text-5xl w-full md:max-w-2xl">
              Meet Our Expert Instructor
            </h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris..
            </p>

            <div className="flex gap-4">
              <button className="text-base font-bold shadow-none  text-white btn bg-[#0ab99d] border-none rounded hover:bg-[#52e7ce] focus:outline-none">
                Contact Us
              </button>
              <button className="text-base font-bold shadow-none  text-white btn bg-[#000] border-none rounded hover:bg-[#0ab99d] focus:outline-none">
                Explore Courses
              </button>
            </div>
          </div>
          <div className="w-full md:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
            <img
              src={img1}
              className="w-[360px] h-[360px] object-cover"
              alt=""
            />
            <img
              src={img2}
              className="w-[360px] h-[360px] object-cover"
              alt=""
            />
            <img
              src={img3}
              className="w-[360px] h-[360px] object-cover"
              alt=""
            />
            <img
              src={img4}
              className="w-[360px] h-[360px] object-cover"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeamMembers;
