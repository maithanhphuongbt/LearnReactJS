
var redux = require('redux');

const noteInitialState = {

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