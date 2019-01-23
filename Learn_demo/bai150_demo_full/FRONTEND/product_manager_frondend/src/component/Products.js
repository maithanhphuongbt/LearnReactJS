import React, { Component } from 'react'

export default class Products extends Component {
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        return (
        <div className="col-4 mt-3">
            <div className="card text-left">
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
