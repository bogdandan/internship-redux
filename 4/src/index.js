const {createStore, applyMiddleware, bindActionCreators} = require('redux');
const rootReducer = require('./reducers');
const actions = require('./actions');
const {OPEN} = require('./constants');
const {addNewNote, updateNote, deleteNote} = require('./calls');
const ServerListener = require('./listener');

const middleware = ({dispatch}) => next => action => {
    if (action.type === OPEN) {
        new ServerListener(
            bindActionCreators({
                onOpen: actions.openSuccess,
                onClose: actions.openSuccess,
                onError: actions.openSuccess,
                onMessage: actions.onMessage
            }, dispatch)
        );
    }
    next(action);
};

const store = createStore(rootReducer, applyMiddleware(middleware));

let unsubscribe = store.subscribe(() => {
    console.log('store change');
    console.log(JSON.stringify(store.getState(), null, 2));
});

main = async () => {
    const {getState, dispatch} = store;

    let note = await addNewNote();
    dispatch(actions.addNote(note));
    note = await addNewNote();
    dispatch(actions.addNote(note));

    dispatch(actions.open());

    let noteId = Object.keys(getState().note)[0];
    await deleteNote(noteId);
    dispatch(actions.deleteNote(noteId));

    note = Object.values(getState().note)[0];
    note = await updateNote({...note, text: 'updated note'});
    dispatch(actions.updateNote(note));
};

main();
