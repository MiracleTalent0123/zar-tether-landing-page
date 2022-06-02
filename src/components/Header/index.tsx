import useNav from "../../hooks/useNav";
import { Link } from "react-router-dom";
import NavbarToggler from "./NavbatToggler";
import Logo from "../../assets/images/logo.png";
import Image from "../common/Image";

const Navbar = () => {
  const [navbarOpen] = useNav(false);

  return (
    <>
      <nav id="header" className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand pointer p-0">
            <Image src={Logo} cssClasses={["logo-img"]} />
          </Link>
          <span
            className="navbar-toggler border-0 outline-none p-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <NavbarToggler navbarOpen={navbarOpen} />
          </span>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <Link className={`nav-link white px-0 py-2 pointer`} to={"/"}>
                  Why Zar Tether?
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link white px-0 py-2 pointer`} to={"/"}>
                  How it works
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link white px-0 py-2 pointer`} to={"/"}>
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link white px-0 py-2 pointer`} to={"/"}>
                  Docs
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link white px-0 py-2 pointer`} to={"/"}>
                  Defi App
                </Link>
              </li>
              <li className="nav-item coming-soon-container">
                <button>SignUp</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
