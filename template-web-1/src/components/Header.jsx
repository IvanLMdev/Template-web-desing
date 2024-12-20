import NavBar from "./NavBar";
import RedIcons from "./other/RedIcons";
import { useEffect,useState} from "react";
import "../styles/header.css";

const Header = () => {

  const [animation,setAnimation] = useState("")

  
   useEffect(()=>{
      setAnimation("show-banner")
   },[])
  
  return (
    <header className="header">
      <NavBar />
      <div className="banner-cont">
        <section className={`banner ${animation}`}>
          <h1 className="h1-header">Primer titulo</h1>
          <section className="banner-section">
            <h1 className="h1-banner">Titulo en el banner</h1>
            <p>
              Lorem wipsum dolor sit Wamet, consectetur adipisicing elit.
              Doloremque, nulla libero assumenda est expedita amet iure mollitia
              hic
            </p>
            <h2>texto de prueva</h2>
            <RedIcons size={"1.3rem"}/>
          </section>
        </section>
      </div>
    </header>
  );
};

export default Header;
