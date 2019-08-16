import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';
import UserCard, { UNANSWERED_CARD, ANSWERED_CARD, PREVIEW_CARD }
    from './UserCard';

const AUTHED_USER = "sarahedo"

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { tabIndex: 0 };
    }

    render() {
        const { userAnswered, userUnanswered } = this.props;
        const authedUser = AUTHED_USER

        console.log("ALL QUESTIONS")
        console.log(userAnswered)
        console.log(userUnanswered)

        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Answered</Tab>
                        <Tab>UnAnswered</Tab>
                    </TabList>
                    <TabPanel>
                        fuck
                    <ul>
                            {userAnswered.map((qid, answer) => {
                                return (
                                    <li>
                                        <UserCard qid={qid} type={PREVIEW_CARD} />
                                    </li>
                                )
                            })}
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        
                    <ul>
                            {userUnanswered.map((qid) => {
                                return (
                                    <li key={qid}>
                                        <UserCard qid={qid} type={PREVIEW_CARD}  />
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

function mapStateToProps({ authedUser, questions }) {
    
    const userAnswered = []
    const userUnanswered = []
    Object.entries(questions).map(([qid, question]) => {
        question.option1Answers.includes(authedUser) 
            ? userAnswered.push(qid) : userUnanswered.push(qid)
    })

    return {
        userAnswered,
        userUnanswered,
        authedUser,
    }
}
Dashboard.defaultProps = {
    
}
Dashboard.propTypes = {

}

export default connect(mapStateToProps)(Dashboard)