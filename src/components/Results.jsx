import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

let Results = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>xs=12</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>xs=6</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>xs=3</Paper>
				</Grid>
			</Grid>
		</Container>
	)
};
export default Results;

