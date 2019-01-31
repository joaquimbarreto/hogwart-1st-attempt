import React from "react";

export default class Options extends React.Component {
	render() {
		return (
			<div>
				<div className="ui form">
					<h3>Sort By</h3>
					<div className="field">
						<select
							name="type"
							id="type"
							onChange={event => this.props.onChangeType(event.target.value)}
						>
							<option value="name">Name</option>
							<option value="weight">Weight</option>
						</select>
					</div>

					<div className="field">
						<button
							className="ui secondary button"
							onClick={this.props.onSortHogsClick}
						>
							Greased
						</button>
					</div>
				</div>
			</div>
		);
	}
}
