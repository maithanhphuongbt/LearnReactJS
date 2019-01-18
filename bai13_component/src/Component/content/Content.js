import React, {
    Component
} from 'react'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0
        }
    }

    btnEdit = () => { this.setState({status:1})}

    btnRemove = () => { alert('Remove click')}

    btnArrowFunction = (param) => {alert(param)}

    btnSuccess = () => {alert('Success')}

    btnSave = () => { 
        this.setState({status:0});
        console.log(this.interface.value);
    }

    renderButton = () => (
        <div className="btn btn-group">
            <div className="btn btn btn-info" onClick={this.btnEdit}>Edit</div>
            <div className="btn btn btn-warning" onClick={this.btnRemove}>Remove</div>
        </div>
    )

    renderForm = () => (
        <div classname="row">
            <div className="form-group">
                <input ref={(data) => {this.interface = data}} defaultValue={this.props.title} type="text" className="form-control" name="name" />
            </div>
            <div className="form-group">
                <div className="btn btn-block btn-danger" onClick={()=> this.btnSave()}>Save</div>
            </div>
        </div>
    )

    displayCheck = () => {
        if (this.state.status === 0) {
            return this.renderButton();
        }else {
            return this.renderForm();
        }
    }

    render() {
        return ( 
                <div className="container">
                    <div className="col-lg-12">
                        <div className="row align-items-center">
                            <div className={"col-lg-4 order-lg-"+ this.props.itemPositionOne}>
                                <div className="p-5">
                                    <img className="img-fluid rounded-circle" src={this.props.img} alt />
                                </div>
                            </div>
                            <div className={"col-lg-8 order-lg-"+ this.props.itemPositionTwo}>
                                <div className="p-5">
                                    <h2 className="display-4">{this.props.title}</h2>
                                    <p>{this.props.content}</p>
                                    {this.displayCheck()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}