import React from "react";
import Theme from "../../theme";

const style = {
    fontFamily: Theme.Fonts.Family.heading,
    fontWeight: Theme.Fonts.Weight.bold,
    textAlign: "center",
    fontSize: "1rem",
    textDecorationColor: Theme.Colors.highlightA,
    padding: "0",
    textDecoration: "none",
    textDecoration: "none"
}

export default class LinkButton extends React.Component {
    render() {
        return (
            <div style={style}>
                <a style={{ ...this.props.style, ...style, ...{color: Theme.Colors.brand} }}
                    href={this.props.route}>
                    {this.props.text}
                </a>
            </div>
        );
    }
}