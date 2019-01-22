import React, { Component } from 'react'
import { connect } from 'react-redux';

class Navigation extends Component {

    handleAdd= (event) => {
        event.preventDefault()// k chuyển link vào href="https://www.youtube.com/"
        this.props.changeEditStatus()
        this.props.changeTitleForm("Thêm mới")
    }

    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: 'black'}}>
                <a className="navbar-brand" href="/">VUll</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.youtube.com/" onClick={(event)=>this.handleAdd(event)} className="nav-link">Thêm note</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type:"CHANGE_EDIT_STATUS"
            })
        },
        changeTitleForm: (title) => {
            dispatch({
                type:"CHANGE_TITLE_FORM",
                title
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
