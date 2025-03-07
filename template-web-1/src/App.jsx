
import Header from "./components/Header";
import ContFormAdress from "./components/ContFormAdress";
import SectionGallery from "./components/SectionGallery";
import Service from "./components/Service";
import "./styles/app.css";
import './/styles/SCROLL-ANIMATION.css'

function App() {
  return (
    <>
      <Header />
      <Service/>
      <SectionGallery/>
      <ContFormAdress />
    </>
  );
}

export default App;
