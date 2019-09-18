import React from 'react';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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
			<Container>
				<Grid 
					container
					justify="center"
				>
					<Grid item xs={1}>
						<CardMedia
							component="img"
							image="src/grad-cap.svg"
						/>
					</Grid>
				</Grid>
				<Grid	container >
					<Grid style={{textAlign:"center"}} item xs={12}>
						<Typography variant="h2" gutterBottom>
							 doctrina
						</Typography>
					</Grid>
					<Grid style={{textAlign:"center"}} item xs={12}>
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
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default MainPage;
