import RedIcons from "./other/RedIcons";
import Form from "./Form";
import { MdCopyright } from "react-icons/md";
import "../styles/form.css";

const ContFormAdress = () => {
  return (
    <section className="all-cont-form">
      <section className="cont-adress-link">
        <div className="adress">
          <h3>Locaciones</h3>
          <p>ubicacion</p>
          <address>calle 1234 Avenida 1235</address>
        </div>
        <div className="follow">
          <h4>Siguenos en redes</h4>
          <RedIcons /><p>Derechos reservdos <span><MdCopyright /></span>Archie growth</p>
        </div>
      </section>
      <Form />
    </section>
  );
};

export default ContFormAdress;
