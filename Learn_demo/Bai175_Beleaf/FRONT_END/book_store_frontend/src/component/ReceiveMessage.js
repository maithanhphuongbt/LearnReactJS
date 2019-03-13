import React, { Component } from 'react'

export default class ReceiveMessage extends Component {
    render() {
        return (
        <div className="recieve-message-container">
            <div className="chat-receive-user-avatar"></div>
            <p className="chat-receive-text">To update an existing project to a new version of react-scripts, open the changelog, find the version you’re currently on (check package.json in this folder if you’re not sure), and apply the migration instructions for the newer versions.In most cases bumping the react-scripts version in package.json and running npm install in this folder should be enough, but it’s good to consult the changelog for potential breaking changes.We commit to keeping the breaking changes minimal so you can upgrade react-scripts painlessly.</p>
        </div>
        )
    }
}
