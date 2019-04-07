import React,{Component} from "react";
//import Delete from './component/Delete.js'
import './AddItem.css'

export default class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                isValid: false,
                name: " ",
                price: 0,
            }
        }
    }

    handleOnChange=(event)=>{
        let recievedValue=event.target.value;
        let pattern=/\D+[-]\d/;
        console.log(new RegExp(pattern).test(recievedValue))
        if(new RegExp(pattern).test(recievedValue)){
            this.setState({
                isValid:true
            })


        }
        else{
            this.setState({
                    isValid:false

                }

            )
        }
        if(recievedValue.includes("-")){
            let splitedString=recievedValue.split("-");
            let name=splitedString[0];
            let price=parseInt(splitedString[1],10);

            this.setState({
                item:{
                    name:name,
                    price:price
                }
            })

        }


    }



    // handleClick=(e)=>{
    //     e.preventDefault();
    //     this.setState( {
    //             value:'',
    //             task:[...this.state.task,this.state.value],
    //         }
    //     );
    //
    //
    // };

    //
    // onRemoveItem = (i) => {
    //
    //     const list = this.state.task.filter((data,index) => {
    //         return(i !== index)
    //     })
    //
    //     console.log(list);
    //
    //     this.setState(
    //         {
    //             task: list
    //         }
    //     )
    //
    // }




    render() {

        return (


            <div>

                <form
                    onSubmit={(event)=>this.props.handleAddItem(event,this.state.item)}>



                    <input
                        type="text"
                        name="name"
                        style={this.state.isValid ? this.styleValid : this.styleInvalid}
                        placeholder="Add item and price separated by -"
                        onChange={this.handleOnChange}/>

                    <input type="button"
                           value="Add"


                    />

                </form>



                {/*< Delete task={this.state.task} remove={this.onRemoveItem} className="delete" />*/}

            </div>
        );


    }
}

