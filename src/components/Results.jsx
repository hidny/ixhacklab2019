import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import * as $ from 'jquery';

let mockScholarships = [
	{
		title: "Title",
		desc: "University Name",
		value: 2000,
	},
	{
		title: "Second",
		desc: "Details",
		value: 2000,
	},
	{
		title: "Title",
		desc: "Description",
		value: 2000,
	},
	{
		title: "Third",
		desc: "Value",
		value: 2000,
	},
	{
		title: "Title",
		desc: "Money",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
]

class Results extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			itemDisplayLimit: 5,
			currentDisplayCount: 0
		}
	}

	onReceiveScholarships = (data) => {
		debugger;
	}
	componentDidMount() {
		$.ajax({
			url: "http://127.0.0.1:5000",
			success: this.onReceiveScholarships
		});
	}

	handleEnter = (index) => (event) => {
		mockScholarships[index].finishedAnimation = true
		this.setState(this.state)
	}

	hasSpace = (index) => {
		return (this.state.currentDisplayCount <= this.state.itemDisplayLimit) && (index == 0 || mockScholarships[index-1].finishedAnimation)
	}

	passes(scholarship) {
		let result = false;
		result = scholarship
				.title
				.toLowerCase()
				.includes(this.props.query.toLowerCase()) || 
				scholarship
				.desc
				.toLowerCase()
				.includes(this.props.query.toLowerCase());
		return result;
	}

	render(){
		let gridElements = [];
		this.state.currentDisplayCount = 0
		for (let i = 0; i < mockScholarships.length && this.hasSpace(i); i++) {
			this.state.currentDisplayCount++;
			gridElements.push(
				<Grid item xs={3}>
					<Zoom in={true} onEntered={this.handleEnter(i)} timeout={100}>
						<Paper>
							<div>
								<Typography variant="h6">
									{mockScholarships[i].title}
								</Typography>
							</div>
							<div>
								<Typography variant="subtitle1">
									{mockScholarships[i].desc}
								</Typography>
							</div>
							<div>
								<Typography variant="subtitle2">
									${mockScholarships[i].value}
								</Typography>
							</div>
						</Paper>
					</Zoom>
				</Grid>
			);
		}
		return (
			<Container maxWidth="sm">
				<Grid container spacing={3}>
					{gridElements}
				</Grid>
			</Container>
		);
	};
}
export default Results;

