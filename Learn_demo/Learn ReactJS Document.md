# Learn ReactJS

## I. Create app
1. Create React app tool
    ```bash    
       npm install -g create-react-app
    ```
2. Create React app
    ```bash    
       create-react-app {name app}
    ```
3. Open app folder
    ```bash    
       cd {name app}
    ```
4. Start node js
  open terminal
   ```bash    
      npm start
   ```
## II. Component
* What?
        - Component là một khối đóng gói(chỉ 1 div), bên trong gồm các thẻ html, props, state...
        - Tạm hiểu giống như một thẻ HTML mà mình tự định nghĩa ra
        - Để làm web bằng react js cần phải chuyển đổi các html thông thường sang dạng component
* Why
        - Việc chuyển đổi mất thời gian nhưng nhờ vậy chường trình có thể đóng gói các khối code thành 1 đối tượng độc lập -> dễ mantain
* How
        - Có 4 cách định nghĩa component
    + Kiểu hàm bình thường: function One() {}
    ```bash    
        function One() {
            return <div>Cách số 1</div>
        }
    ```

    + Kiểu anonymous function: function() {}
    ```bash    
        var Two = function() {
            return (
                <div>Anonymuos function</div>
            );
        }
    ```
    + Kiểu arrow function (es6): () =>
     ```bash    
        var Three = ()=> (
            <div>Arrow function</div>
        );
     ```
    + Kiểu class: (hot key) rcjc để create:
    ```bash    
        class Four extends Component {
            render() {
                return (
                  <div>
                    <button>ReactJS Class function</button>
                  </div>
                );
            }
        }
    ```
## II. Properties

* What: properties (thuộc tính) của component ví dụ: <Bodem so="20"/> component bodem có thuộc tính là so=20
* Why: Là cách để truyền tha số từ ngoài vào trong Component
* How: Có 2 thao tác với props: 
    + 1 function (ít dùng, xử lý đơn giản) 

    ```bash 
        //create
        function NumberOne (props) {
            return (
                <div>
                  <div className="col-6">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={props.image}
                        alt=""/>
                      <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
            );
        }
    //use
        <NumberOne title="Title Two" content="Content Two" image="https://s3.bloganchoi.com/wp-content/uploads/2018/08/anh-dai-dien.jpg"/>
    ```
    + 2 class

    ```bash    
        //create
        class NumberTwo extends Component {
          render() {
            return (
              <div>
              <div className="col-6">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={this.props.image}
                    alt=""/>
                  <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.content}</p>
                  </div>
                </div>
              </div>
            </div>
            );
          }
        }
        //use
        <NumberTwo title="Title Three" content="Content NumberTwo One" image="http://media2.sieuhai.tv:8088/onbox/images/user_lead_image/20180826/01677699391_20180826214119.jpg"/>
    ```

## IV. JSX (javascrip extension)
* What: giúp cho ta có thể viết html trong javascript
* How: 
    -Viết dạng component với cặp ngoặc {}
    -Viet dạng gần giống HTML: mở url: https://magic.reactjs.net/htmltojsx.htm => copy html and convert


## V. Function map
*What: là function lặp phần tử chạy giống như foreach
*How:

```bash
    //create
    const numbers = [1,2,3,4,5,6];
    const number2 = numbers.map((x) =>x*2 + " / ");
    const number3 = numbers.map((x) => (
      <div>
        <li>Số: {x}</li>
      </div> 
    ))

    class MapFunction extends Component {
      render() {
        return (
          <div>
            {number2}
            {number3}
          </div>
        );
      }
    }
    //use
    <MapFunction/>
```

## VI. Convert HTML to ReactJS
* What: chuyển HTML sang JSX
* Why: Vì muốn sử dụng react thì phải đưa các phần tử HTML thành component vì react js không viết trực tiếp HTML mà chỉ viết cho component
* How: Tạo giao diện frontend bằng HTML sau đó chuyển giao diện sang dạng react js component
    - Hot key create component: rcc
    - Create click function without parameter
        ```bash
            //create function click examble
            import React, {
                Component
            } from 'react'
        
            export default class Content extends Component {
                constructor(props) {
                    super(props);
                }
        
                btnEdit = () => { alert('Edit click')}
        
                render() {
                    return ( 
                        <div className="btn btn btn-info" onClick={this.btnEdit}>Edit</div>
                    )
                }
            }
        ```
    - Create click function with parameter

        ```bash
            btnArrowFunction = (param) => {alert(param)}
            
            //use:
            * arrow function
                <div className="btn btn btn-warning" onClick={()=>this.btnArrowFunction("Arrow function Clicked")}>Arrow Function Click</div>
            * bind
                <div className="btn btn btn-warning" onClick={this.btnArrowFunction.bind(this,"Bind Function Clicked")}>Bind Function Click</div>
        ```

