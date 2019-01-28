import React, {Component} from 'react';
import {connect} from "react-redux";

import './card.css';

import {cardsActions} from "../../store/actions/actions";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultChecked: false,
            editMode: false,
            card: {
                status: 0,
                text: ""
            }
        };
        this.checked = this.checked.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveEditedTask = this.saveEditedTask.bind(this)
    }

    saveEditedTask() {
        const {dispatch} = this.props;
        dispatch(cardsActions.editCard(this.props.id, this.state.card));

        this.setState({
            editMode: !this.state.editMode
        })
    }

    checked() {
        this.setState({
            defaultChecked: !this.state.defaultChecked
        });
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode,
            id: this.props.id
        })
    }

    handleInputChange(e) {
        this.setState({
            card: {
                text: e.target.value
            }
        });
    };

    render() {

        const {userName, userEmail, userText, username, password} = this.props;
        const result = !(username === "admin" && password === "123");

        return (
            this.state.editMode ? [
                    <div key="123">
                        <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title m-0"><b>{userName}</b></h5>
                                <p className="card-email text-primary">{userEmail}</p>
                                <div className="card-text mt-3">
                                <textarea
                                    name="text"
                                    rows="10"
                                    onChange={this.handleInputChange}
                                    className="mt-4 form-control text-muted"/>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-left alig-items-center">
                                        <input
                                            type="checkbox"
                                            onChange={this.checked}
                                            defaultChecked={this.state.defaultChecked}
                                            className="mr-2 mt-1"/>
                                        <span>Checked</span>
                                    </div>
                                    <a
                                        href=""
                                        onClick={this.saveEditedTask}
                                        className="btn btn-secondary mt-2">Save task
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ] :
                [<div className="card mt-4" key="123124">
                    <div className="card-body">
                        <h5 className="card-title m-0"><b>{userName}</b></h5>
                        <p className="card-email text-primary">{userEmail}</p>
                        <p className="card-text mt-3">
                            {userText}
                        </p>
                        <div className="d-flex justify-content-center align-items-center">
                            <button
                                disabled={result}
                                onClick={this.toggleEditMode}
                                className="btn btn-secondary ml-3">edit
                            </button>
                        </div>
                    </div>
                </div>]
        )
    }
}

const mapStateToProps = state => {
    return state.login
};

export default connect(
    mapStateToProps,
    null
)(Card)