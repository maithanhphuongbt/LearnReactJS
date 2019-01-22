import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-4 mt-3">
                    <div className="card text-left">
                        <img className="card-img-top" src="data:image/jpeg;base64,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" alt />
                        <div className="card-body">
                            <h5 className="card-title float-left">Tên sản phẩm</h5>
                            <h5 className="card-title float-right">500000</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
