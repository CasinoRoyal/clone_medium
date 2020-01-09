import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import Navbar from 'components/navbar';
import { CurrentUserProvider } from 'contexts/current-user';

const App = () => {
  return(
    <CurrentUserProvider>
      <Router>
        <Navbar />
        <Routes />      
      </Router>
    </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));