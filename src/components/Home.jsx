import React from 'react';
import {$,jQuery} from 'jquery';
import Container from '@material-ui/core/Container';

import MainPage from './MainPage';
import Filter from './Filter';
import Results from './Results';

//let results = [{ "funds": 1000, "country": "Canada", "field": "engineering" }];

class Home extends React.Component {
		constructor(props){
			super(props)
			this.state = {
				searchQuery: ""
			}
		}
//	onSearch(query) {
//		$.get('http://some.url.com/search?query=' + query)
//      	.then(data => results = data);
//	}
	//
	handleOnSearch = (value) => {
		this.setState({
			searchQuery: value
		})
	}
	render() {
		let searchQueryReadySection  = [];

		if (this.state.searchQuery) {
			searchQueryReadySection.push(<Filter/>);
			searchQueryReadySection.push(<Results/>);
		}
	  return(
			<Container maxWidth="sm">
				<MainPage onSearch={this.handleOnSearch}/>
					{searchQueryReadySection}
			</Container>
	  )
	};
}

export default Home;
