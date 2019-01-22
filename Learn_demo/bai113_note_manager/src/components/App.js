import React, { Component } from 'react';
import '../css/App.css';
import Navigation from './Navigation';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import AlertInfo from './AlertInfo';

class App extends Component {

  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm/>
    }
  }

  render() {
    return (
      <div>
        <Navigation/>
        <AlertInfo/>
        <div className="container mt-4">
            <div className="row">
              <NoteList/>
              {this.showForm()}
            </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps)(App)
