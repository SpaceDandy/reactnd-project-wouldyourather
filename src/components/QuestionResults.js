import React, { Component, Fragment } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading'
import Badge from '@material-ui/core/Badge';


const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#ff6c5c',
    },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(10),
    },
    fucked: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(0, 2),
    },
}));

function QuestionResults(props) {
    const classes = useStyles();
    const { authedUser, question } = props
    console.log(question)
    const optOneVotes = question.optionOne.votes.length
    const optTwoVotes = question.optionTwo.votes.length
    const votedFor = question.optionTwo.votes.includes(authedUser)
        ? "optionOne" : "optionTwo"
    const optOnePerc = (optOneVotes / (optOneVotes + optTwoVotes) * 100)
    const optTwoPerc = (optTwoVotes / (optOneVotes + optTwoVotes) * 100)

    return (
        <Fragment>
            <div className={classes.root}>
                <h3>Results:</h3>
                <LoadingBar />
                {question.optionOne.text}
                <BorderLinearProgress
                    className={classes.margin}
                    variant="determinate"
                    color="secondary"
                    value={Math.round(optOnePerc * 100) / 100}
                />
                {optOneVotes} of {optTwoVotes + optTwoVotes} <br />
                <br />
                {question.optionTwo.text}

                <BorderLinearProgress
                    className={classes.margin}
                    variant="determinate"
                    color="secondary"
                    value={Math.round(optTwoPerc * 100) / 100}
                />

                {optTwoVotes} of {optTwoVotes + optTwoVotes}
            </div>
        </Fragment>
    );
}

function mapStateToProps({ authedUser, questions }, { qid }) {
    const question = questions[qid]
    return ({
        authedUser,
        question,
        loading: question === undefined
    })
}

export default connect(mapStateToProps)(QuestionResults)