import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Search from './Search'
import TableData from './TableData';
import AddUser from './AddUser';
import Data from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddUser:false,
      showEditUser:false,
      data:Data,
      serchText:"",
      dataEdit:{},
    }
  }
  
  componentWillMount() {
    //check data
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData',JSON.stringify(Data));
    }else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      })
    }
  }

  showAddUserComponent = ()=> {
    this.setState({
      showAddUser: !this.state.showAddUser
    })
  }

  showEditUserComponent = ()=> {
    this.setState({
      showEditUser: !this.state.showEditUser
    })
  }

  getTextSearch = (word)=> {
    this.setState({
      serchText:word
    })
  }

  addUser = (user) => {
    user.id = this.state.data.length +1;  
    var data = this.state.data;
    data.push(user);
    this.setState({
      data:data,
    })
    //update data for local storage
    localStorage.setItem('userData',JSON.stringify(data));
  }

  editUser = (user) => {
    if(user) {
      this.setState({
        showEditUser: true,
        dataEdit:user
      })
    }
  }

  deleteUser = (userId) => {
    var data = this.state.data.filter(item => item.id !== userId);;
    this.setState({
      data: data
    })
    //update data for local storage
    localStorage.setItem('userData',JSON.stringify(data));
  }

  closeEditUser = (user) => {
    this.setState({
      showEditUser:false
    })
    var data = this.state.data;
    data.map((value,key)=> {
      if(value.id === user.id) {
        data[key] = user
      }
      return true
    })
    this.setState({
      data: data
    })
    //update data for local storage
    localStorage.setItem('userData',JSON.stringify(data));
  }

  render() {
    var dataFilters = [];
    this.state.data.forEach(element => {
      if(element.name.indexOf(this.state.serchText) !== -1) {
        dataFilters.push(element);
      }
    });
    console.log(this.state.data);
    return (
      <div>
        <Header headerTitle="Project quản lý thành viên bằng React JS với dữ liệu json"/>

        <Search 
        getTextSearch = {(word)=>this.getTextSearch(word)}
        showAddUser={this.state.showAddUser}
        showAddUserComponent={()=>this.showAddUserComponent()} 
        showEditUser={this.state.showEditUser}
        closeEditUserFunc={(user)=>this.closeEditUser(user)}
        dataEdit={this.state.dataEdit}
        />

        <div className="container">
          <div className="row">

            <TableData 
            editFunc={(user)=>this.editUser(user)}
            deleteUser={(userId)=>this.deleteUser(userId)}
            dataUserProps={dataFilters}/>

            <AddUser addUser = {(user)=>this.addUser(user)} showAddUser={this.state.showAddUser}/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