## VI. State
* What: là biến trung gian hoạt động trong suốt quá trình thao tác với component
* How:

    ```bash
    
        // create state
        
        constructor(props) {
            super(props);
            this.state = {
                status: 0
            }
        }
    
        //create two component
        
        renderButton = () => (
            <div className="btn btn-group">
                <div className="btn btn btn-info" onClick={this.btnEdit}>Edit</div>
                <div className="btn btn btn-warning" onClick={this.btnRemove}>Remove</div>
            </div>
        )
    
        renderForm = () => (
            <div classname="row">
                <div className="form-group">
                    <input defaultValue={this.props.title} type="text" className="form-control" name="name" />
                </div>
                <div className="form-group">
                    <div className="btn btn-block btn-danger" onClick={()=> this.btnSave()}>Save</div>
                </div>
            </div>
        )
        
        // create display depen on status 
        displayCheck = () => {
            if (this.state.status === 0) {
                return this.renderButton();
            }else {
                return this.renderForm();
            }
        }
        
        // use
        
        render() {
            return ( 
                    <h2 className="display-4">{this.props.title}</h2>
                    <p>{this.props.content}</p>
                    {this.displayCheck()}
            )
        }
    ```
## VIII. Lifecycle of component trong reactjs
* What là vòng đời của một component
* How 

![react js lifecycle](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)

