import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';

class App extends Component {

  render() {
    return (
      <Router>


        <Route path="/" Component={Dashboard} />
        <Route path="/leadboard" Component={Leaderboard} />
        <Route path="/new" Component={NewQuestion} />
        <Route path="/question/:qid" Component={Question} />
      </Router>

    )
  }

}

export default App;
