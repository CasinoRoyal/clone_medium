import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import Navbar from 'components/navbar';
import UserChecker from 'components/user-checker';
import { CurrentUserProvider } from 'contexts/current-user';

const App = () => {
  return(
    <CurrentUserProvider>
      <UserChecker>
        <Router>
          <Navbar />
          <Routes />      
        </Router>
      </UserChecker>
    </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));