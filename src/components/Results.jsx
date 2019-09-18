import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

class Results extends React.Component {
	render(){
		let gridElements = [];
		for (let i = 0; i < 20; i++) {
			gridElements.push(
					<Grid item xs={3}>
						<Paper>xs=6</Paper>
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

