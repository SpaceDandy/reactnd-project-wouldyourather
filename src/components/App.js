import React, { Component, Fragment } from 'react';
import '../App.css';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import Login from './Login';
import ErrorPage from './ErrorPage'
import { connect } from 'react-redux';
import { loadData } from '../actions/shared'
import { unSetAuthedUser } from '../actions/authedUser';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(loadData())
  }

  onClick = (e) => {
    e.preventDefault()
    this.props.dispatch(unSetAuthedUser())
  }
  render() {
    const { authedUser, users } = this.props

    return (
      <Router>
        {authedUser === null || authedUser === undefined ||
          (!Object.keys(authedUser).length) ? <Login /> :
          <div className='container'>
            <div className="toprow">
              <div>
                Hello, {users[authedUser].name}
                <button onClick={this.onClick}>
                  Logout
                </button>
              </div>
              <Nav />
            </div>
            <div>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="/add" component={NewQuestion} />
                <Route exact path="/question/:qid" component={QuestionPage} />
                <Route component={ErrorPage} />
              </Switch>
            </div>
          </div>
        }
      </Router>
    )
  }

}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(App)
