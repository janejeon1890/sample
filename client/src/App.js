import React, { Component } from 'react';
import './App.css';

import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Switch } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import client from './apolloClient';
import { UserDashboard, LocationDashboard } from './pages';


class App extends Component {

  render() {
    const { classes } = this.props;
    
    return (
      <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={UserDashboard}/>
            <Route exact={true} path="/location" component={LocationDashboard}/>
          </Switch>
        </Router>
      </ApolloProvider>
      </div>
    );
  }
}

export default App;

