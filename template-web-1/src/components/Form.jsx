import { RiMailSendFill } from "react-icons/ri";

const Form = () => {
  return (
    <section id="contact" className="cont-form">
      <h3>Contactanos</h3>
      <form action="" className="form">
        <section className="grup-input">
          <label htmlFor="fullname">Nombre :</label>
          <input type="text" name="fullname" placeholder="Nombre completo" required/>
        </section>
        <section className="grup-input">
          <label htmlFor="phone">Telefono :</label>
          <input type="tel" name="phone" placeholder="Telefono" required/>
        </section>
        <section className="grup-input">
          <label htmlFor="email">Correo :</label>
          <input type="tel" name="email" placeholder="Correo" required/>
        </section>
        <section className="cont-text-area">
          <label htmlFor="message">Mensaje :</label>
          <textarea name="message" placeholder="Una consulta?" required></textarea>
        </section>
        <button type="submit" className="submit">
          Enviar <span className="submit-icon hidden-icon"> <RiMailSendFill /></span>
        </button>
      </form>
    </section>
  );
};

export default Form;
