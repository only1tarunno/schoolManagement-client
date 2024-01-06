import img1 from "../../assets/person.jpg";

const Singlecard = () => {
  return (
    <div className="p-10 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-medium text-[#999] pb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo..
      </h2>
      <div className="flex gap-3 items-center">
        <img src={img1} className="w-24 h-24" alt="" />
        <div>
          <h3 className="text-xl font-bold">John Kim </h3>
          <p className="text-[#999]">Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Singlecard;
