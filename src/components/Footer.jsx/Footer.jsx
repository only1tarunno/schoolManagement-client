import Container from "../shared/Container";
import logo from "../../assets/logo-white.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
        <footer className="footer p-10 text-white">
          <div className="">
            <img src={logo} alt="" />
            <p className="text-lg font-medium">
              Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt
              tortor aliquam nulla facilisi cras fermentum odio eu.
            </p>
          </div>
          <nav className="">
            <header className="footer-title">Services</header>
            <a className="link link-hover">Web Development</a>
            <a className="link link-hover">UI/UX Design</a>
            <a className="link link-hover">Management</a>
            <a className="link link-hover">Digital Marketing</a>
          </nav>
          <nav className="">
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
