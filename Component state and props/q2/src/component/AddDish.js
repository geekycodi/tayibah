import React, { Component } from 'react';
import './addDish.css'


export default class AddDish extends React.Component{
 constructor(props){

     super(props);
     this.state={

     }
 }


    onChangeValue = e =>{
       let {name,value} = e.target;
        this.setState(
            {
                [name]:value

            }
        )
    }




    render(){

        return(

            <div>

                <h4> Add A New Dish  </h4>


            <form>
            <input
                type="number"
                name="itemno"
                onChange={this.onChangeValue}
                placeholder="Item No"
            />


                <input
                    type="text"
                    name="name"
                    onChange={this.onChangeValue}
                    placeholder="Name"
                />




                <input
                    type="text"
                    name="cost"
                    onChange={this.onChangeValue}
                    placeholder="Cost"
                />



            <input
            type="button"
            onClick={()=>this.props.addDish(this.state)}
            value="Add"
            />

            </form>


             </div>
        );
    }


}

