/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const CategoryCard = ({ iconImg, title }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#f2f2f2] px-4 py-16 rounded-lg text-center hover:bg-[#0ab99d] cat-container cursor-pointer"
      onClick={() => navigate("/")}
    >
      <span className="bg-[#0ab99d] rounded-[50%] h-24 w-24 flex items-center justify-center mx-auto mb-9">
        <img src={iconImg} className="h-11 w-11" alt="" />
      </span>
      <h2 className="text-2xl font-semibold text-[#0e2a46] mb-4">{title}</h2>
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
  );
};

export default CategoryCard;
