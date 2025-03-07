import ButtonNav from "./other/ButtonNav";
import logo_NEGRO from "../assets/brads/LOGOS/logo_NEGRO.png"
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
import "../styles/nav-bar.css";

const NavBar = () => {

  const [onMenu,setOnMenu] = useState({state:false,value:"menu-hid"})

  const onClick = ()=>{
    onMenu.state? setOnMenu({state:false,value:"menu-hid"}):
    setOnMenu({state:true,value:"menu-show"})
  }

  return (
    <>
      <nav className={`nav-cont ${onMenu.value}`}>
      <a className="logo-cont">
        <img
          src={`${logo_NEGRO}`}
          alt=""
          width={"90px"}
          height={"60px"}
        />
      </a>
        <ul className="ul-nav">
          <ButtonNav hraf={"#servicios"} text={"Servicios"} />
          <ButtonNav hraf={"#proyectos"} text={"Proyectos"} />
          <ButtonNav hraf={"#contact"} text={"Contacto"} />
        </ul>
      </nav>


      <nav className="nav-movil">
      <a className="logo-cont-hidden">
        <img
          src={`${logo_NEGRO}`}
          alt=""
          width={"90px"}
          height={"60px"}
        />
      </a>
      <i className="menu-hamburger" onClick={onClick}>
        <TiThMenuOutline size={"1.3rem"}/>
      </i>
      </nav>
    </>
  );
};

export default NavBar;
