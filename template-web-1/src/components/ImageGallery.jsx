import ReactImageGallery from 'react-image-gallery'
import '../styles/image-gallery.css'
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGallery = () => {

    const images = [
        {
          original:"https://picsum.photos/id/1018/1000/600",
          thumbnail:"https://picsum.photos/id/1018/250/150"
        },
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        }
      ]
  return (

    <div className="gallery-cont">
      <h2>Galeria de imagenes</h2>
      <section className='image-cont'>
      <ReactImageGallery 
      items={images}
      thumbnailPosition='left'
      
      />
      </section>
    </div>
    
  )
}

export default ImageGallery