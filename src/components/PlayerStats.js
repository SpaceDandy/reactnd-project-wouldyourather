import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlayerStats extends Component {

    render( ) {
        const {user} = this.props

        return (
            <div>  
                <div> Questions Asked : {user.questions.length} </div>
                <div> Questions Answered : {Object.keys(user.answers).length} </div>
            </div>
        )
    }

}


function mapStateToProps({users}, {uid}){
    const user = users[uid] === undefined ? null : users[uid]
    return ({
        user
    })
}
export default connect(mapStateToProps)(PlayerStats)