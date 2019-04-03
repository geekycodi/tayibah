import React from "react";
import { BrowserRouter as Router, Route, Redirect,Link ,Switch} from "react-router-dom";
import Todo from'./Todo.js';
import Login from './Login.js'

import './App.css';


class App extends React.Component {

    constructor(props){
        super(props);

    }

    render(){
     return(

       <Router>

           <Switch>


               <Route exact path='/' component={Login} />
               <Route path='/todo' component={Todo} />


           </Switch>

          </Router>
     );

    }
}



export default App;
