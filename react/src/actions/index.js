import {ADD_NOTE, DELETE_NOTE, GET_NOTES, ON_NOTE_TEXT_CHANGE, RESET_NOTE_FORM, UPDATE_NOTE} from '../constants';

const url = 'http://localhost:3000';

export const getNotes = () => async (dispatch) => {
    try {
        const notes = await (fetch(`${url}/note`,
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }).then(r => r.json()));

        dispatch({
            type: GET_NOTES,
            notes: notes.notes,
        });
    } catch (e) {
        console.error(e);
    }
};

export const addNote = (note) => async dispatch => {
    try {
        const response = await (fetch(`${url}/note`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(note),
            }).then(r => r.json()));

        dispatch({
            type: ADD_NOTE,
            note: response,
        });
        dispatch(resetNoteForm());
    } catch (e) {
        console.error(e);
    }
};


export function updateNote(note) {
    return {type: UPDATE_NOTE, note}
}

export const deleteNote = (noteId) => async dispatch => {
    try {
        await fetch(`${url}/note/${noteId}`,
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            });

        dispatch({type: DELETE_NOTE, noteId});
    } catch (e) {
        console.error(e);
    }
};

export function onNoteTextChange(text) {
    return {
        type: ON_NOTE_TEXT_CHANGE,
        text,
    }
}

export function resetNoteForm() {
    return {
        type: RESET_NOTE_FORM,
    }
}

