import React, { Component } from 'react'

export default class BottomMenu extends Component {
    render() {
        return (
        <div id="footer">
            <div className="col-12 navbar-inverse navbar-fixed-bottom bottom-menu-container">
                <div className="row bottom-menu-container-child">
                    <div className="col-2 text-center"><a className="item-bottom-menu" href="#"><i className="glyphicon glyphicon-home" /></a></div>
                    <div className="col-2 col-half-offset text-center"><a className="item-bottom-menu" href="#"><i className="glyphicon glyphicon-search" /></a></div>
                    <div className="col-2 col-half-offset text-center"><a className="item-bottom-menu" href="#"><i className="glyphicon glyphicon-shopping-cart" /></a></div>
                    <div className="col-2 col-half-offset text-center"><a className="item-bottom-menu" href="#"><i className="glyphicon glyphicon-book" /></a></div>
                    <div className="col-2 col-half-offset text-center"><a className="item-bottom-menu" href="#"><i className="glyphicon glyphicon-user" /></a></div>
                </div>
            </div>
        </div>
        )
    }
}
