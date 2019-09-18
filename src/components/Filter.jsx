import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Search from "@material-ui/icons/Search";
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

let filterList = [
  "Title",
  "Field",
  "Amount",
];
class Filter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			addedFilters: [],
			filterHelpOpen: false
		};
	}
	filterResults = (filter, value) =>  {
    return () => alert(filter + "=" + value);
  }
	handleClick = () => {
		this.setState({filterHelpOpen:true});
  }	
  
  handleOnFilterClick = (text) => (event) => {
    let newFilters = this.state.addedFilters.splice(0);
    newFilters.push(text);
		let filterValue = prompt("Please enter a value for " + text);
		this.state.filters = this.state.filters || {};
		this.state.filters[text] = filterValue;

		this.props.handleOnFilterClick(text, filterValue);
		this.setState({
			filters: this.state.filters,
      filterHelpOpen: false,
      addedFilters: newFilters,
    });
  }

  handleOnRangeClick = () => {
		this.setState({filterHelpOpen:false});
  }	

	handleDelete = (index, name) => (event) => {
    let newFilters = this.state.addedFilters.splice(0);
    newFilters.splice(index, 1);
		this.props.onDeleteFilter(name);
    this.setState({
      addedFilters: newFilters,
    });
  }
	
  render() {
		let chipsArray = [];

		for (let i = 0; i < this.state.addedFilters.length; i++) {
			chipsArray.push(
          <Chip
            //icon={<FaceIcon />}
						clickable
            label={this.state.addedFilters[i]}
            onClick={this.handleClick}
            onDelete={this.handleDelete(i, this.state.addedFilters[i])}
          />
			);
		}
    chipsArray.push(
      <Chip
				color="primary"
				icon={<Search/>}
        label="Add Filter"
        onClick={this.handleClick}
      />
		);

		let rangeSection = (
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                Range
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item xs={3}>
                    <TextField
                      label="Minimum"
                      //value={values.name}
                      //onChange={handleChange('name')}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      label="Maximum"
                      //value={values.name}
                      //onChange={handleChange('name')}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Button 
                      variant="contained" 
                      onClick={this.handleOnRangeClick}
                    >
                      Apply
                    </Button>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
		);
    return (
      <div>
        <div>
					{chipsArray}
        </div>
					<Drawer 
						anchor="left"
						open={this.state.filterHelpOpen}
					>
            <Divider />
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                Filters
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List>
                  {filterList.map((text, index) => (
                    <ListItem
                      button
                      key={text}
                      onClick={this.handleOnFilterClick(text)}
                    >
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        </Drawer>
      </div>
    );
  }
}

export default Filter;

