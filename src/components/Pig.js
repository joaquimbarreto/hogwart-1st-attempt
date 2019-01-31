import React from "react";

export default class Pig extends React.Component {
	state = {
		showDetails: false
	};

	onShowDetails = () => {
		this.setState({
			showDetails: !this.state.showDetails
		});
	};

	render() {
		return (
			<div className="pigTile" onClick={this.onShowDetails}>
				<h3>{this.props.pig.name}</h3>
				<img
					src={require(`../hog-imgs/${this.props.pig.name
						.toLowerCase()
						.replace(/ /gi, "_")}.jpg`)}
					alt={this.props.pig.name}
				/>
				{this.state.showDetails ? (
					<div>
						<p>{this.props.pig.specialty}</p>
						<p>
							{
								this.props.pig[
									"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
								]
							}
						</p>
						<p>{this.props.pig["highest medal achieved"]}</p>
					</div>
				) : null}
			</div>
		);
	}
}
