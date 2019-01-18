import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdd:true,
            tempValue:''
        }
    }

    showAddUser = ()=> {
        if(this.props.showAddUser) {
            return <div onClick={()=>this.props.showAddUserComponent()} className="btn btn-outline-secondary">Đóng lại</div>
        }else {
            return <div onClick={()=>this.props.showAddUserComponent()} className="btn btn-outline-info">Thêm mới</div>
        }
    }

    showEditUser = () => {
        if(this.props.showEditUser && this.props.dataEdit) {
            return <EditUser dataUser = {this.props.dataEdit} closeEditUserFunc={(user)=> this.props.closeEditUserFunc(user)}/>
        }
    }

    isChange = (event)=> {
        this.setState({
            tempValue:event.target.value
        })
        this.props.getTextSearch(event.target.value)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.showEditUser()}
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <div className="btn-group">
                                <input onChange={(event)=> this.isChange(event)} name="fieldSearchWord" type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập từ khóa tìm kiếm"/>
                                <div onClick={(word)=>this.props.getTextSearch(this.state.tempValue)} className="btn btn-outline-info">Tìm</div>
                                {this.showAddUser()}
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}
