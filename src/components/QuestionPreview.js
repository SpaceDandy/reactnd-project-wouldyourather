import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionPreview extends Component {

    render() {
        const { question } = this.props


        return (
            <div>
                {question === undefined ? <div>'Not a real question'</div> :
                <div>
                <h2> Would you rather...</h2>
                <p>{question.optionOne.text}</p>
                <h3 className='center'>or</h3>
                <p>{question.optionTwo.text}</p>

                <Link to={`/question/${question.id}`}>
                    <button
                        className='btn'
                        type='submit'
                    >
                        View Poll
                    </button>
                </Link>
                </div>
                }
            </div>
        )
    }

}
function mapStateToProps({ questions }, { qid }) {
    const question = questions[qid]

    return ({
        question
    })
}

export default connect(mapStateToProps)(QuestionPreview)