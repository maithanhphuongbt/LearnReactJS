import React, { Component } from 'react'
import { connect } from 'react-redux';

class NoteItem extends Component {

    editClick = () => {
        this.props.changeEditStatus()
        this.props.getEditData(this.props.note)
        this.props.changeTitleForm("Sửa")
    }

    deleteClick = () => {
        this.props.deleteData(this.props.note.key)
        this.props.showAlert(true,"Xóa ghi chú "+ this.props.note.title,"danger")
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="noteOne">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.index} aria-expanded="true" aria-controls="contentNoteOne">
                        {this.props.note.title}
                        </a>
                        <div className="btn-group float-right">
                            <button onClick={()=>this.editClick()} className="btn btn-outline-info">Sửa</button>
                            <button onClick={()=>this.deleteClick()} className="btn btn-outline-secondary">Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby="noteOne">
                    <div className="card-body">
                        {this.props.note.content}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        getEditData:(editObject) => {
            dispatch({
                type:"GET_EDIT_DATA",
                editObject
            })
        },
        deleteData:(deleteObject) => {
            dispatch({
                type:"DELETE_DATA",
                deleteObject
            })
        },
        changeTitleForm: (title) => {
            dispatch({
                type:"CHANGE_TITLE_FORM",
                title
            })
        },
        showAlert: (alertShow,titleAlert,alertStatus) => {
            dispatch({
                type:"ALERT_SHOW",
                alertShow,
                titleAlert,
                alertStatus
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
