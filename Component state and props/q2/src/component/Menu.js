import React, { Component } from 'react';
import Dishes from'./Dishes';
import AddDish from './AddDish';



 class Menu extends React.Component{

    constructor(props) {
        super(props);


        this.state={
            dishlist:[

                {
                    itemNo:1,
                    name:"Pizza",
                    cost:100,
                },

                {
                    itemNo:2,
                    name:"Biryani",
                    cost:"200",


                },

                {
                    itemNo:3,
                    name:"Fish",
                    cost:"300",

                }

            ]
        }
    }



    onAddItem=(dish)=>{

       let  {itemNo,name,cost}=dish;
        console.log(itemNo,name, cost);

        this.setState({
            dishlist: [
                ...this.state.dishlist, {itemNo: itemNo, name: name, cost: cost}
            ]
        });
    };


render(){


        return(

        <div>


       <Dishes dishlist={this.state.dishlist}/>

       <AddDish addDish={this.onAddItem}/>





</div>

);
}
}

export default Menu