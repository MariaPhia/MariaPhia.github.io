import * as React from "react";
import { LinkButton } from "../../atoms";
import Theme from "../../theme";

const style = {
  backgroundColor: Theme.Colors.backgroundLight,
  width: "100%",
  minHeight: "100vh",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
};

const headingStyle = {
  fontFamily: Theme.Fonts.Family.heading,
  fontWeight: Theme.Fonts.Weight.h1,
  fontSize: Theme.Sizes.Typographies.superheadings,
  margin: "0 1rem"
};

const paragraphContainer = {
  fontFamily: Theme.Fonts.Family.heading,
  fontWeight: Theme.Fonts.Weight.p,
  fontSize: Theme.Sizes.Typographies.p,
  color: Theme.Colors.textDarkSecondary,
  margin: "0 1rem",
  display: "flex",
  gap: "2.5rem",
  flexDirection: "column",
  alignItems: "flex-start"
};

const containerStyle = {
  display: "flex",
  gap: "4rem",
  margin: "4rem",
};

export default class Hero extends React.Component {
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
    const flexDirection = "column"
    const alignItems = "flex-start"
    let array = this.props.title.split("<br/>")
    let views = []
    for (let index = 0; index < array.length; index++) {
      const textColor = (index == array.length - 1) ?  Theme.Colors.brand : Theme.Colors.textDarkPrimary
      views.push(<h1 style={{...headingStyle, color: textColor}}>{array[index]}</h1>)
        
    }
    return (
      <div style={style}>
        <div style={{...containerStyle, flexDirection, alignItems}}>
          <div style={{flex: "1.25"}}>{ views }</div>
          <div style={{...paragraphContainer, flex: "1"}}>
              <LinkButton text={this.props.linkTitle} route={this.props.linkRoute} />
          </div>
        </div>
      </div>
    );
  }
}
