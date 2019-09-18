import React from 'react';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function performSearch(event) {
	if (event.key == "Enter") {
		console.log(event.target.value);
	}
};

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
		this.props.onSearch(this.state.value);
	}

	render() {
		return(
			<div>
				<h1>Scholarships</h1>
				<InputBase 
				 placeholder="Search"
				 onChange={this.handleChange}
				 onKeyPress={(e) => {
					 if (e.key === "Enter") {
						 this.handleSubmit(event);
					 }
				 }}/>
				<IconButton onClick={this.handleSubmit}>
					<SearchIcon />
				</IconButton>
			</div>
		);
	}
}

export default MainPage;
