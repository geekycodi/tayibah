import React, { Component } from 'react';
import Books from './components/Books'
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import './App.css';
import {Prompt} from 'react-router-dom';
import Login from './Login'
import Details from'./components/Details'
//import Bookdetails from './component.Bookdetails'



class App extends Component {

constructor(props){
    super(props);
    this.state={

    isAuth:'',
    }

}



loginAuth=(isAuth)=>{
    this.setState({
        isAuth:isAuth
    });
};

logout=()=>{
    this.setState({
        isAuth:false
    })
}

    render() {
        return (
            <Router>

                <Switch>


                    <Route exact path='/' render={(props)=><Login {...props} loginfunc={this.loginAuth}/> } />
                    <Route path='/book' component={Books} isAuth={this.state.isAuth} />
                    {/*<Route path='/bookdetails' component={Bookdetails} isAuth={this.state.isAuth}/>*/}

                    <Route path='/details' component={Details} />

                </Switch>

            </Router>





        );
    }
}

export default App


