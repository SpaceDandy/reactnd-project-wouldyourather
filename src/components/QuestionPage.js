import React, { Component, Fragment } from 'react'
import UserCard from './UserCard'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { ANSWERED_CARD, UNANSWERED_CARD, PREVIEW_CARD } from './UserCard'
import { Redirect } from 'react-router-dom'


// Should I cache in the store all the questions the user has answered to save time calculating it

class QuestionPage extends Component {

    render() {
        const { type, qid, bad_question } = this.props

        return (
            <Fragment>
                { bad_question === true ? <Redirect to="/ErrorPage"/> :
                <UserCard qid={qid} type={type} /> }
            </Fragment>
        )
    }

}

function mapStateToProps({ questions, authedUser }, props) {
    const { qid } = props.match.params
    const question = questions[qid]
    
    let type = null
    if (question) {
        type = (question.optionOne.votes.includes(authedUser) ||
            question.optionTwo.votes.includes(authedUser)) ? ANSWERED_CARD : UNANSWERED_CARD
    }
    const bad_question = question === undefined ? true : false
    return ({
        qid,
        type,
        bad_question
    })
}

export default connect(mapStateToProps)(QuestionPage)