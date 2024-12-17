import ImageGallery from "./components/ImageGallery"
import Header from "./components/Header"
import ContFormAdress from "./components/ContFormAdress"
import Footer from "./components/Footer"
import InfoCard from "./components/InfoCard"
import './styles/app.css'
import {info} from './components/utilities/info.js'

function App() {
  
  return (
    <>
      <Header/>
      <InfoCard tittle={info[0].tittle} article={info[0].article} imgUrl={info[0].imgUrl}/>
      <ImageGallery/>
      <InfoCard tittle={info[1].tittle} article={info[1].article} imgUrl={info[1].imgUrl}/>
      <ContFormAdress/>
      <Footer/> 
    </>
  )
}

export default App
