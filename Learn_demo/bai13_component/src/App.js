import React, { Component } from 'react';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu';
import Header from './Component/header/Header';
import Content from './Component/content/Content';
import Footer from './Component/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu/>
        <Header/>
        <div className="row">
          <Content 
            title="For those about to rock..." 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
            img="https://static1.bestie.vn/Mlog/ImageContent/201808/netizen-trung-xep-hang-8-dai-my-nhan-cua-huong-mat-tua-khoi-suong-7f41a8.jpg"/>
          <Content 
            itemPositionOne = "2"
            itemPositionTwo = "1"
            title="We salute you!" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
            img="img/02.jpg"/>
          <Content 
            title="Let there be rock!" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
            img="img/03.jpg"/>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
