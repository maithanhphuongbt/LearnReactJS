import React, {
  Component
} from 'react';
import '../css/App.css';
import Header from './Header';
import Products from './Products';
import AddProduct from './AddProduct';
import { connect } from 'react-redux';
import { stat } from 'fs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:null
    }
  }

  componentWillMount() {
    if (this.state.data === null) {
      this.props.product.then((result) => {
        this.setState({data:result})
      })
    }
  }
  
  showProductData = () => {
    if(this.state.data !== null) {
      return this.state.data.map((value,key) => <Products key = {key} data={value}/>
      )
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <AddProduct/>
        <div className="container mt-5 mb-5">
            <div className="row">
              {this.showProductData()}
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.product,
    addStatus: state.addStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      addProduct: (product) => {
        dispatch({
            type:"ADD_DATA_SUCCESS",
            product
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)