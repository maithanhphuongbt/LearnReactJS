import React, { Component } from 'react'

export default class ItemNews extends Component {
    
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
        return (
            <div className="col-4">
                <br />
                <div className="card-deck">
                    <div className="card">
                        <a href={"/news-detail/" + this.convertURL(this.props.title) + "." + this.props.newsId + ".html"}>
                            <img className="card-img-top" src={this.props.image} alt={this.props.imageDescription} />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title"><a href={"/news-detail/" + this.convertURL(this.props.title) + "." + this.props.newsId + ".html"}>{this.props.title}</a></h4>
                            <p className="card-text">{this.props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
