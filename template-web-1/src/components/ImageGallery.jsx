import ReactImageGallery from "react-image-gallery";
import "../styles/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGallery = ({ items, text , title}) => {
  return (
    <section className="stiky-cont">
      <div className="gallery-cont">
        <section className="image-cont">
          <ReactImageGallery items={items} showThumbnails={false} />
        </section>
          <article className="article-gallery">
            <h4>{title}</h4>
            <br />
            <p>{text}</p>
          </article>
      </div>
    </section>
  );
};

export default ImageGallery;
