import ImageGallery from "./ImageGallery";
import CardsGallery from "./other/CardsGallery";
import { image_gallery } from "./utilities/image_gallery";
import { card_gallery as data } from "./utilities/card_gallery";
import "../styles/section-gallery.css";
import { createContext } from "react";
import { useState } from "react";

export const GalleryContext = createContext();

const SectionGallery = () => {

  const info = [...image_gallery];
  
  const [useIndex,setIndex] = useState(0);

  return (
      <GalleryContext.Provider value={{useIndex,setIndex}}>
        <section className="container">
      <section>
        <header className="proyec-header" id="proyectos">
          <h2>Proyectos</h2>
        </header>
        <section className="all-gallery-cont">
          <section className="cards-gallery-cont">
            {data.map((x) => (
              <CardsGallery key={x.key} index={x.key} src={x.src} alt={x.alt} />
            ))}
          </section>
          <ImageGallery
            items={info[useIndex]}
            text={data[useIndex].text}
            title={data[useIndex].title}
          />
        </section>
      </section>
    </section>
      </GalleryContext.Provider>
  );
};

export default SectionGallery;
