import React, { Component } from 'react';
import Cart from './component/Cart';

import './App.css';


class App extends React.Component {

   constructor(props) {

       super(props);

   }



      render(){

       return(
           <div>
           <Cart  className="cartstyle"/>

           </div>

       )
       }
   }





       export default App;