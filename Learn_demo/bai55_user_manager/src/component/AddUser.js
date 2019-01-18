import React, { Component } from 'react'
const uuidv1 = require('uuid/v1');

export default class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            phone:"",
            permission:""
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    addUserClick = () => {
        var item={
            id:uuidv1(),
            name:this.state.name,
            phone:this.state.phone,
            permission:parseInt(this.state.permission,10)
        }
        this.props.addUser(item)
    }

    render() {
        if(this.props.showAddUser) {
            
            return (
                <div className="col-3">
                    <form>
                        <div className="card border-dark mb-3" style={{maxWidth: '18rem'}}>
                            <div className="card-header">Thêm mới</div>
                            <div className="card-body text-dark">
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} name="phone" type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event)=>this.isChange(event)} name="permission"  className="custom-select" required>
                                        <option value>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input onClick={(user)=>this.addUserClick()} type="reset" value="Thêm mới" className="btn btn-block btn-primary"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        } return true;
    }
}
