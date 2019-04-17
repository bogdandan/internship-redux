const {combineReducers} = require('redux');

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

module.exports = combineReducers(
    {
        reducer,
        reducer1,
    }
);
