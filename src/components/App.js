import React, { Component, Fragment } from 'react';
import '../App.css';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Question from './Question';
import NewQuestion from './NewQuestion.js';
import { connect } from 'react-redux';
import { loadData } from '../actions/shared'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(loadData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            <div>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/leadboard" component={Leaderboard} />
              <Route exact path="/new" component={NewQuestion} />
              <Route path="/question/:qid" component={Question} />
            </div>
          </div>
        </Fragment>
      </Router>


    )
  }

}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
