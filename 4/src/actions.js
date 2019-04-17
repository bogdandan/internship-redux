const {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, NOTE_ERROR, OPEN, OPEN_SUCCESS} = require('./constants');

function addNote(note) {
    return {type: ADD_NOTE, note}
}

function updateNote(note) {
    return {type: UPDATE_NOTE, note}
}

function deleteNote(noteId) {
    return {type: DELETE_NOTE, noteId}
}

function noteError(error) {
    return {type: NOTE_ERROR, error}
}

function open() {
    return {type: OPEN}
}

function openSuccess() {
    return {type: OPEN_SUCCESS}
}

function onMessage({event, note}) {
    if (event === 'created') {
        return addNote(note);
    }
    if (event === 'updated') {
        return updateNote(note);
    }
    if (event === 'deleted') {
        return deleteNote(note.id);
    }
    return {type: '@ignore'};
}

module.exports = {
    addNote,
    updateNote,
    deleteNote,
    noteError,
    open,
    openSuccess,
    onMessage,
};
