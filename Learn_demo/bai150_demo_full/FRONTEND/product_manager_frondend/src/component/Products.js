import React, { Component } from 'react'
import axios from 'axios';

const deleteProducAction = (id) => 
(axios.post('/delete',{id})
.then((response) => response.data))


export default class Products extends Component {
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    deleteProduct = () => {
        deleteProducAction(this.props.data.id)
        .then((response)=>{console.log(response)})
    }

    render() {
        return (
        <div className="col-4 mt-3">
            <div className="card text-left">
                <div onClick={()=>this.deleteProduct()} className="btn btn-danger delete">
                    <i className="fa fa-trash"> Delete</i>
                </div>
                <img className="card-img-top" src={this.props.data.image} alt="/" />
                <div className="card-body">
                    <h5 className="card-title float-left">{this.capitalizeFirstLetter(this.props.data.product_name)}</h5>
                    <h5 className="card-title float-right">{this.props.data.product_price}</h5>
                </div>
            </div>
        </div>
        )
    }
}
