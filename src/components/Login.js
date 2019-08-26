import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { setAuthedUser } from '../actions/authedUser';


const styles = {
    root: {

        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center"
    },
    formControl: {

        minWidth: 120,
    },
    selectEmpty: {
    },
};
class Login extends Component {

    state = {
        value: ''
    }
    handleChange = (e) => {
        e.preventDefault();
        const uid = e.target.value
        this.setState(() => ({
            value : uid
        }))
    }

    handleClick = (e) => {
        e.preventDefault()
        const {value} = this.state
        this.props.dispatch(setAuthedUser(value))
    }
    render() {
        const { value } = this.state
        const { users, classes } = this.props
        return (
            <div className="container">
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple">Select User</InputLabel>
                        <Select
                            value={value}
                            onChange={this.handleChange}
                        >
                            {Object.keys(users).map((uid) => (
                                <MenuItem key={uid} value={uid}> {users[uid].name} </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button disabled={value === ''} onClick={this.handleClick}>
                        Submit
                    </Button>
                </ form>
            </div>
        )
    }

}

function mapStateToProps({ users }) {
    return ({
        users
    })

}
export default withStyles(styles)(connect(mapStateToProps)(Login))