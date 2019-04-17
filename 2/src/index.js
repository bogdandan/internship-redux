const redux = require('redux');

const {createStore, combineReducers} = redux;

function reducer(state = {}, action) {
    console.log(' reducer ', 'action ', action, state);
    switch (action.type) {
        case 'foo':
            return {prop: 'foo'};
        default:
            return state;
    }
}

function reducer1(state = {}, action) {
    console.log('reducer1 ', 'action ', action, state);
    switch (action.type) {
        case 'bar':
            return {prop: 'bar'};
        default:
            return state;
    }
}

const store = createStore(combineReducers(
    {
        reducer,
        reducer1,
    }
));

const {getState, dispatch} = store;

console.log('state : ', JSON.stringify(getState(), null, 2));

dispatch({type: 'foo'});

console.log('state : ', JSON.stringify(getState(), null, 2));

dispatch({type: 'bar'});

console.log('state : ', JSON.stringify(getState(), null, 2));
