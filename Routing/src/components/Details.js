import React,{Component} from 'react';


export default class  Details extends React.Component{

    render() {
        const {name,author,cost,desc}=this.props.location.state;
        console.log(this.props.location.state);
        debugger;
        return(
            <div>
                <li>{name}</li>
                <li>{author}</li>
                <li>{cost}</li>
                <li>{desc}</li>
            </div>
        )}


};
