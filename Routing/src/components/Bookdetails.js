import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect ,withRouter}from "react-router-dom"
import './bookstyle.css'


 class Bookdetails extends React.Component{

 constructor(props){
     super(props);

 };

    showDetails=()=>
    {

const {name,author,cost,desc}=this.props;

// console.log( "Author is " + {author}+ '\n'  +"Cost =" + {cost}+'\n' +"Description = "+{desc});
 debugger
        let data = {
           name:`Name : ${name}`,
            author:`Author :    ${author}`,
            cost:`Cost :   ${cost}`,
            desc:`Description :   ${desc}`,
            valid:true,


        };


        {
            data.valid ?

                this.props.history.push('/details',data):
                alert("Some error ")


        }


    };



    render(){
    // const {author,cost,desc}=this.props;
     let {name}=this.props;

        return(

            <div className="bgColor">

                <h6 >{name} </h6>

                <button onClick={()=>this.showDetails()}  className="btn ">  Show Details </button>



            </div>


        );
    }

}


export default withRouter(Bookdetails)