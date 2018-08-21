import * as actionTypes from './actions';
//using counter state for example only

const intitialState = {
    forecasts: [],
    current: [],
    city: null,
    location: '',
    error: false
}

const reducer = (state = intitialState, action) => {
    return state;
};

export default reducer; 