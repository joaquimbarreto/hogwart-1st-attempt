import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigList from "./PigList";
import Options from "./Options";

class App extends Component {
	constructor() {
		super();

		this.state = {
			pigs: []
		};
	}

	componentDidMount() {
		this.setState({
			pigs: hogs
		});
	}

	handleChangeType = value => {
		if (value === "name") {
			let newPigs = this.state.pigs.sort((a, b) =>
				a[value].localeCompare(b[value])
			);
			this.setState({ pigs: newPigs });
		} else if (
			value ===
			"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
		) {
			let newPigs = this.state.pigs.sort((a, b) => a[value] - b[value]);
			this.setState({ pigs: newPigs });
		}
	};

	handleSortHogsClick = () => {
		const newHogs = this.state.pigs.filter(singlePig => {
			if (singlePig.greased === true) {
				return singlePig;
			}
		});

		this.setState({
			pigs: newHogs
		});
	};

	render() {
		return (
			<div className="App">
				<Nav />
				<Options
					onChangeType={this.handleChangeType}
					onSortHogsClick={this.handleSortHogsClick}
				/>
				<PigList pigs={this.state.pigs} />
			</div>
		);
	}
}

export default App;
