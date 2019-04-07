
import React from 'react';

const Login = (props) => {
    return(
        <div>
            <h2>User : {props.user}</h2>
            <h2>Login Status : {props.userStatus}</h2>
        </div>
    )

}
export default Login;