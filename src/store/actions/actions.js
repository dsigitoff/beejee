import * as types from '../constants/actionTypes';
import {LOGIN} from '../constants/actionTypes';

import BackendService from '../../services/backendService';

const backendService = new BackendService();

export const login = (login, password) => ({
    type: LOGIN,
    payload: {
        login,
        password
    }
});

export const cardsActions = {getCards, createCard, editCard};

// Получить карты
function getCards(pageNumber, sortField) {
    return dispatch => {
        dispatch(request(pageNumber));

        backendService
            .getCards(pageNumber, sortField)
            .then(
                cards => {
                    dispatch(success(cards, pageNumber, sortField));
                },
                error => {
                    dispatch(fail(error, pageNumber))
                }
            )
    };

    function request(pageNumber) {
        return {type: types.cards.GET_CARDS_START, pageNumber};
    }

    function success(cards, pageNumber, sortField, sortDirection) {
        return {type: types.cards.GET_CARDS_SUCCESS, cards, pageNumber, sortField, sortDirection};
    }

    function fail(error, pageNumber) {
        return {type: types.cards.GET_CARDS_FAIL, error, pageNumber};
    }
}

// Создать карту
function createCard(cardData) {
    return dispatch => {
        dispatch(request());

        backendService
            .createCard(cardData)
            .then(
                res => {
                    dispatch(success(res.message))
                },
                error => {
                    dispatch(fail(error))
                }
            )
    };

    function request() {
        return {
            type: types.cards.ADD_CARD_START
        }
    }

    function success(cardData) {
        return {
            type: types.cards.ADD_CARD_SUCCESS,
            cardData
        }
    }

    function fail(error) {
        return {
            type: types.cards.ADD_CARD_FAIL,
            error
        }
    }
}

// Редактировать карту
function editCard(id, cardData) {
    return dispatch => {
        dispatch(request());

        backendService
            .editCard(id, cardData)
            .then(
                res => {
                    dispatch(success(id, cardData))
                },
                error => {
                    dispatch(fail(error))
                }
            )
    };

    function request() {
        return {
            type: types.cards.EDIT_CARD_START
        }
    }

    function success(id, cardData) {
        return {
            type: types.cards.EDIT_CARD_SUCCESS,
            id,
            cardData
        }
    }

    function fail(error) {
        return {
            type: types.cards.EDIT_CARD_FAIL,
            error
        }
    }
}