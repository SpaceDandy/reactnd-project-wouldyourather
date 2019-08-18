import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { Link } from 'react-router-dom'
import { addAnswer, resetAnswer } from '../actions/questions'
import { _saveQuestionAnswer } from '../_DATA'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



class QuestionSelect extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : ""
        }
    }

    handleChange = (e, val) => {
        e.preventDefault()
        this.setState((currentState) => ({
            value: val
        }))
    }

    emptyInput = () => {
        return !(this.state.value !== '' && (this.state.value === "1"
            || this.state.value === "2"))
    }

    handleClick = (e, value) => {
        e.preventDefault()
        const optionKey = (this.state.value === "1") ? "optionOne" : "optionTwo"
        this.props.dispatch(addAnswer(this.props.question.id, optionKey, this.props.authedUser))
        console.log(this.props.authedUser)
        const bs = {
            qid : this.props.question.id,
            answer : optionKey,
            authedUser : this.props.authedUser,
        }
        _saveQuestionAnswer(bs)
            .catch(() => {
                this.props.dispatch(
                    resetAnswer(this.props.question.id, optionKey, this.props.authedUser)
                )
            })
    }

    render() {
        const { question } = this.props
        return (
            <Fragment>
                <LoadingBar />

                {question === undefined ? <div>'Not a real question'</div> :
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Would you rather</FormLabel>
                            <RadioGroup aria-label="position" name="position" value={this.state.value}
                                onChange={this.handleChange} col="True">
                                <FormControlLabel
                                    value="1"
                                    control={<Radio color="primary" />}
                                    label={question.optionOne.text}
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="2"
                                    control={<Radio color="primary" />}
                                    label={question.optionTwo.text}
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                            <Button disabled={this.emptyInput()} onClick={this.handleClick}>
                                Submit
                            </Button>
                        </FormControl>

                    </div>
                }
            </Fragment>
        )
    }

}

function mapStateToProps({ questions, authedUser }, { qid }) {
    const question = questions[qid]
    return ({
        question,
        authedUser,
        loading: question === undefined
    })
}

export default connect(mapStateToProps)(QuestionSelect)