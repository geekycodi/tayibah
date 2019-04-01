import React, { Component } from 'react';
import './Dishes.css'


export class Dishes extends React.Component {

    constructor(props) {
        super(props);


    }


    render() {

        let {dishlist} = this.props;



        return (

            <div>

                <ul>

                    {
                        dishlist.map((item)=>   <Dish  itemNo={item.itemNo} name={item.name} cost={item.cost} />)
                    }
                </ul>

            </div>

        )

    }


}




class Dish extends React.Component{

    constructor(props){
        super(props);
    }

    showDetails=()=>{
        const {itemNo,name,cost}=this.props;
        console.log({itemNo ,name ,cost});

    }

    render(){

        let {name}=this.props;


        return(

            <li>
                <span>{name}</span>



                <button onClick={this.showDetails} > Show details in console </button>

            </li>

        )


    }


}

    export default Dishes