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
        <Hero title={`MP<br/>Consultoría de<br/>RRHH`}
          description=""
          linkTitle="Contactar"
          linkRoute="#contacto" />

        <Products
          title={"Especializados en relaciones"}
          sectionTitle={"Nuestros servicios"}
          description="Especializados en servicios de RRHH, tanto para empresas como para personas que deseen llegar al siguiente nivel."
          linkTitle="Contactar"
          linkRoute="#contacto">
          <ProductCard
            title="Selección de Personal"
            description="Realizamos criba de candidatos, estructuramos y gestionamos informes sobre los perfiles de los puestos de trabajo, la selección y el 'onboarding' respectivo para tu empresa." />
          <ProductCard
            style={{ backgroundColor: Theme.Colors.brand }}
            title="Diagnósticos Organizacionales"
            description="Analizamos y detectamos tus puntos de mejora organizacionales para poder trabajar sobre ellos hacia una conversión a oportunidades." />
          <ProductCard
            title="Desarrollo de Talento"
            description="Te acompañamos en el proceso de gestionar y potenciar tus capacidades con el objetivo de obtener mayor éxito en tu vida profesional." />
          <ProductCard
            style={{ backgroundColor: Theme.Colors.brand }}
            title="Talleres de Habilidades Blandas"
            description="Te ayudamos a potenciar el talento de tu equipo, a través de talleres especializados en base a las necesidades de tu empresa." />
        </Products>

        <Contact
          title={"¿Necesitas contactarnos?"}
          description="Prestamos servicios presenciales en la Comunidad de Madrid.">
          <ProductCard
            title="602 565 226"
            description="Teléfono móvil"
            onClick={e => { navigate("tel://602565226") }} />
          <ProductCard
            style={{ backgroundColor: Theme.Colors.brandDark }}
            title="mariaphiacalderontejada@gmail.com"
            description="Correo electrónico" 
            onClick={e => { navigate("mailto:mariaphiacalderontejada@gmail.com") }} />
        </Contact>
        <BottomNavigationBar />
      </main>
    );
  }
}
