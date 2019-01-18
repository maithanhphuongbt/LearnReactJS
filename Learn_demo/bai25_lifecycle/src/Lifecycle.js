import React, { Component } from 'react'

export default class Lifecycle extends Component {

    componentWillReceiveProps = (nextProps) => {
        console.log("componentWillReceiveProps lifecycle");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate lifecycle");
        return true;
    }

    componentWillUpdate = (nextProps, nextState) => {
        console.log("componentWillUpdate lifecycle");
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("componentDidUpdate lifecycle");
    }

    render() {
        console.log("render lifecycle");
        return (
        <div>
            <p>{this.props.status}</p>
            <img className="img-fluid rounded-circle" src="https://static1.bestie.vn/Mlog/ImageContent/201808/netizen-trung-xep-hang-8-dai-my-nhan-cua-huong-mat-tua-khoi-suong-7f41a8.jpg" alt="LuuAnh" />
        </div>
        )
    }
}
