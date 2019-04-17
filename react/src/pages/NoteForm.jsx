import React from 'react';
import {connect} from 'react-redux';
import {addNote, onNoteTextChange} from '../actions';

function NoteFormPage({note, onNoteTextChange, addNote}) {

    return (
        <>
            <div>Note text:</div>
            <br/>
            <input value={note.text} onChange={e => onNoteTextChange(e.target.value)}/>
            <br/>
            <br/>
            <div>
                <button onClick={() => {
                    if (!note.text) {
                        return;
                    }
                    addNote(note);
                }}>ADD NOTE !
                </button>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        note: state.noteForm.note,
    }
};

const mapDispatchToProps = {
    onNoteTextChange,
    addNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormPage);
