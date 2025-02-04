import ReactImageGallery from "react-image-gallery";
import "../styles/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { image_for_gallery as images } from "./utilities/image_gallery";

const ImageGallery = () => {
  return (
    <div className="gallery-cont">
      <h2 id="images">Proyectos</h2>
      <section className="image-cont">
        <ReactImageGallery items={images} thumbnailPosition="bottom" />
      </section>
    </div>
  );
};

export default ImageGallery;
