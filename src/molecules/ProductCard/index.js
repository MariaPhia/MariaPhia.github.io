import React from "react";
import Theme from "../../theme";

const style = {
	display: "flex",
	flexDirection: "column",
	gap: "1.5rem",
	background: Theme.Colors.backgroundDarkB,
	height: "30vh"
}


export default class ProductCard extends React.Component {
	onClick() {
		if (this.props.onClick !== undefined) {
			this.props.onClick()
		}
	}

	render() {
		let cursor = this.props.onClick !== undefined ? "pointer" : "auto"
		return (
			<div style={{ ...style, ...this.props.style, cursor }} onClick={this.onClick.bind(this)}>
				<div style={{
					margin: "3rem",
					marginTop: "auto"
				}}>
					<div style={{ flex: 5 }} />
					<h4 style={{
						fontFamily: Theme.Fonts.Family.heading,
						fontWeight: Theme.Fonts.Weight.h1,
						fontSize: Theme.Sizes.Typographies.h4,
						color: Theme.Colors.textLightPrimary,
						margin: 0
					}}>{this.props.title}</h4>
					<p style={{
						fontFamily: Theme.Fonts.Family.heading,
						fontWeight: Theme.Fonts.Weight.p,
						fontSize: Theme.Sizes.Typographies.p,
						color: Theme.Colors.textLightSecondary,
						margin: 0
					}}>{this.props.description}</p>
				</div>
			</div>
		);
	}
}