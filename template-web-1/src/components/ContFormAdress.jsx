import RedIcons from './other/RedIcons'
import Form from "./Form"
import '../styles/form.css'

const ContFormAdress = () => {
  return (
    <section className="all-cont-form">
        <section className="cont-adress-link">
        <div className='adress'>
            <h3>Locaciones</h3>
            <p>ubicacion</p>
            <address>calle falsa 1233 lomas falsas</address>
        </div>
        <div className="follow">
          <h4>Siguenos en redes</h4>
          <RedIcons />
          <p>texto de prueva en icons contact</p>
        </div>
      </section>
        <Form/>
    </section>
  )
}

export default ContFormAdress