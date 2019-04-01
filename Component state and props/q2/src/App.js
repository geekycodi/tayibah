import React, { Component } from 'react';
import Menu from './component/Menu'
import Dishes from './component/Dishes';
import AddDish from './component/AddDish';
import './App.css';


class App extends React.Component {

    render(){
     return(
         <div>

         Menu
         <Menu />
         </div>

     );

    }
}



export default App;
