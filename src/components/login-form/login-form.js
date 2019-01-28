import React, {Component} from 'react';
import {connect} from "react-redux";

import {login} from "../../store/actions/actions";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: ""
        };

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleLogin = () => {
        this.props.login(this.state.user, this.state.password);
    };

    render() {

        return (
            <form className="col-5 pt-5" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                    <label className="mt-3 text-dark">Enter your login</label>
                    <input
                        type="text"
                        name="user"
                        aria-describedby="emailHelp"
                        onChange={this.handleValueChange}
                        placeholder="login"
                        className="form-control"/>
                    <label className="mt-3 text-dark">Enter password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleValueChange}
                        placeholder="password"
                        className="form-control"/>
                </div>
                <button type="submit" onClick={this.handleLogin} className="btn btn-primary mt-3 col-3">Send</button>
            </form>
        )
    }
}

export default connect(
    null,
    {login}
)(LoginForm)