import React,{Component} from "react";
import Delete from './component/Delete.js'
import './todo.css'

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            value: '',
            task:[],
        }
    }


   onChange=(e)=>
   {
       this.setState({value:e.target.value});
   }



   handleClick=(e)=>{
        e.preventDefault();
         this.setState( {
            value:'',
           task:[...this.state.task,this.state.value],
        }
      );


}


    onRemoveItem = (i) => {

        const list = this.state.task.filter((data,index) => {
            return(i !== index)
        })

        console.log(list);

        this.setState(
            {
                task: list
            }
        )

    }




    render() {

        return (


            <div>

            <form>


                <input
                    type="text"
                    value={this.state.value}
                    name="task"
                    placeholder="Add task"
                    onChange={this.onChange}/>

                <input type="button"
                       value="Add"
                       class="btn"
                       onClick={this.handleClick}
                       disabled={!this.state.value}
                />

            </form>



               < Delete task={this.state.task} remove={this.onRemoveItem} className="delete" />

            </div>
        );


    }
}




