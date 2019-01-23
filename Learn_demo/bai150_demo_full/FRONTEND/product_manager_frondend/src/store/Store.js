
import axios from 'axios';
const getProductData = () => axios.get('/getdata01').then((res) => res.data);
var redux = require('redux');

const noteInitialState = {
    product:getProductData(),
    addStatus:false
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA_SUCCESS":
            return {...state,product:action.product,addStatus:action.addStatus}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function() {
})
export default store;