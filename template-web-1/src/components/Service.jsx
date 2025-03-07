import { info } from "./utilities/info.js";
import CardService from "./other/CardService.jsx";
import "../styles/service.css";

const Service = () => {
  return (
    <section className="container">
      <div className="service-grid-cont">
        <header className="header-service" id="servicios">
          <h2 className="title-service">Servicios</h2>
        </header>
        <aside className="aside-1-service">
          <p className="p-service">
            Esta casa combina elegancia y funcionalidad en cada detalle. Su
            diseño moderno destaca por líneas limpias, amplios ventanales y una
            fachada armoniosa. Al ingresar, un concepto abierto une la cocina,
            el comedor y el living, creando un espacio luminoso y acogedor. Las
            habitaciones ofrecen confort y privacidad, mientras que la suite
            principal incluye vestidor y baño privado. En el exterior, un jardín
            con galería y parrilla invita al relax. Materiales de calidad y
            detalles bien pensados hacen de esta casa un hogar perfecto para
            disfrutar todos los días.
          </p>
        </aside>
        <section className="section-2-service">
          <div className="card-service-cont">
            {info.map((x) => (
              <CardService
                key={x.id}
                src={x.imgUrl}
                title={x.title}
                text={x.article}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Service;
