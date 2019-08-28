import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../index.css';
import UserCard, { PREVIEW_CARD }
    from './UserCard';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }

    render() {
        const { userAnswered, userUnanswered } = this.props;

        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>UnAnswered</Tab>
                        <Tab>Answered</Tab>
                    </TabList>

                    <TabPanel>
                        <ul>
                            {userUnanswered.map((qid) => {
                                return (
                                    <li key={qid}>
                                        <UserCard qid={qid} type={PREVIEW_CARD} />
                                    </li>
                                )
                            })}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul>
                            {userAnswered.map((qid, answer) => {
                                return (
                                    <li key={qid}>
                                        <UserCard qid={qid} type={PREVIEW_CARD} />
                                    </li>
                                )
                            })}
                        </ul>
                    </TabPanel>
                </Tabs>

            </div>
        )
    }

}

function mapStateToProps({ authedUser, questions, users }) {

    let userAnswered = []
    let userUnanswered = []
    Object.entries(questions).map(([qid, question]) => {
        (question.optionOne.votes.includes(authedUser) ||
            question.optionTwo.votes.includes(authedUser))
            ? userAnswered.push(qid) : userUnanswered.push(qid)
    })
    userAnswered = userAnswered.sort((a, b) => {
        return questions[b].timestamp - questions[a].timestamp
    })

    userUnanswered = userUnanswered.sort((a, b) => {
        return questions[b].timestamp - questions[a].timestamp
    })

    return {
        userAnswered,
        userUnanswered,
        authedUser,
        users,
    }
}

Dashboard.defaultProps = {

}
Dashboard.propTypes = {

}

export default connect(mapStateToProps)(Dashboard)