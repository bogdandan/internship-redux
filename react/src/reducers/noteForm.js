import {ON_NOTE_TEXT_CHANGE, RESET_NOTE_FORM} from '../constants';

const initialState = () => ({
        note: {
            text: ''
        }
    }
);

const reduce = {};

reduce[ON_NOTE_TEXT_CHANGE] = (state, action) => ({
        note: {
            ...state.note,
            text: action.text
        }
    }
);

reduce[RESET_NOTE_FORM] = initialState;

export default (state = initialState(), action) => {
    return reduce[action.type] ? reduce[action.type](state, action) : state;
}
