import React, { Component } from 'react';

import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Aside from './component/Aside';

class App extends Component {

    state={
      count:0
                                                 //We can change obj dynamically using setState only.
    }

                                                 // state:{ name: "ttn"}
 getCount = (count)=>{

    this.state.count+=1;
    this.setState({count:this.state.count})
};

  render(){
                                                    // console.log(this.state);
                                                   //let {name,code} =this.state;
    return (

  <div className="App">

    <Header counter={this.state.count} />

  <Main countbtn={this.getCount}/>

  <Aside/>
  <Footer/>


  </div>
    );
  }
}

export default App;
