import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion, removeQuestion } from '../actions/questions'
import { formatQuestion, _saveQuestion } from '../_DATA'
import { addQuestionToUser } from '../actions/users';

class NewQuestion extends Component {
    state = {
        optOneText: '',
        optTwoText: '',
    }
    handleChange = (e) => {
        e.preventDefault()
        let optName = e.target.name
        let optValue = e.target.value
        this.setState((currentState) => ({
            ...currentState,
            [optName]: optValue
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { optOneText : optionOneText , optTwoText : optionTwoText} = this.state
        const question = formatQuestion({ optionOneText, optionTwoText, author: this.props.authedUser })
        this.props.dispatch(addQuestion(question))
        console.log(question)
        this.props.dispatch(addQuestionToUser(this.props.authedUser, question.id))

        this.setState({
            optOneText : '',
            optTwoText : '',
        })

        _saveQuestion(question)
            .catch(()=>{
                this.props.dispatch(removeQuestion(question.id))
            })

    }
    render() {
        const { optOneText, optTwoText } = this.state
        return (
            <div>
                <h3> New Question </h3>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        value={optOneText}
                        name="optOneText"
                        onChange={this.handleChange}
                        placeholder="Option One"
                        className='text-area'
                        maxLength={100} />
                    <p>OR</p>
                    <textarea
                        value={optTwoText}
                        name="optTwoText"
                        onChange={this.handleChange}
                        placeholder="Option Two"
                        className='text-area'
                        maxLength={100} /> <br/>
                    <button
                        className='btn'
                        type='submit'
                        disabled={optOneText === '' || optTwoText === ''}>
                        submit
                </button>
                </form>

            </div >
        )
    }

}

function mapStateToProps({ authedUser }) {
    return ({
        authedUser
    })
}

export default connect(mapStateToProps)(NewQuestion);