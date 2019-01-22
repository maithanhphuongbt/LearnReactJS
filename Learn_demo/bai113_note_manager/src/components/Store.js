
import { noteData } from './firebaseConnect';
var redux = require('redux');

const noteInitialState = {
    isEdit:false,
    editItem:{},
    titleForm:"",
    alertShow:false,
    titleAlert:"",
    alertStatus:""
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("success"+ action.item)
            noteData.push(action.item)
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "CHANGE_TITLE_FORM":
            return {...state,titleForm:action.title}
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}
        case "EDIT_DATA":
            console.log("edit data",action.item)
            noteData.child(action.item.id).update({
                title: action.item.title,
                content: action.item.content
            })
            return {...state,editItem:{}}
        case "DELETE_DATA":
            console.log("delete item",action.deleteObject)
            noteData.child(action.deleteObject).remove()
            return state
        case "ALERT_SHOW":
            return {...state,alertShow:!state.alertShow,titleAlert:action.titleAlert,alertStatus:action.alertStatus}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function() {
})
export default store;



