import React, {Component} from 'react';
import {connect} from "react-redux";

import Card from '../card';

import {cardsActions} from '../../store/actions/actions'
import Pagination from "react-js-pagination";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: false,
            activePage: 1,
            sortByEmail: false,
            sortByName: false,
            sortByStatus: false
        };
        this.onPageLoaded = this.onPageLoaded.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.sortByField = this.sortByField.bind(this);
    };

    componentDidMount() {
        this.onPageLoaded()
    }

    onPageLoaded() {
        const {sortByName, sortByEmail, sortByStatus} = this.state;
        const sortField = sortByName ? "name" : sortByEmail ? "email" : sortByStatus ? "status" : "email";

        const {dispatch} = this.props;
        dispatch(cardsActions.getCards(this.state.activePage, sortField));
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        this.onPageLoaded();
    }

    sortByField(e) {
        const {sortByName, sortByEmail, sortByStatus} = this.state;

        if (e.target.name === "name") {
            this.setState({
                sortByName: !sortByName
            })
        } else if (e.target.name === "email") {
            this.setState({
                sortByEmail: !sortByEmail
            })
        } else if (e.target.name === "status") {
            this.setState({
                sortByStatus: !sortByStatus
            })
        }
        this.onPageLoaded()
    }

    render() {
        const cards = this.props.cards.cards;
        const cardsList = cards ? cards.map((card, index) =>
            <Card
                id={cards ? cards[index].id : 0}
                key={index}
                userName={card.username}
                userEmail={card.email}
                userText={card.text}
            />
        ) : <div>Loading...</div>;

        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <button
                        name="name"
                        onClick={this.sortByField}>Name</button>
                    <button
                        name="email"
                        onClick={this.sortByField}>Email</button>
                    <button
                        name="status"
                        onClick={this.sortByField}>Status</button>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-4 mt-3">
                        {cardsList}
                    </div>
                </div>
                <nav className="d-flex justify-content-center mt-3">
                    <Pagination
                        itemClass="page-item"
                        linkClass="page-link"
                        activePage={this.state.activePage}
                        itemsCountPerPage={3}
                        totalItemsCount={this.props.cards.totalCardsCount}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {cards, pageNumber} = state;

    return {
        cards,
        pageNumber
    };
}

export default connect(
    mapStateToProps,
    null
)(CardList);