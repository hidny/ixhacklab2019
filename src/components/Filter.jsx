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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

let fundFilter = [
  "Title",
  "Description",
  "Value",
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
    this.setState({
      filterHelpOpen: false,
      addedFilters: newFilters,
    });
  }

	handleDelete = (index) => (event) => {
    let newFilters = this.state.addedFilters.splice(0);
    newFilters.splice(index, 1);
    this.setState({
      addedFilters: newFilters,
    });
  }
	
  render() {
		let chipsArray = [];

    chipsArray.push(
      <Chip
        icon={<FaceIcon />}
        label="Add Filter"
        onClick={this.handleClick}
      />
    );
		for (let i = 0; i < this.state.addedFilters.length; i++) {
			chipsArray.push(
          <Chip
            icon={<FaceIcon />}
            label={this.state.addedFilters[i]}
            onClick={this.handleClick}
            onDelete={this.handleDelete(i)}
          />
			);
		}
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
                  {fundFilter.map((text, index) => (
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
