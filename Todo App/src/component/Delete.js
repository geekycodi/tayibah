import React from "react";
import './delete.css';
export default class Delete extends React.Component {


    constructor(props) {
        super(props);




    }



    render() {
        let {task} = this.props;


        return (

            <div>


                    {
                       task.map((item, index) => (
                            <div> {item}


                            <button type="button" className="btn"
                                        onClick={() => this.props.remove(index)}>
                                   Remove
                                </button>
                            </div>


                        ))}



            </div>


        );
    }


}