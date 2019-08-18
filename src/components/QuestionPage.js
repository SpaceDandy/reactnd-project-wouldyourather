import React, { Component, Fragment } from 'react'
import UserCard from './UserCard'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { ANSWERED_CARD, UNANSWERED_CARD, PREVIEW_CARD } from './UserCard'


// Should I cache in the store all the questions the user has answered to save time calculating it

class QuestionPage extends Component {

    render() {
        const { type, qid } = this.props

        return (
            <Fragment>
                <LoadingBar />
                <UserCard qid={qid} type={type} />
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

    return ({
        qid,
        type,
        loading : type === null
    })
}

export default connect(mapStateToProps)(QuestionPage)