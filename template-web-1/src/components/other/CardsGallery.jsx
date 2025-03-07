import { useContext } from "react";
import { GalleryContext } from "../SectionGallery";

const CardsGallery = ({index,src,alt}) => {

  const {useIndex,setIndex} = useContext(GalleryContext);

  function OnClick(){
    setIndex(index)
  }

  return (
    <button className="cards-gallery" onClick={OnClick}>
        <img src={src} alt={alt} className="img-card-gallery"/>
    </button>
  )
}

export default CardsGallery