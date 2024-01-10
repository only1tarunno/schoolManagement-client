import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx/Navbar";
import Footer from "../components/Footer.jsx/Footer";
import BottomFooter from "../components/Footer.jsx/BottomFooter";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
      <BottomFooter></BottomFooter>
    </>
  );
};

export default Main;
