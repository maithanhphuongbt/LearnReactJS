import React, { Component } from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInfo extends Component {

    handldeDismiss = () => {
        this.props.showAlert(false,"")
    }

    render() {
        if(this.props.alertShow) {
            return (
                <div>
                    <AlertContainer position="bottom-right">
                        <Alert onDismiss={()=>this.handldeDismiss()} timeout={1000} type={this.props.alertStatus}>{this.props.titleAlert+" thành công  "}</Alert>
                    </AlertContainer>
                </div>
                )  
        }else return null
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        titleAlert: state.titleAlert,
        alertStatus: state.alertStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showAlert: (alertShow,titleAlert) => {
            dispatch({
                type:"ALERT_SHOW",
                alertShow,
                titleAlert
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)
