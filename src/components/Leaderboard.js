import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard, { STATS_CARD } from './UserCard';

class Leaderboard extends Component {

    render() {
        const { sortedUsers, users } = this.props
        return (
            <div>
                {sortedUsers.map((uid) => (
                    <UserCard uid={uid} type={STATS_CARD} />
                    ))}
            </div>
        )
    }
}

function mapStateToProps({ users, questions }) {
    const sortedUsers = users !== undefined ? Object.keys(users).sort((uidA, uidB) => {
        let aleng = Object.keys(users[uidA].answers).length + users[uidA].questions.length
        let bleng = Object.keys(users[uidB].answers).length + users[uidB].questions.length
        return bleng - aleng
    }) : null


    return ({
        users,
        sortedUsers,
        questions,
    })
}

export default connect(mapStateToProps)(Leaderboard)