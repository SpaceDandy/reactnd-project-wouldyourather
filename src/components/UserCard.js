import React, { Component, Fragment } from 'react'
import QuestionSelect from './QuestionSelect';
import QuestionResults from './QuestionResults';
import QuestionPreview from './QuestionPreview';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import PlayerStats from './PlayerStats';
export const UNANSWERED_CARD = "UNANSWERED_CARD"
export const ANSWERED_CARD = "ANSWERED_CARD"
export const PREVIEW_CARD = "PREVIEW_CARD"
export const STATS_CARD = "STATS_CARD"


const styles = theme => ({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        marginBottom: 30,
        width: 60,
        height: 60,
    },
});
class UserCard extends Component {

    whichType = (qid, uid) => ({
        UNANSWERED_CARD: <QuestionSelect qid={qid} />,
        ANSWERED_CARD: <QuestionResults qid={qid} />,
        PREVIEW_CARD: <QuestionPreview qid={qid} />,
        STATS_CARD : <PlayerStats uid={uid} />
    })

    render() {
        const { qid, type, classes, cardUser } = this.props

        return cardUser && (
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", alignItems: "center" }} >
                    {cardUser.name.split(" ")[0]}
                    <Avatar alt="Remy Sharp" size={100} src={cardUser.avatarURL} className={classes.bigAvatar}></Avatar>
                </div>
                <div style={{ flex: 2 }}>
                    {this.whichType(qid, cardUser.id)[type]}
                </div>
            </div>
        )
    }
}

UserCard.defaultProps = {

}

UserCard.propTypes = {

}

function mapStateToProps({ authedUser, users, questions }, { qid, type, uid }) {
    let cardUser = null
    if (type === STATS_CARD) {
        cardUser = users[uid] === undefined ? null : users[uid]
    } else {
        const askingUserId = questions[qid] === undefined ? null : questions[qid].author
        cardUser = users[askingUserId] === undefined ? null : users[askingUserId]
    }
    return ({
        cardUser,
        qid,
        type
    })
}

export default withStyles(styles)(connect(mapStateToProps)(UserCard));