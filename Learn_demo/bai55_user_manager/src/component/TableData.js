import React, { Component } from 'react'
import TableDataItem from './TableDataItem';

export default class TableData extends Component {

    mappingData = ()=> this.props.dataUserProps.map((value,key) => (
        <TableDataItem
        deleteUser={(userId)=> this.props.deleteUser(value.id)} 
        editFuncClick={(user)=>this.props.editFunc(value)} 
        key = {key} 
        data={value}/>
    ))

    render() {
        return (
        <div className="col">
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Điện thoại</th>
                <th>Quyền</th>
                <th>Thao tác</th>
                </tr>
            </thead>
                {this.mappingData()}
            </table>
        </div>
        )
    }
}
