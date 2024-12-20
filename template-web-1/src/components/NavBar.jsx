import { PiWarehouseThin } from "react-icons/pi";
import "../styles/nav-bar.css";

const NavBar = () => {
  return (
    <nav className="nav-cont">
      <a className="logo-cont">
        {/* <PiWarehouseThin size={"3rem"}/> */}
        <img src="https://cdn2.iconfinder.com/data/icons/home-house-building-02/1000/Home-08-512.png" alt="" width={"30rem"} height={"30rem"}/>
        <strong>Logo de tu Empresa</strong>
      </a>
      <ul className="ul-nav">
        <li>
          <a href="#articles" className="anchor">
            <button type="button" className="btn-nav">
              <span>Blog</span>
              <svg>
                <rect x="0px" y="0px" fill="none"></rect>
              </svg>
            </button>
          </a>
        </li>
        <li>
          <a href="#images" className="anchor">
            <button type="button" className="btn-nav">
              <span>Fotos</span>
              <svg>
                <rect x="0px" y="0px" fill="none"></rect>
              </svg>
            </button>
          </a>
        </li>
        <li>
          <a href="#contact" className="anchor">
            <button type="button" className="btn-nav">
              <span>Contacto</span>
              <svg>
                <rect x="0px" y="0px" fill="none"></rect>
              </svg>
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
