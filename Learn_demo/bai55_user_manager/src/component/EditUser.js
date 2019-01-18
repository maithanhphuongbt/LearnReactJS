import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.dataUser.id,
            name:this.props.dataUser.name,
            phone:this.props.dataUser.phone,
            permission:this.props.dataUser.permission
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    render() {
        var userData = this.props.dataUser;
        var item={
            id:userData.id,
            name:this.state.name,
            phone:this.state.phone,
            permission:parseInt(this.state.permission,10)
        }
        return (
            <div className="col-12">
                <form>
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-header text-center">Sửa thông tin User</div>
                        <div className="card-body text-dark">
                            <div className="form-group">
                                <input onChange={(event)=>this.isChange(event)} name="name" defaultValue={userData.name} type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event)=>this.isChange(event)} name="phone" defaultValue={userData.phone} type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event)=>this.isChange(event)} name="permission" defaultValue={parseInt(userData.permission,10)}  className="custom-select" required>
                                    <option value>Chọn quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input onClick={(user)=>this.props.closeEditUserFunc(item)} type="reset" value="Lưu thông tin" className="btn btn-block btn-warning"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
