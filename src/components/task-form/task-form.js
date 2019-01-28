import React, {Component} from 'react';
import {connect} from "react-redux";
import {cardsActions} from "../../store/actions/actions";

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            text: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    createTask = () => {
        const {dispatch} = this.props;
        const {username, email, text} = this.state;

        if(username, email, text) {
            const createdCard = Object.assign({}, this.state);

            dispatch(cardsActions.createCard(createdCard));

            this.setState({
                username: "",
                email: "",
                text: ""
            })
        }
    };

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        const {username, email, text} = this.state;

        return (
            <form className="col-5 pt-5">
                <div className="form-group">
                    <label htmlFor="add-name" className="text-dark">Name</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="name"
                        onChange={this.handleInputChange}
                        className="form-control"/>
                    <label htmlFor="add-email" className="mt-3 text-dark">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="email"
                        onChange={this.handleInputChange}
                        className="form-control"/>
                    <textarea
                        name="text"
                        value={text}
                        onChange={this.handleInputChange}
                        id="add-text"
                        rows="10"
                        className="mt-4 form-control text-muted">
                    </textarea>
                </div>
                <button
                    type="submit"
                    form="createForm"
                    onClick={this.createTask}
                    className="btn btn-primary form-control col-3"
                >Add task
                </button>
            </form>
        )
    }
};

function mapStateToProps(state) {
    return state
}

export default connect(
    mapStateToProps,
    null
)(TaskForm)