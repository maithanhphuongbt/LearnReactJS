import React, { Component } from 'react'

export default class InputMessage extends Component {
    render() {
        return (
        <div className="col-12 pr-0 bottom-wrapper container fixed-bottom bg-white mt-3 row d-flex align-items-center">
            <div  className="message_input_wrapper col-10">
                <input ref="messageInput" type="text" className="message_input" placeholder="Type your message here"/>
            </div>
            <div className="send_message col-2 px-0" onClick={() => this.props.sendMessage(this.refs.messageInput)} ref="inputMessage" >
                <div className='btn-send-message'>Send</div>
            </div>
        </div>
        )
    }
}
