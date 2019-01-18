import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fieldDate:"Saturday"
        }
    }
    
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect:true
        })
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    isFileChange = (event) => {
        const fileImage = event.target.files[0].name;
        console.log(fileImage);
        this.setState({
            fieldImage:fileImage
        })
    }

    getValue = () => {
        var content = "";
        content += "Name: " + this.state.fieldName
        content += " / Email: " + this.state.fieldEmail
        content += " / Phone: " + this.state.fieldPhone
        content += " / Message: " + this.state.fieldMessage
        content += " / Date: " + this.state.fieldDate
        content += " / Image: " + this.state.fieldImage
        return content;
    }

    render() {
        if (this.state.isRedirect) {
            console.log(this.getValue());
            return <Redirect to="/home"/>
        }
        return (
        <div>
            <section id="contact">
                <div className="container">
                    <h4 className="text-center">Contact with us</h4>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Name</label>
                                <input onChange={(event)=> this.isChange(event)} name="fieldName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email Address</label>
                                <input onChange={(event)=> this.isChange(event)} name="fieldEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Phone Number</label>
                                <input onChange={(event)=> this.isChange(event)} name="fieldPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea onChange={(event)=> this.isChange(event)} name="fieldMessage" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Date</label>
                                    <select value={this.state.fieldDate} className="form-control" name="fieldDate" onChange={(event)=> this.isChange(event)}>
                                        <option value="Monday">Thứ 2</option>
                                        <option value="Tuesday">Thứ 3</option>
                                        <option value="Wednesday">Thứ 4</option>
                                        <option value="Thursday">Thứ 5</option>
                                        <option value="Friday">Thứ 6</option>
                                        <option value="Saturday">Thứ 7</option>
                                        <option value="Sunday">Chủ nhật</option>
                                    </select>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>File</label>
                                    <input onChange={(event)=> this.isFileChange(event)} type="file" className="form-control-file" name="fileImage"/>
                                </div>
                            </div>
                            <br />
                            <div id="success" />
                            <div className="form-group">
                                <button type="submit" onClick = {(event)=> this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
