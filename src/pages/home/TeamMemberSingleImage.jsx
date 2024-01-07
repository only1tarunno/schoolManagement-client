/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const TeamMemberSingleImage = ({ img1 }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };
  return (
    <div className="relative w-[360px] h-[360px] border-4 border-[#0ab99d] overflow-hidden">
      <img
        src={img1}
        className={` transition-transform duration-1000 w-full h-full object-cover  ${
          hovered ? "scale-110" : "scale-100"
        } cursor-pointer`}
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <div className="flex justify-between items-center bg-white absolute w-4/5 left-1/2 -translate-x-1/2 bottom-3 p-4 rounded-md">
        <div>
          <h3 className="text-[#0e2a46] text-xl font-bold">Esther Howard</h3>
          <p className="text-sm text-[#0ab99d] font-semibold">
            Junior Instructor
          </p>
        </div>
        <div className="text-[#0ab99d]">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSingleImage;
