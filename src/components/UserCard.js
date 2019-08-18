import React, { Component } from 'react'
import QuestionSelect from './QuestionSelect';
import QuestionResults from './QuestionResults';
import QuestionPreview from './QuestionPreview';
export const UNANSWERED_CARD = "UNANSWERED_CARD"
export const ANSWERED_CARD = "ANSWERED_CARD"
export const PREVIEW_CARD = "PREVIEW_CARD"

class UserCard extends Component {
    
    whichType = (qid) => ({
         UNANSWERED_CARD : <QuestionSelect qid={qid} />,
         ANSWERED_CARD : <QuestionResults qid={qid}/>,
         PREVIEW_CARD : <QuestionPreview qid={qid} />
         })
                
    render() {
        const { qid, type } = this.props

        return (
            <div>
                {this.whichType(qid)[type]}
            </div>
        )
    }
}

UserCard.defaultProps = {

}

UserCard.propTypes = {

}

export default UserCard