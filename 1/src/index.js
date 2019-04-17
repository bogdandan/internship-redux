const redux = require('redux');

const {createStore} = redux;

function reducer(state = {}, action) {
    console.log('action ', action);
    switch (action.type) {
        case 'foo':
            return {prop: 'a'};
        default:
            return state;
    }
}

const store = createStore(reducer);

const {getState, dispatch} = store;

console.log('state : ', getState());

dispatch({type: 'foo'});

console.log('state : ', getState());

dispatch({type: 'bar'});

console.log('state : ', getState());
