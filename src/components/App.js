import React, { Component, Fragment } from 'react';
import '../App.css';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import Login from './Login';
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
    console.log("OH FUGG", (authedUser !== undefined && authedUser !== null), authedUser)
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
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/leaderboard" component={Leaderboard} />
              <Route exact path="/new" component={NewQuestion} />
              <Route exact path="/question/:qid" component={QuestionPage} />
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
