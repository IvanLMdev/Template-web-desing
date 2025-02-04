import ButtonNav from "./other/ButtonNav";
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
          src="https://cdn2.iconfinder.com/data/icons/home-house-building-02/1000/Home-08-512.png"
          alt=""
          width={"30rem"}
          height={"30rem"}
        />
        <strong>Logo de tu Empresa</strong>
      </a>
        <ul className="ul-nav">
          <ButtonNav hraf={"#articles"} text={"Servicios"} />
          <ButtonNav hraf={"#images"} text={"Proyectos"} />
          <ButtonNav hraf={"#contact"} text={"Contacto"} />
        </ul>
      </nav>


      <nav className="nav-movil">
      <a className="logo-cont-hidden">
        <img
          src="https://cdn2.iconfinder.com/data/icons/home-house-building-02/1000/Home-08-512.png"
          alt=""
          width={"30rem"}
          height={"30rem"}
        />
        <strong>Logo Empresa</strong>
      </a>
      <i className="menu-hamburger" onClick={onClick}>
        <TiThMenuOutline size={"1.3rem"}/>
      </i>
      </nav>
    </>
  );
};

export default NavBar;
