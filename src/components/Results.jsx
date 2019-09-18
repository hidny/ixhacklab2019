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
	render(){
		let gridElements = [];
		for (let i = 0; i < mockScholarships.length; i++) {
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

