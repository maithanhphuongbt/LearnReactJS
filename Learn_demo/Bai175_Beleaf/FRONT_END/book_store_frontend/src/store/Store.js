import axios from 'axios';
import { UPDATE_STATUS_TAB } from './../config/Contant';

var redux = require('redux');
const getexploreData = () => axios.get('/api/explores').then((res) => res.data);
const storeInitialState = {
    explores: getexploreData(),
    statusTab: 1
}
const allReducer = (state = storeInitialState, action) => {
    switch (action.type) {
        case UPDATE_STATUS_TAB:
            return {...state,statusTab:action.statusTab}
        default:
            return state
    }
}

export default redux.createStore(allReducer);