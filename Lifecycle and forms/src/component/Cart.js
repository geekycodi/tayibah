import React, { Component } from 'react';
// import CartManager from './components/containers/CartManager/CartManager'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddItem from './AddItem.js';
import Total from './Total.js';
import './cart.css';
library.add(fas);



export default class Cart extends React.Component {

    constructor(props){

        super(props);

        this.state= {

        items:[
            {
                name:"Mango",
                quantity:2,
                price: 30,
                index:0

            },

            {
                name:"Orange",
                quantity:1,
                price: 35,
                index:1

            },

            {
                name:"Apple",
                quantity:4,
                price: 50,
                index:2

            }



        ]


        };
    }



/*
    const newItems = this.state.items.map(element => {
if (element.index === index) {
element.quantity = element.quantity + 1;
return element;
}
return element;
});
this.setState({
items: newItems
});
} */



handleAddItem=(event,item)=>    {
      event.preventDefault();
      let findItem=()=>{
      let index=-1;
      this.state.items.forEach(element=>{
      if(element.name===item.name){
            index=element.index
}
})
      return index;
}



  let findItemIndex=findItem();
  let newItems=this.state.items.slice();
     if(findItemIndex===-1){
       item["index"]=this.state.items.length+1
       item["quantity"]=1

       newItems.push(item);
      this.setState({
      items:newItems
})
}
else{
     newItems[findItemIndex].quantity+=1;
     newItems[findItemIndex].price=item.price;
     this.setState({
        items:newItems
})

}

}




getTotal=()=>{
    let total=this.state.items.reduce(
    (accumulator,element)=>accumulator+(element.price*element.quantity),0);
    return total;


}







handleMinus=(index)=>{
    const newItems = this.state.items.map(element => {
        if (element.index === index) {
            element.quantity = element.quantity - 1;
            return element;
        }
        return element;
    });
    this.setState({
                      items: newItems
                  });
}


handlePlus1=(index)=>{

    const newItems = this.state.items.map(element => {
        if (element.index === index) {
            element.quantity = element.quantity + 1;
            return element;
        }
        return element;
    });
    this.setState({
        items: newItems
    });
}



handleTrash=(index)=> {

        const newItems = this.state.items.filter(element => {

            if (element.index !== index) {

                return element;
            }
        });


        this.setState({
            items: newItems
        });

    }




render(){

    return(

        <div>

          <AddItem  handleAddItem={this.handleAddItem} />


            <table>

               <tr>

                <th>Item</th>
                   <th>Quantity</th>
                   <th>Price</th>
                   <th>Remove</th>
                   <th>Add</th>
                   <th>Delete</th>
               </tr>



                   {
                       this.state.items.map((item,index)=>{
                           console.log(item.name,item.quantity,item.price)
                           return (

                               <tr>

                                   <td> {item.name}</td>
                                   <td>{item.quantity} </td>
                                   <td>{item.price}</td>


                                   <td>
                                       <FontAwesomeIcon className="font-awesome-icon" onClick={()=>this.handleMinus(item.index)} icon="minus" />
                                   </td>
                                   <td>
                                       <FontAwesomeIcon className="font-awesome-icon" onClick={()=>this.handlePlus1(item.index)} icon="plus" />
                                   </td>
                                   <td>
                                       <FontAwesomeIcon className="font-awesome-icon" onClick={()=>this.handleTrash(item.index)} icon="trash" />
                                   </td>





                               </tr>
                           )
                       })
                   }







            </table>



            <Total getTotal={this.getTotal()}/>





        </div>
    )

    }
}

