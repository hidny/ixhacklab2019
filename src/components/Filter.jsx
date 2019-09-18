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


class Filter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			chips: [1,2]
		};
	}
	filterResults = (filter, value) =>  {
    return () => alert(filter + "=" + value);
  }
	handleClick = () => {}	
	handleDelete = () => {}
  render() {
		let chipsArray = [];

		for (let i = 0; i < this.state.chips.length; i++) {
			chipsArray.push(
          <Chip
            icon={<FaceIcon />}
            label="Add Filter"
            onClick={this.handleClick}
            onDelete={this.handleDelete}
          />
			);
		}
    return (
      <div>
        <div>Add Filter</div>
        <div>
					{chipsArray}
        </div>
        <Drawer variant="permanent" anchor="left">
          <Divider />
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              Funds
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List>
                {["$1k", "$10k", "$100k"].map((text, index) => (
                  <ListItem
                    button
                    key={text}
                    onClick={this.filterResults("funds", text)}
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

