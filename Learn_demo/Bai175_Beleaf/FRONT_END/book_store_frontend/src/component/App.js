import React, { Component } from 'react';
import Search from './Search';
import BottomMenu from './BottomMenu';
import Explore from './Explore';
import { connect } from 'react-redux';
import Home from './Home';
import MarketPlace from './MarketPlace';
import Learning from './Learning';
import Profile from './Profile';

class App extends Component {


  initContent = () => {
    switch (this.props.statusTab) {
      case 1:
        return <Home />
      case 2:
        return <Explore />
      case 3:
        return <MarketPlace />
      case 4:
        return <Learning />
      case 5:
        return <Profile />
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Search/>
        <div className="container mt-5 explore-container">
          {this.initContent()}
        </div>
        <BottomMenu/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    statusTab: state.statusTab
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
