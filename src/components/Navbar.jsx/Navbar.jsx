import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../shared/Container";
import logo from "../../assets/logo-black.png";

const Navbar = () => {
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Services</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="bg-white border-b border-[#eaeaea]">
        <Container>
          <div className="drawer relative z-50">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="w-full px-0 navbar ">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost justify-start"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="flex-1 justify-center lg:justify-start lg:flex-none lg:w-1/4">
                  <img src={logo} alt="logo" className="w-28" />
                </div>
                <div className="flex-none hidden lg:block lg:flex-1 text-center">
                  <ul className="menu menu-horizontal text-lg">
                    {/* Navbar menu content here */}
                    {links}
                  </ul>
                </div>
                {/* button start here  */}
                <div className="w-1/4 justify-end">
                  {/* ---------check if user login they see profile------------- */}
                  <div>
                    <Link to="/login">
                      <button className="text-base font-bold shadow-none text-center text-white btn bg-[#0ab99d] border-none rounded hover:bg-[#52e7ce] focus:outline-none">
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 relative z-50">
                {/* Sidebar content here */}
                {links}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
