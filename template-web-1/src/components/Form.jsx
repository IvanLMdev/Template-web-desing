

const Form = () => {
  return (
    <section className="cont-form">
        <h3>Contactanos</h3>
      <form action="" className="form">
       <section className="grup-input">
            <label htmlFor="fullname">Nombre :</label>
            <input type="text" name="fullname" placeholder="Nombre completo"/> 
       </section>
       <section className="grup-input">
            <label htmlFor="phone">Telefono :</label>
            <input type="tel" name="phone" placeholder="Telefono"/> 
       </section>
       <section className="grup-input">
            <label htmlFor="email">Correo :</label>
            <input type="tel" name="email" placeholder="Correo"/> 
       </section>
       <section className="cont-text-area">
            <label htmlFor="message">Mensaje :</label>
            <textarea name="message" placeholder="Una consulta?"></textarea>
       </section>
       <button type="submit" className="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Form;
