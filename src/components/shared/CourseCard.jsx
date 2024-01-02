import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

/* eslint-disable react/prop-types */
const CourseCard = ({ courseIMg, title }) => {
  const Star = (
    <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
  );
  const customStyles = {
    itemShapes: Star,
    activeFillColor: "#0ab99d",
    inactiveFillColor: "#ddd",
  };
  return (
    <div className="card  bg-base-100 shadow-xl rounded-md">
      <figure className="px-5 pt-5">
        <img src={courseIMg} alt="" className="rounded-lg" />
      </figure>
      <div className="card-body px-5">
        <Rating
          style={{ maxWidth: 120 }}
          itemStyles={customStyles}
          value={4}
          readOnly
        />
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-between pb-4 border-b border-dashed border-[#4d5756]">
          <div>Lesson 10</div>
          <div>19h 30m</div>
          <div>Students 20+</div>
        </div>
        <div className="flex items-center justify-start gap-3 pt-4">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            className="w-8 h-8 rounded-[50%]"
            alt=""
          />
          <p className="text-[#0e2a46]">By Angela in Development</p>
        </div>
        <div className="flex justify-between items-center pt-4">
          <h3 className="text-[#0e2a46] font-bold text-2xl">$60</h3>
          <button className="btn btn-sm">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
