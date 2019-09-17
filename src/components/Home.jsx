import React from 'react';
import {$,jQuery} from 'jquery';
import Container from '@material-ui/core/Container';

import MainPage from './MainPage';
import Filter from './Filter';
import Results from './Results';

//let results = [{ "funds": 1000, "country": "Canada", "field": "engineering" }];

class Home extends React.Component {
//	onSearch(query) {
//		$.get('http://some.url.com/search?query=' + query)
//      	.then(data => results = data);
//	}

	render() {
	  return(
	  		<Container maxWidth="sm">
	  			<MainPage/>
	  			<Filter/>
	  			<Results/>
	  		</Container>
	  )
	};
}

export default Home;
