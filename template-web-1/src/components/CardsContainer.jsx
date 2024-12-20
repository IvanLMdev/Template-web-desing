import InfoCard from "./InfoCard";
import { info } from "./utilities/info";
import "../styles/cards-container.css";

const CardsContainer = () => {
  return (
    <>
      <h2 id="articles" className="h2-grid">Grilla de articulos</h2>
      <main className="card-cont-grid">
        {info.map((x) => (
          <InfoCard tittle={x.tittle} text={x.article} imgUrl={x.imgUrl} key={x.id} />
        ))}
      </main>
    </>
  );
};

export default CardsContainer;
