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
            <RedIcons size={"1.8rem"}/>
          </section>
        </section>
      </div>
    </header>
  );
};

export default Header;
