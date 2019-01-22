import numReducer from './reducers/numReducer';
import editStatusReducer from './reducers/editStatusReducer';

var redux = require('redux');


const allReducer = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})
var store1 = redux.createStore(allReducer);
store1.subscribe(() => {
    console.log(store1.getState());
})
export default store1;