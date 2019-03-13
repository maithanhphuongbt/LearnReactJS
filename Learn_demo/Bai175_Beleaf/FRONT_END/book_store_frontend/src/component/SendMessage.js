import React, { Component } from 'react'

export default class SendMessage extends Component {
    render() {
        return (
        <div className="send-message-container col-12 px-0">
                <p className="chat-send-text">To update an existing project to a new version of react-scripts, open the changelog, find the version you’re currently on (check package.json in this folder if you’re not sure), and apply the migration instructions for the newer versions.In most cases bumping the react-scripts version in package.json and running npm install in this folder should be enough, but it’s good to consult the changelog for potential breaking changes.We commit to keeping the breaking changes minimal so you can upgrade react-scripts painlessly. </p>
                <span className="chat-send-user-avatar"></span> 
                {/* <div>
                <section>
                    <div id="change_username">
                        <input id="username" type="text" />
                        <button id="send_username" type="button">Change username</button>
                    </div>
                </section>
                <section id="chatroom">
                    <section id="feedback" />
                </section>
                <section id="input_zone">
                    <input id="message" className="vertical-align" type="text" />
                    <button id="send_message" className="vertical-align" type="button">Send</button>
                </section>
                </div> */}
        </div>
        )
    }
}
