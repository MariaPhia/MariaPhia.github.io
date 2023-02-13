import * as React from "react";
import { LinkButton } from "../../atoms";
import Theme from "../../theme";
import logo from "./logo.svg"

const style = {
  position: "relative",
  backgroundColor: Theme.Colors.backgroundBrand,
  width: "100%",
  minHeight: "100vh",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
};

const containerStyle = {
  display: "flex",
  gap: "4rem",
  margin: "8rem 4rem",
  // minHeight: "0vh",
  zIndex: 999
};

const iconStyle = {
  position: "absolute",
  width: "auto",
  top: 0,
  left: 0,
  width: "60vh"
}

export default class Contact extends React.Component {
  state = { width: 0 };

  componentDidMount() {
    const { innerWidth: width } = window;
    this.setState({ width });
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const { innerWidth: width } = window;
    this.setState({ width });
  }

  render() {
    const isMobile = this.state.width < 1020
    const flexDirection = isMobile ? "column" : "row"
    const alignItems = "center"

    return (
      <div id="contacto" style={style}>
        <img
          style={{ ...iconStyle }}
          src={logo}
        />
        <div style={{ ...containerStyle, flexDirection, alignItems }}>
          <div style={{ 
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "3rem",
            flex: 1
          }}>
            <h2 style={{
              fontFamily: Theme.Fonts.Family.heading,
              fontWeight: Theme.Fonts.Weight.h1,
              fontSize: Theme.Sizes.Typographies.h2,
              color: Theme.Colors.textLightPrimary,
              margin: 0
            }}>{this.props.title}</h2>
            <p style={{
              fontFamily: Theme.Fonts.Family.heading,
              fontWeight: Theme.Fonts.Weight.p,
              fontSize: Theme.Sizes.Typographies.p,
              color: Theme.Colors.textLightSecondary,
              margin: 0
            }}>{this.props.description}</p>
          </div>
          <div style={{ 
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: "100%",
            flex: 1
          }}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
