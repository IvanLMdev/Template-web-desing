import '../../styles/card-service.css'

const CardService = ({src,title,text}) => {
  return (
    <div className='card-serv'>
        <img src={src} alt="imagen de un servicio ofrecido por nosotros" className='img-card-serv' />
        <section>
        <h4>{title}</h4>
        <p>{text}</p>
        </section>
    </div>
  )
}

export default CardService