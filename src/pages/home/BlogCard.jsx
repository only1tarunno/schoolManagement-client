/* eslint-disable react/prop-types */

const BlogCard = ({ blogIMg }) => {
  return (
    <div className="card  bg-[#eeeeee] shadow-xl rounded-md">
      <figure className="p-8">
        <img src={blogIMg} alt="" className="rounded-lg w-full" />
      </figure>
      <div className="card-body px-8">
        <div className="flex items-center gap-8 text-[#4d5756]">
          <div>14 June 2023</div>
          <div>Comment (06)</div>
        </div>
        <h2 className="card-title">
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat
        </h2>

        <div>
          <button className="text-base font-bold shadow-none  text-white btn bg-[#0ab99d] border-none rounded hover:bg-[#52e7ce] focus:outline-none">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
