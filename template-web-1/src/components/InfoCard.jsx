import '../styles/info-card.css'

const InfoCard = ({tittle,article,imgUrl}) => {
  return (
    <main className="info-card-cont">
       <section className="info-article">
          <article className="">
            <h2>{tittle}</h2>
            <p>{article}</p> 
          </article>
          <figure className="info-img-cont">
              <img src={imgUrl} alt="imagen" width={"200px"}  height={"170px"} className="info-img"/>
          </figure>
       </section>
       
        <section className="info-article">
          <figure className="info-img-cont">
              <img src={imgUrl} alt="imagen"  width={"200px"}  height={"170px"} className="info-img"/>
          </figure>
          <article>
            <h2>{tittle}</h2>
            <p>{article}</p> 
          </article>
       </section>
    </main>
  )
}

export default InfoCard