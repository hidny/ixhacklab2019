import React from 'react';

import Container from '@material-ui/core/Container';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

class Home extends React.Component {
  render() {
    return(
      <Container maxWidth="sm">
        hi
      </Container>
    )
  };
}


export default Home;