import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    render( ) {

        return (
            <div className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Nav