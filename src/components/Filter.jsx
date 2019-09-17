import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Filter extends React.Component {

	filterResults(filter, value) {
		return () => alert (filter + "=" + value)
	}

	render() {
		return (
			<div >
				<Drawer
					variant="permanent"
					anchor="left"
				>
					<Divider />
					<ExpansionPanel>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="funds-panel-content"
							id="funds-panel-header"
						>
							Funds
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<List>
								{['$1k', '$10k', '$100k'].map((text, index) => (
									<ListItem button key={text} onClick={this.filterResults("funds", text)}>
									<ListItemText primary={text} />
									</ListItem>
								))}
							</List>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="field-panel-content"
							id="fields-panel-header"
						>
							Field
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<List>
								{['Arts', 'Engineering', 'Biology'].map((text, index) => (
									<ListItem button key={text} onClick={this.filterResults("field", text)}>
									<ListItemText primary={text} />
									</ListItem>
								))}
							</List>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="country-panel-content"
							id="country-panel-header"
						>
							Country
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<List>
								{['US', 'Canada', 'EU'].map((text, index) => (
									<ListItem button key={text} onClick={this.filterResults("country", text)}>
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

