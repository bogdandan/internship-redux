import React from 'react';
import {connect} from 'react-redux';
import {deleteNote, getNotes} from '../actions';
import List from '../components/List';

function NotePage({notes, getNotes, deleteNote}) {

    React.useEffect(() => {
        console.log("Equivalent of component did mount");
        getNotes()
    }, []);

    return (
        <>
            {
                notes.length > 0 ?
                    <List items={notes} onItemClick={({id}) => deleteNote(id)}/>
                    :
                    <span>Notes not available</span>
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        notes: Object.values(state.note.notes),
    }
};

const mapDispatchToProps = {
    getNotes,
    deleteNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotePage);
