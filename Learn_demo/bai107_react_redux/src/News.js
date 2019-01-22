import React, { Component } from 'react'
import { connect } from 'react-redux';

class News extends Component {

    // userEditStatusInStore = () => {
    //     var {dispath} = this.props;
    //     dispath({type:'CHANGE_EDIT_STATUS'});
    // }

    render() {
        return (
        <div>
            <h2>This is component News</h2>
            <button onClick={()=> this.props.userEditStatusInStore()}>Click Me</button>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userEditStatusInStore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News);
