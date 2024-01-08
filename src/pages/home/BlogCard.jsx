import React from "react";

const BlogCard = () => {
  return (
    <div className="card  bg-base-100 shadow-xl rounded-md">
      <figure className="px-5 pt-5">
        <img src={courseIMg} alt="" className="rounded-lg" />
      </figure>
      <div className="card-body px-5">
        <div className="flex items-center gap-8 pb-4 border-b border-dashed border-[#4d5756]">
          <div>14 June 2023</div>
          <div>Comment (06)</div>
        </div>
        <h2 className="card-title">
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat
        </h2>

        <button className="btn btn-sm">Details</button>
      </div>
    </div>
  );
};

export default BlogCard;
