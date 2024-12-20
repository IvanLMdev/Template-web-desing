import '../styles/info-card.css'

const InfoCard = ({tittle,text,imgUrl,alt="imagen"}) => {

  return (
  <section className='card'>
    <h2 className='card-titlle'>{tittle}</h2>
    <img src={imgUrl} alt={alt} className='card-img'/>
    <p className='card-param'>{text}</p>
  </section>
  )
}

export default InfoCard