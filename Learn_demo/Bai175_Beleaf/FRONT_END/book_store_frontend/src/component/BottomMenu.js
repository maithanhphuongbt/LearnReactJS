import React, { Component } from 'react'
import { connect } from 'react-redux';
import { UPDATE_STATUS_TAB } from './../config/Contant';

class BottomMenu extends Component {

    tabClick = (statusTab) => {
        switch (statusTab) {
            case 1:
                this.props.updateTab(1)
                break;
            case 2:
                this.props.updateTab(2)
                break;
            case 3:
                this.props.updateTab(3)
                break;
            case 4:
                this.props.updateTab(4)
                break;
            case 5:
                this.props.updateTab(5)
                break;
            default:
                break;
        }
    }

    setActiveTab = (positionTab) => {
        if (positionTab === this.props.statusTab) {
            return "item-bottom-menu item-bottom-menu-active"
        }else {
            return "item-bottom-menu"
        }
    }

    render() {
        return (
        <div id="footer">
            <div className="col-12 navbar-inverse navbar-fixed-bottom bottom-menu-container">
                <div className="row bottom-menu-container-child">
                    <div onClick={(statusTab)=>{this.tabClick(1)}} className="col-2 text-center">
                        <i className={"glyphicon glyphicon-home "+ this.setActiveTab(1)} />
                    </div>
                    <div onClick={(statusTab)=>{this.tabClick(2)}} className="col-2 col-half-offset text-center">
                        <i className={"glyphicon glyphicon-search "+ this.setActiveTab(2)} />
                    </div>
                    <div onClick={(statusTab)=>{this.tabClick(3)}} className="col-2 col-half-offset text-center">
                        <i className={"glyphicon glyphicon-shopping-cart "+ this.setActiveTab(3)} />
                    </div>
                    <div onClick={(statusTab)=>{this.tabClick(4)}} className="col-2 col-half-offset text-center">
                        <i className={"glyphicon glyphicon-book "+ this.setActiveTab(4)} />
                    </div>
                    <div onClick={(statusTab)=>{this.tabClick(5)}} className="col-2 col-half-offset text-center">
                        <i className={"glyphicon glyphicon-user "+ this.setActiveTab(5)} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        statusTab: state.statusTab
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTab: (statusTab) => {
            dispatch({
                type:UPDATE_STATUS_TAB,
                statusTab
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu)
