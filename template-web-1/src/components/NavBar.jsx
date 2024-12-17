import { BsTools } from "react-icons/bs";

import "../styles/nav-bar.css";

const NavBar = () => {
  return (
    <nav className="nav-cont">
      <i className="logo-cont">
        <BsTools />
        <p>Logo De La Empresa</p>
      </i>
      <ul className="ul-nav">
        <li>
          <a href="" className="anchor-nav">
            boton 3
          </a>
        </li>
        <li>
          <a href="" className="anchor-nav">
            boton 2
          </a>
        </li>
        <li>
          <a href="" className="anchor-nav">
            boton 1
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
