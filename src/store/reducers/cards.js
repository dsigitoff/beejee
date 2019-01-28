import * as types from '../constants/actionTypes';

const initialState = {
    sortField: "name"
};

export default function cardApp(state = initialState, action) {
    switch (action.type) {
        case types.cards.GET_CARDS_START:
            return state;
        case types.cards.GET_CARDS_SUCCESS:
            return {
                ...state,
                cards: action.cards.message.tasks,
                pageNumber: action.pageNumber,
                totalCardsCount: action.cards.message.total_task_count,
                sortField: action.sortField,
            };

        case types.cards.GET_CARDS_FAIL:
            return {
                state
            };
        case types.cards.ADD_CARD_START: {
            return {
                state
            }
        }
        case types.cards.ADD_CARD_SUCCESS: {
            return {
                ...state,
                createdCard: action.cardData
            }
        }
        case types.cards.ADD_CARD_FAIL: {
            return {
                state
            }
        }
        case types.cards.EDIT_CARD_START: {
            return state
        }
        case types.cards.EDIT_CARD_SUCCESS: {
            return {
                ...state,
                editedCard: action.cardData,
                id: action.id
            }
        }
        case types.cards.EDIT_CARD_FAIL: {
            return state
        }

        default:
            return state
    }
}