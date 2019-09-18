import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

let mockScholarships = [
	{
		title: "First",
		desc: "Details",
		value: 2000,
	},
	{
		title: "Second",
		desc: "Details",
		value: 2000,
	},
	{
		title: "First",
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
]

class Results extends React.Component {
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
		for (let i = 0; i < mockScholarships.length; i++) {
			if (this.passes(mockScholarships[i])) {
				gridElements.push(
					<Grid item xs={3}>
						<Paper>
							<div>
								{mockScholarships[i].title}: {mockScholarships[i].desc}
							</div>
							<div>${mockScholarships[i].value}</div>
						</Paper>
					</Grid>
				);
			}
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

