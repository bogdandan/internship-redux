import {ADD_NOTE, DELETE_NOTE, GET_NOTES, UPDATE_NOTE} from '../constants';

const initialState = () => ({notes: {}});

const reduce = {};

reduce[GET_NOTES] = (state, action) => {
    if (Array.isArray(action.notes)) {
        const reduceNotes = (acc, note) => {
            acc[note.id] = {...note};
            return acc;
        };
        return {
            notes: action.notes.reduce(reduceNotes, {}),
        }
    } else {
        return {
            ...action.notes
        };
    }
};

reduce[ADD_NOTE] = (state, action) => {
    if (state[action.note.id]) return state;
    return {
        notes: {
            ...state.notes,
            [action.note.id]: action.note
        }
    };
};

reduce[UPDATE_NOTE] = (state, action) => ({
    ...state,
    [action.note.id]: {
        ...state[action.note.id],
        ...action.note
    }
});

reduce[DELETE_NOTE] = (state, action) => {
    if (!state.notes[action.noteId]) return state;
    const newState = {
        ...state,
        notes: {...state.notes},
    };
    delete newState.notes[action.noteId];
    return newState;
};

export default (state = initialState(), action) => {
    return reduce[action.type] ? reduce[action.type](state, action) : state;
}
