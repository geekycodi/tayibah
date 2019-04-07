import React,{Component} from "react";


const pStyle={
    backgroundColor:'#64b5f6',color:'white',marginTop:'20px',borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
     width:'50%',
    margin:'auto',
    padding:' 4px 20px'
};

function Total (props) {




        return (

            <div   style={pStyle}>

                <h3> Total </h3>


                <p>{props.getTotal}</p>



            </div>
        )

    }


export default Total