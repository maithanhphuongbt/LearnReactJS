import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

const addProducAction = (product_name,product_price,product_image) => 
(axios.post('/add',{product_name,product_price,product_image})
.then((response) => response.data))

class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_name:'',
            product_price:'',
            product_image:''
        }
    }
    

    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }

    handleAddProduct = () => {
        addProducAction(this.state.product_name,this.state.product_price,this.state.product_image)
        .then((response)=>{console.log(response)})
        this.props.addProduct({
            product_name:this.state.product_name,
            product_price:this.state.product_price,
            image:this.state.product_image
        },true)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <form>
                            <div className="form-group">
                                <label htmlFor="product_name">Tên sản phẩm</label>
                                <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhập tên sản phẩm" />
                                <small id="name_text" className="form-text text-muted">Nhập text vô</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_price">Giá sản phẩm</label>
                                <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="price_text" placeholder="Nhập tên sản phẩm" />
                                <small id="price_text" className="form-text text-muted">Nhập text vô</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_image">Đường link ảnh</label>
                                <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="product_image" id="product_image" aria-describedby="image_text" placeholder="Nhập tên sản phẩm" />
                                <small id="image_text" className="form-text text-muted">Nhập text vô</small>
                            </div>
                            <button onClick={()=>this.handleAddProduct()} type="reset" className="btn btn-info">Thêm mới</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAddSuccess: state.isAddSuccess
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addProduct: (product) => {
            dispatch({
                type:"ADD_DATA_SUCCESS",
                product
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
