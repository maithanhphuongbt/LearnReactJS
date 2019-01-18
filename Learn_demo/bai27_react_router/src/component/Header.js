import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <div>
            <header className="masthead news marginTopHeader">
            <div className="container h-100">
                <div className="row h-100">
                <div className="header-content mx-auto" style={{display: 'flex', alignItems: 'center'}}>
                    <h1 className="mb-5" style={{margin: '0 !important'}}>{this.props.headerName}</h1>
                </div>
                </div>
            </div>
        </header>
        </div>
        )
    }
}
