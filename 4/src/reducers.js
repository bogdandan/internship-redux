const {combineReducers} = require('redux');
const constants = require('./constants');

function listenerReducer(state = {wsOpen: false}, action) {
    if (action.type === constants.OPEN_SUCCESS) {
        return {
            ...state,
            wsOpen: true,
        }
    }
    return state;
}

function noteReducer(state = {}, action) {
    switch (action.type) {
        case constants.ADD_NOTE:
            if (state[action.note.id]) return state;
            return {
                ...state,
                [action.note.id]: action.note
            };
        case constants.UPDATE_NOTE:
            return {
                ...state,
                [action.note.id]: {
                    ...state[action.note.id],
                    ...action.note
                }
            };
        case constants.DELETE_NOTE: {
            if (!state[action.noteId]) return state;
            const newState = {...state};
            delete newState[action.noteId];
            return newState;
        }
        case constants.NOTE_ERROR:
            return state;
        default:
            return state;
    }
}

module.exports = combineReducers(
    {
        listener: listenerReducer,
        note: noteReducer,
    }
);
