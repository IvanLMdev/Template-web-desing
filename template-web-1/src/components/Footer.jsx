import { SlScreenSmartphone } from "react-icons/sl";
import { MdCopyright } from "react-icons/md";
import RedIcons from "./other/RedIcons";
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <RedIcons size={"30px"}/>
        <section className="more-contact">
            <ul>
                <li><a href=""> <SlScreenSmartphone /> 11 111 111 </a></li>
            </ul>
        <p className="derechos">derechos reservasdo<MdCopyright/>empresa 2024</p>
        </section>
    </footer>
  )
}

export default Footer
