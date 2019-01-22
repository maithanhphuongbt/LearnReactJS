import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle:"",
            noteContent:"",
            id:''
        }
    }
    
    componentWillMount() {
        if(this.props.editItem) {
            this.setState({
                noteTitle:this.props.editItem.title,
                noteContent:this.props.editItem.content,
                id:this.props.editItem.key
            })
        }
    }

    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    
    addData = (title,content) => {
        if (this.state.id) {
            var itemEdit = {
                id:this.state.id,
                title:this.state.noteTitle,
                content:this.state.noteContent
            }
            this.props.editNote(itemEdit)
            this.props.changeEditStatus()
        }else {
            if (title && content) {
                var itemAdd = {}
                itemAdd.content = content
                itemAdd.title = title
                this.props.addDataStore(itemAdd)
                this.setState({
                    noteTitle:"",
                    noteContent:"",
                    id:''
                })
            }else {
                alert("Vui lòng điền đầy đủ thông tin giùm cái")
                this.setState({
                    noteTitle:"",
                    noteContent:"",
                    id:''
                })
            }
        }
        this.props.showAlert(true,this.props.titleForm,"success")
    }

    render() {
        return (
        <div className="col-4">
            <h3>{this.props.titleForm}</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="noteTitle">Tiêu đề note</label>
                    <input defaultValue={(this.props.titleForm === "Sửa")? this.props.editItem.title : ""} onChange={(event)=>this.isChange(event)} type="text" name="noteTitle" id="noteTitle" className="form-control" placeholder="Tiêu đề note" aria-describedby="noteId" />
                    <small id="noteId" className="text-muted">Điền tiêu đề vào
                        đây</small>
                </div>
                <div className="form-group">
                    <label htmlFor="noteTitle">Nội dung note</label>
                    <textarea defaultValue={(this.props.titleForm === "Sửa")? this.props.editItem.content : ""} onChange={(event)=>this.isChange(event)} type="text" name="noteContent" id="noteTitle" className="form-control" aria-describedby="noteId"/>
                    <small id="noteId" className="text-muted">Điền nội dung vào
                        đây</small>
                </div>
                <button onClick={()=> this.addData(this.state.noteTitle,this.state.noteContent)} type="reset" className="btn btn-primary btn-lg btn-block">Lưu</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        titleForm: state.titleForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (item) => {
            dispatch({type:"ADD_DATA",item})
        },
        editNote: (item) => {
            dispatch({type:"EDIT_DATA",item})
        },
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
