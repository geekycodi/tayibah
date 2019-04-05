import React,{Component} from 'react';


class Home extends Component {
    render() {
        return(

   <Router>
<Link to="/user">User </Link>
<Link to="/user/info">User info </Link>

<Route
    path='/user/:id/:name'
    component={User}

/>



<Route
path='/user/info'
component={UserInfo}
render ={(props)=> <UserInfo {...props}/>}
/>



</Router>

</div>
);
}
}

export default Home;


class User extends React.Component{

    render(){
        const {match:{params:{id,name}}}=this.props

        return(
            <div>  Hi {id}{name}</div>
        )
    }



};


class UserInfo extends React.Component{

    render(){
        const {match:{params:{name}}}=this.props
        return(
            <div>  User Info is not vvalid.


                <h2> Hi  {}</h2>
            </div>
        )
    }



};


export default User































<Router>

<Link to="/Home">Home </Link>
<Link to ="/user">User </Link>


<Route
path='/home'
component={Home}

/>

<Route
    path='/user/info'
    component={User}
/>



/*<PrivateRoute
    path='/user'
    component={User}
      //render ={(props)=> <UserInfo {...props}/>}
  />
*/

</Router>

</div>
);
}
}

export default Home;


const Home =() =><div >

    <Prompt
        message={()=>'Are you sure?'} />
    Homepage
</div>
const User =() =><div >User page </div>



const isAuth = !true;
const PrivateRoute  = ({component:Component,...rest})=> (
    <Route {...rest}

           render ={props=>
               (isAuth?<Component{...props}/>:

                       <Redirect
                           to='/home'
                       />
               )}
    />

)





