/* eslint-disable react/prop-types */
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <span className="text-[#0ab99d] bg-[#0ab99c33] uppercase px-5 py-1 rounded mb-5 inline-block">
        {subtitle}
      </span>
      <h2 className="text-[#0e2a46] font-bold text-3xl lg:text-5xl w-full md:max-w-3xl mx-auto">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
