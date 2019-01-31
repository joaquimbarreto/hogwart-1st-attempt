import React, { Component } from "react";

import Pig from "./Pig";

export default class PigList extends Component {
	render() {
		return (
			<div>
				{this.props.pigs.map(singlePig => {
					return (
						<Pig
							key={singlePig.name}
							pig={singlePig}
						/>
					);
				})}
			</div>
		);
	}
}
