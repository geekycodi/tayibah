import React,{Component} from "react";

import './login.css'

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state={
            username:'admin',
            password:'root',
            tempUser:'',
            tempPass:'',


        }
    };



    // login(loginfunc) {
    //
    //     let {username,password}=this.state;
    //     if(username===auth.username && password ===auth.password) {
    //         return error;
    //
    //         }
    //     }



    handleUserChange=(event)=>{
        this.setState({
            tempUser:event.target.value,
        })
    };



    handlePassChange=(event)=>{
        this.setState({
            tempPass:event.target.value,
        });
    };



    onSubmit=(event)=>{


        let {username,password,tempUser,tempPass}=this.state;
        const user= username===tempUser;
        const pass=password===tempPass;


        (user && pass) ?

            this.props.history.push('/book')


            : alert(" Username or password is invalid");


    }

    render(){

        let {loginfunc}=this.props;

        return(

            <div>

                <h4> Login </h4>

                <h6> (For authentication username = admin , password = root) </h6>

                <form onSubmit={(event)=>this.onSubmit(event)}>

                    <div>
                        <label> User Name </label>
                        <input type="text" name="username" value={this.state.tempUser }  onChange={this.handleUserChange} />

                    </div>



                    <div>
                        <label> Password </label>
                        <input type="password" name="password" value={this.state.tempPass } onChange={this.handlePassChange}/>
                    </div>


                    <input type="submit" value=" Log In" className="btn"/>



                </form>



            </div>




        );

    }

}



export default Login;