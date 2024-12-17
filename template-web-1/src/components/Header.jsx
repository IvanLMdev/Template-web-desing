import NavBar from "./NavBar";
import RedIcons from "./other/RedIcons";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
        <NavBar/>
      <h1 className="h1-header">Primer titulo</h1>
      <section className="banner">
        <section className="banner-section">
        <h1 className="h1-banner">Titulo en el banner</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          nulla libero assumenda est expedita amet iure mollitia hic nobis nihil
          excepturi sequi officiis aliquam cupiditate dolorem maxime deleniti
          non dolore architecto animi culpa a obcaecati sunt nisi! Ducimus
          facilis, voluptate at eos deleniti a labore, id assumenda totam
          excepturi neque quae voluptas expedita sit quos velit molestiae error
          odit consectetur?
        </p>
        <h2>texto de prueva</h2>
        <RedIcons/>
        </section>
        <section className="banner-section-2">

        </section>
      </section>
    </header>
  );
};

export default Header;
