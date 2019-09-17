import React from 'react';

import Container from '@material-ui/core/Container';

import MainPage from './MainPage';
import Filter from './Filter';
import Results from './Results';

class Home extends React.Component {
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