## IX. React Router (ref: https://reacttraining.com/react-router/web/example/auth-workflow)
* Setting: in your project
```bash
    $ npm install --save react-router-dom
```
* What: Thao tac trực tiếp trang web mà k cần load lại trang web, để làm web SPA(signle page application)
* Why: thao tác mượt hơn k load lại trang, dùng cho các giao diện có nhiều chức năng tương tác trên trang web
* How:
    1. Tạo giao diện
    2. Chuyển htm -> component react js
        1.1 Sắp xếp lại folder cho hệ thống
            + ../ = back ra ngoai 1 folder
            + ./ = ở vị trí hiện tại
        1.2 copy toàn bộ css vào file app.css
        1.3 Component từng phần thành mã react js (jsx)
    3. Init React Router
        3.1 Create component điểu hướng

                import React, { Component } from 'react'
                import { BrowserRouter as Router, Route, Link } from "react-router-dom";
                import News from "../component/News";
                import Detail from "../component/Detail";
                import Contact from "../component/Contact";
                import Home from "../component/Home";
            
                export default class ConfigURL extends Component {
                    render() {
                        return (
                            <div>
                                <Route path="/" exact component={Home} />
                                <Route path="/news" exact component={News} />
                                <Route path="/news-detail" component={Detail} />
                                <Route path="/contact" component={Contact} />
                            </div>
                        );
                    }
                }
            ```

        3.2 Add Router in App.js
            
                import React, { Component } from 'react';
                import '../css/App.css';
                import '../css/index.css';
                import { BrowserRouter as Router, Route, Link } from "react-router-dom";
                import Nav from './Nav';
                import Footer from './Footer';
                import ConfigURL from '../router/ConfigURL';
                import Contact from './Contact';
                
                class App extends Component {
                  render() {
                    return (
                      <Router>
                        <div>
                            <Nav/>
                            <ConfigURL/>
                            <Footer/>
                        </div>
                      </Router>
                    );
                  }
                }
                
                export default App;


        3.3 Init for component
            
            <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
            
        3.4 URL parameters
        
            // init
            
             <Route path="/news-detail/:slug.:id.html" component={Detail} />
             
            //function
            
            convertURL = (str) => {
            str = str.toLowerCase();     
                // xóa dấu
                str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
                str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
                str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
                str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
                str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
                str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
                str = str.replace(/(đ)/g, 'd');
            
                // Xóa ký tự đặc biệt
                str = str.replace(/([^0-9a-z-\s])/g, '');
            
                // Xóa khoảng trắng thay bằng ký tự -
                str = str.replace(/(\s+)/g, '-');
            
                // xóa phần dự - ở đầu
                str = str.replace(/^-+/g, '');
            
                // xóa phần dư - ở cuối
                str = str.replace(/-+$/g, '');
            
                // return
                return str;
            }   
            
            // use
            
            <a href={"/news-detail/" + this.convertURL(this.props.title) + "." + this.props.newsId + ".html"}>
            
        3.5 Redirects
            
            //init
            
            import Redirect from 'react-router-dom/Redirect';
            
            constructor(props) {
                super(props);
                this.state = {
                    isRedirect: false,
                    fieldName:"",
                    fieldEmail:"",
                    fieldPhone:"",
                    fieldMessage:""
                }
            }
            
            submitForm = (event) => {
                event.preventDefault();
                this.setState({
                    isRedirect:true
                })
            }
            
            isChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                this.setState({
                    [name]: value
                })
            }
            
            // use
            
            render() {
                if (this.state.isRedirect) {
                    console.log(this.state.fieldName);
                    console.log(this.getValue());
                    return <Redirect to="/home"/>
                }
                return (
                    <div>
                        <input onChange={(event)=> this.isChange(event)} name="fieldName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                    
                        <button type="submit" onClick = {(event)=> this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                        </div>
                )
            }

## X. UUID
*What: tạo id ngẫu nhiên

        // install:
        npm install uuid
        
        // use:
        const uuidv1 = require('uuid/v1');
        uuidv1(); // ⇨ '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e'

## XI. Cach kết nối và truyền data giữa component cha và component con:
1. Truyền từ con về cha qua event click:

        // in component con
        render() {
            var item={
                id:uuidv1(),
                name:this.state.name,
                phone:this.state.phone,
                permission:parseInt(this.state.permission,10)
            }
            return (
                <input onClick={(user)=>this.props.addUser(item)} type="reset" value="Thêm mới" className="btn btn-block btn-primary"/>
            )
        }
        // in component cha
        class App extends Component {
              addUser = (user) => {
                user.id = this.state.data.length +1;  
                var items = this.state.data;
                items.push(user);
                this.setState({
                  data:items
                })
              }
          render() {
                <AddUser addUser = {(user)=>this.addUser(user)}/>
            );
          }
        }
2. Truyền data từ component cha vào component con:

        // in component cha:
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
                        <TableData 
                  </div>
                );
              }
        // incomponent con
        export default class TableData extends Component {
            mappingData = ()=> this.props.dataUserProps.map((value,key) => (
                <TableDataItem key = {key} data={value}/>
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
## XI. Cách get data trên input form

        // create function
            isChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            this.setState({
                [name]:value
            })
        }
        // use
        <input onChange={(event)=>this.isChange(event)} name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
        // get value:
        content += "Name: " + this.state.name

## XII. Local storage
* What: lưu trữ dữ liệu
* How: 

        //init:
        localStorage.setItem("key","haha");
        //get value:
        localStorage.getItem('key')
        //remove:
        localStorage.removeItem('key')

## XIII. Đóng gói dữ liệu upload lên server
* How: open project => run cmd

        npm run build

## XIV. Up git source
1. Create repository it github
2. in project

        //init git
        git init
        //connect git
        git remote add origin https://github.com/maithanhphuongbt/LearnReactJS.git
        //upload
        git add *
        //commit code
        git commit -m "Upload basesource code"
        //pull code
        git pull
        //push code
        git push origin master

## XV. Redux
* Why: store data to communicate between components
* How:
1. Toán tử ... (obj: p1 = {...p2}; mảng: p1=[...p2]) :trỏ vùng nhớ 2 biến khác nhau không ảnh hưởng bới sự thay đổi của nhau

    Ví dụ:
    var a = {ten:"An", gia:"50"};
    var b = a;
    b.gia = 100

    => a.gia = 100, b.gia = 100

    var a = {ten:"An", gia:"50"};
    var b = {...a};
    b.gia = 100

    => a.gia = 50, b.gia = 100

    //Ví dụ viết tắt:
    var b1 = {
        num: [1,2,3],
        status:true
    }
    var b2 = {...b1,status:false}
    console.log(b2); => {"num":[1,2,3],"status":false}
    var b3 = {...b1,num:[...b1.num,100]};
    console.log(b3); => {"num":[1,2,3,100],"status":true}

2. Cấu trúc 1 store trong Redux
    a. Action: là những chỉ thị gồm thuộc tính bắt buộc là type
        _ type tên chỉ thị
        _ item: phan tu thao tac
        _ action không trực tiếp thực hiện mà chỉ đưa ra các chỉ thị
        _ reducer là người thực hiện chi tiết
    b. Reducer: là 1 hành động
        _ hành động này trả về 1 state
        _Có 2 tham số: old state và chỉ thị (action)
    c. state: lưu trạng thái
    d. store: là đối tượng quản lý reducer và state, vì state private và k thể thay đổi trực tiếp mà phải thông qua store

3. Setting Redux

        npm i redux --save

4. Use redux
         
        var redux = require('redux');
        var oldState = {
          num:["man hinh","chuot","ban phim"],
          editStatus: true
        }
        var reducer1 = (state=oldState,action) => {
          switch (action.type) {
            case "CHANGE_EDIT_STATUS":
              return {...state,editStatus:!state.editStatus}
            case "ADD_NEW":
              return {...state,num:[...state.num,action.newItem]}
            case "DELETE":
              return {...state,num:state.num.filter((value,i) => i !== action.index)}
            default:
              return state;
          }
        }
        
        var store1 = redux.createStore(reducer1);
        console.log(store1.getState());
        store1.dispatch({type:"CHANGE_EDIT_STATUS"});
        console.log(store1.getState());
        store1.dispatch({
          type:"ADD_NEW",
          newItem:"Tai nghe"
        });
        console.log(store1.getState());
        store1.dispatch({
          type:"DELETE",
          index:1
        });
        console.log(store1.getState());

5. Subscribe trong Redux: callback khi reducer thực thi

        store1.subscribe(() => {
          console.log(JSON.stringify(store1.getState()));
        }) 

## XV. React-Redux
1. Setting

        npm i redux --save
        
        npm i react-redux

2. 


## XVI: React Bootstrap Notifier
* What: plugin show notify
* How:

        //setting
        npm install react-bs-notifier --save
        //use
        import { Alert, AlertContainer } from "react-bs-notifier";
        export default class AlertInfo extends Component {
            render() {
                return (
                <div>
                    <AlertContainer>
                        <Alert type="info">Hello, world</Alert>
                        <Alert type="success">Oh, hai</Alert>
                    </AlertContainer>
                </div>
                )
            }
        }
        //note: sau 1 giây thực thi hàm onDismiss
        <Alert onDismiss={()=>this.handldeDismiss()} timeout={1000} type="success">{this.props.titleForm+" thành công"}</Alert>

## XVII. Demo Reactjs + Redux + Node JS + Axios + Postgresql
* How:
  ![react js lifecycle](https://firebasestorage.googleapis.com/v0/b/storageimagefirebase.appspot.com/o/flow_demo_reactjsapp.PNG?alt=media&token=7dc8cc85-5ec8-4077-8574-10bf4826ab77)

1. PostgreSQL
    1.1 Database -> create Database
    1.2 Input name database -> save
    1.3 Your databasse -> Schemas -> Table -> Create table
    1.4 In general tab -> input name
    1.5 In Columns tab add column -> save

        //insert value
        INSERT INTO product_info (product_name,product_price) VALUES ('but chi',5000)

2. Node JS
    2.1 Setting express JS: frame work (https://expressjs.com/)

        npm install -g express-generator

    2.2 Create nodejs project

        express product_manager_api -e

    2.3 Setting module (dependencies module)

        npm install

    2.4 Start project:

        npm start

3. Create frontend project

        create-react-app product_manager_frondend

4. Change port backend
- ../bin/www -> var port = normalizePort(process.env.PORT || '4000');

5. Connect NodeJS với PostgreSQL
    5.1 Setting plugin node-postgre (https://node-postgres.com/)

        npm install pg

    5.2 Connect postgres
    go to ./routes/index add this code

        const { Pool, Client } = require('pg')
        
        const pool = new Pool({
          user: 'dbuser',
          host: 'database.server.com',
          database: 'mydb',
          password: 'secretpassword',
          port: 3211,
        })
        
        pool.query('SELECT NOW()', (err, res) => {
          console.log(err, res)
          pool.end()
        })

    go to pgAdmin postgres -> view properties PostgreSQL10 -> Connection get infor to config like below: fild /routes/index.js

        var express = require('express');
        var router = express.Router();
        
        // node-postgres
        
        const { Pool, Client } = require('pg')
        
        const pool = new Pool({
          user: 'postgres',
          host: 'localhost',
          database: 'sanpham',
          password: 'password setting postgreSQL',
          port: 5432,
        })
        
        /* GET home page. */
        router.get('/', function(req, res, next) {
          pool.query('SELECT NOW()', (err, res) => {
            console.log(err, res)
            pool.end()
          })
          res.render('index', { title: 'Express' });
        });
        
        //api get data from postgres
        
        router.get('/getdata01', function(req, res, next) {
          console.log('day la api lay du lieu cho react js');
          pool.query('SELECT * FROM product_info', (err, res) => {
            if(err) {
              console.log(err);
            }else {
              console.log(res.rows)
            }
            pool.end()
          })
          res.render('index', { title: 'Express' });
        });
        
        module.exports = router;    

6. Lấy dữ liệu đổ vào frondend
    6.1. Create html
    6.2. Setting axios

        npm install axios --save

    



