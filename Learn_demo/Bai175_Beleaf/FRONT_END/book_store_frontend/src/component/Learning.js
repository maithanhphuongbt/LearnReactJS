import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

export default class Learning extends Component {

    constructor() {
        super();
        this.state = {
            endpoint: "http://10.0.0.28:5000",
            data:[],
            message:''
            };
    }

    componentDidMount = () => {
        const socket = socketIOClient(this.state.endpoint);
        socket.on('send message', (message) => {
            var currentDate = new Date();
            var dateTime = + currentDate.getDate() + "/"
            + (currentDate.getMonth()+1)  + "/" 
            + currentDate.getFullYear() + " - "  
            + currentDate.getHours() + ":"  
            + currentDate.getMinutes() 
            var newData = this.state.data
            var newMessage = {
                message: message,
                time: dateTime
            }
            newData.push(newMessage)
            this.setState({
                data: newData
            })
            console.log(this.state.data);
        })
    }

    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }

    sendMessage = () => {
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('send message', this.state.message)
    }

    getMessage = () => {
        if(this.state.data) {
            return this.state.data.map((value,key) => {
                return (
                    <div className="container-message" key = {key}>
                        <img src="https://res.cloudinary.com/teepublic/image/private/s--qTzgPjhE--/t_Preview/b_rgb:6e2229,c_limit,f_jpg,h_630,q_90,w_630/v1524793004/production/designs/2632126_0.jpg" alt="Avatar" style={{width: '100%'}} />
                        <p>{value.message}</p>
                        <span className="time-right">{value.time}</span>
                    </div>
                )
            })
        }
    }
    
    render() {
        return (
        <div>
            {this.getMessage()}
            <form>
                <div className="col-12 pr-0 bottom-wrapper container fixed-bottom bg-white mt-3 row d-flex align-items-center">
                    <div  className="message_input_wrapper col-10">
                        <input onChange={(event)=>this.isChange(event)} name="message" type="text" className="message_input" placeholder="Type your message here"/>
                    </div>
                    <button className="send_message col-2 px-0" type="reset" onClick={() => this.sendMessage(this.refs.messageInput)} ref="inputMessage" >
                        Send
                    </button>
                </div>
            </form>
        </div>
        )
    }
}
