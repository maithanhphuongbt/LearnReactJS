import React, { Component } from 'react'
import Header from './Header';
import data from './data.json';

export default class Detail extends Component {
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
    render() {
        console.log(this.props.match.params.id);
        console.log(this.props.match.params.slug);
        return (
            <div>
                <Header headerName="Detail"/>
                {data.map((value,key) => {
                    if(value.id === this.props.match.params.id.toInt) {
                        return (
                            <div>
                                <div className="jumbotron jumbotron-fluid">
                                        
                                        <div className="container">
                                        <img src={value.image} className="img-fluid width100" alt="tada" />
                                        <hr/>
                                        <p className="lead">{value.title}</p>
                                        <hr className="my-2" />
                                        <p>{value.content}</p>
                                        </div>
                                </div>
                                <br />
                            </div>              
                        )
                    }
                    return true
                })}
                <div className="container">
                <h4 className="card-title text-center">Relative news</h4>
                <br />
                <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                            {data.map((value,key) => {
                                if(value.id !== this.props.match.params.id && key <=4) {
                                    return (
                                        <div className="card">
                                            <a href={"/news-detail/" + this.convertURL(value.title) + "." + value.id + ".html"}>
                                                <img className="card-img-top" src={value.image} alt="tada" />
                                            </a>
                                            <div className="card-body">
                                            <h4 className="card-title">
                                                <a href={"/news-detail/" + this.convertURL(value.title) + "." + value.id + ".html"}>        {value.title}
                                                </a>
                                            </h4>
                                            <p>{value.description}</p>
                                            </div>
                                        </div>   
                                    )
                                }
                                return true
                            })}
                        </div>
                        <hr/>      
                    </div>
                </div>
            </div>          
        </div>
        )
    }
}
