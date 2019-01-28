import React from 'react';

import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="https://beejee.ru/">BeeJee</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home <span
                            className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addtask/" className="nav-link">Add task</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login/" className="nav-link">Log in</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header
