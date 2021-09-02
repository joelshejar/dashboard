import React from 'react'
import {Link, NavLink} from 'react-router-dom'

class Sidebar extends React.Component{
    render(){
        return(
            <div className='sidebar'>
                <ul>
                    <NavLink activeClassName='active' exact to='/'>
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink activeClassName='active' exact to='/articles'>
                        <li>
                            Articles
                        </li>
                    </NavLink>
                    <NavLink activeClassName='active' exact to='/people'>
                        <li>
                            People
                        </li>
                    </NavLink>
                    <NavLink activeClassName='active' exact to='/books'>
                        <li>
                            Books
                        </li>
                    </NavLink>
                    <NavLink activeClassName='active' exact to='/help'>
                        <li>
                            Help & Support
                        </li>
                    </NavLink>
                </ul>
            </div>
        )
    }
}

export default Sidebar