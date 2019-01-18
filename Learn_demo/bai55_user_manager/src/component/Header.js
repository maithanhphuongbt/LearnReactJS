import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h4 className="display-4">{this.props.headerTitle}</h4>
                    <hr />
                </div>
            </div>
        )
    }
}
