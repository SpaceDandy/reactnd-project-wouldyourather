import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './NewQuestion';
import QuestionResults from './QuestionResults';
import QuestionPreview from './QuestionPreview';
export const UNANSWERED_CARD = "UNANSWERED_CARD"
export const ANSWERED_CARD = "ANSWERED_CARD"
export const PREVIEW_CARD = "PREVIEW_CARD"

class UserCard extends Component {
    whichType = () => ({
         UNANSWERED_CARD : <Question />,
         ANSWERED_CARD : <QuestionResults />,
         PREVIEW_CARD : <QuestionPreview />
         })
                
    render() {
        const { qid, type } = this.props

        return (
            <div>
                {this.whichType()[type]}
            </div>
        )

    }
}

UserCard.defaultProps = {

}

UserCard.propTypes = {

}

function mapStateToProps({ }, { qid, type }) {
    return {
        qid: qid,
        type: type,
    }
}
export default connect(mapStateToProps)(UserCard)