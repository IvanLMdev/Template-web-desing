import ImageGallery from "./components/ImageGallery";
import Header from "./components/Header";
import ContFormAdress from "./components/ContFormAdress";
import Footer from "./components/Footer";
import CardsContainer from "./components/CardsContainer";
import "./styles/app.css";
import './/styles/SCROLL-ANIMATION.css'

function App() {
  return (
    <>
      <Header />
      <CardsContainer/>
      <ImageGallery />
      <ContFormAdress />
      <Footer />
    </>
  );
}

export default App;
