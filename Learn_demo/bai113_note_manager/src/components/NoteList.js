import React, { Component } from 'react'
import NoteItem from './NoteItem';
import { noteData } from './firebaseConnect';


export default class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    
    getData = () => {
        if (this.state.dataFirebase) {
            return this.state.dataFirebase.map((value,key) => {
                return <NoteItem key={key} index={key} note={value}/>
            })
        }
    }

    componentWillMount() {
        noteData.on('value', (note) => {
            var arrData = []
            note.forEach(element => {
                const key = element.key;
                const title = element.val().title;
                const content = element.val().content;
                arrData.push({
                    key: key,
                    title: title,
                    content: content
                });
            })
            this.setState({
                dataFirebase: arrData
            });
        })
    }

    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        )
    }
}
// data.once('value').then(function(snapshot) {
//     console.log("snapshot",snapshot.val());
// })