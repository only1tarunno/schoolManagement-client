import Container from "../../components/shared/Container";

const NewsLetter = () => {
  return (
    <div className="bg-[#0ab99d] py-10 md:py-16">
      <Container>
        <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
          <div className=" text-white flex-1">
            <h2 className="pb-5 font-bold text-2xl md:text-3xl lg:text-5xl">
              Join Our Newsletter
            </h2>
            <p className="text-lg font-semibold">
              Subscribe our newsletter to get our latest update & news.
            </p>
          </div>
          <div className="flex-1">
            <form className="relative">
              <input
                type="email"
                className="form-control px-5 py-6 rounded-lg w-full"
              />
              <button className="btn text-white font-semibold bg-black border-none absolute top-1/2 -translate-y-1/2 right-3">
                subscribe now
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;
