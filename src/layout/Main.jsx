import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx/Navbar";
import Footer from "../components/Footer.jsx/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Main;
