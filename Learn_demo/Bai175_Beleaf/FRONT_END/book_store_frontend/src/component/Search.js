import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
        <div className="container fixed-top bg-white">
            <div className="row px-3 py-4">
                <div className="col-12 px-0 d-flex align-items-center">
                    <p className="mb-0 h-100 d-flex align-items-center"><span className="glyphicon glyphicon-flash search-flash-icon" /><span>20/20</span></p>
                    <span className="w-100 ml-2 mr-5">
                        <input type="search" className="form-control ds-input" id="search-input" placeholder="Search..." autoComplete="off" />
                    </span>
                    <span className="glyphicon glyphicon-comment h-100 d-flex
                    align-items-center float-right position-absolute search-comment-icon"/>
                </div>
            </div>
        </div>
        )
    }
}
