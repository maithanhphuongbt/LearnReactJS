import React, { Component } from 'react'

export default class TableDataItem extends Component {
    permissionShow = () => {
        if(this.props.data.permission === 1) {
            return "Admin"
        }else if(this.props.data.permission === 2) {
            return "Moderator"
        }else {
            return "Normal User"
        }
    }


    render() {
        return (
        <tbody>
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.phone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div onClick={()=>this.props.editFuncClick()} className="btn btn-warning edit">
                    <i className="fa fa-edit"> Edit</i>
                    </div>
                    <div onClick={()=>this.props.deleteUser()} className="btn btn-danger delete">
                    <i className="fa fa-trash"> Delete</i>
                    </div>
                </td>
            </tr>
        </tbody>
        )
    }
}
