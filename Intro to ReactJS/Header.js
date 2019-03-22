import React, {Component} from 'react';

class Header extends Component{

   render() {
       //console.log(this.props,"propss");
       //let {name,code,getCode}=this.props;
       //let {value}=this.value;
    return(
        <header>

            Header
            <h3>{this.props.counter} </h3>



        </header>

         )

        }

}
export default Header;


/*<p>{value}</p>
           <button onClick={getCode(value)}>  Click me</button> */