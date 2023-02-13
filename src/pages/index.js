import * as React from "react";
import { BottomNavigationBar, ProductCard, TopNavigationBar } from "../molecules";
import { Contact, Hero, Products } from "../templates";
import { navigate } from "gatsby";
import Theme from "../theme"

const mainStyles = {
  backgroundColor: Theme.Colors.backgroundSecondary,
  width: "100%",
  height: "100%"
};

export default class LandingPage extends React.Component {
  render() {
    return (
      <main style={mainStyles}>
        <TopNavigationBar />
        <Hero title={`Estamos<br/>para<br/>ayudarte`}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          linkTitle="Contactar"
          linkRoute="#contacto" />

        <Products
          title={"Especializados en relaciones"}
          sectionTitle={"Nuestros servicios"}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          linkTitle="Contactar"
          linkRoute="#contacto">
          <ProductCard
            title="Hello world"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <ProductCard
            style={{ backgroundColor: Theme.Colors.brand }}
            title="Hello world"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </Products>

        <Contact
          title={"¿Necesitas contactarnos?"}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
          <ProductCard
            title="636 62 72 71"
            description="Teléfono móvil"
            onClick={e => { navigate("tel://689717646") }} />
          <ProductCard
            style={{ backgroundColor: Theme.Colors.brandDark }}
            title="sample@mail.com"
            description="Correo electrónico" 
            onClick={e => { navigate("mailto:sample@mail.com") }} />
        </Contact>
        <BottomNavigationBar />
      </main>
    );
  }
}
