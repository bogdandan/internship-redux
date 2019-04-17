const fetch = require('node-fetch');

function addNewNote() {
    const body = {text: `Test ${new Date()}`};
    console.log('addd note ', body);
    return fetch('http://localhost:3000/note', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    }).then(r => r.json())
}

function updateNote(note) {
    console.log('update note ', note);
    return fetch(`http://localhost:3000/note/${note.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(note),
    }).then(r => r.json());
}

function deleteNote(id) {
    console.log('delete note ', id);
    return fetch(`http://localhost:3000/note/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
}

module.exports = {
    addNewNote,
    updateNote,
    deleteNote,
};
