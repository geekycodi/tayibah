import React, { Component } from 'react';
import Bookdetails from "./Bookdetails"
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';


export default class Books extends React.Component {


    constructor(props) {
        super(props);

        this.state = {


            books: [
                {
                    name: "Intro to Java",
                    author: "Jim Chapman",
                    cost: 1000,
                    description: "As publisher of SUCCESS magazine, author Darren Hardy has heard it all, seen it all, and tried most of it. This book reveals the core principles that drive success.\nThe compound effect is the strategy of reaping huge rewards from small."

                },
                {
                    name: "React Basics",
                    author: "Becca Fred",
                    cost: 500,
                    description: "Shoe Dog is a memoir by Nike co-founder Phil Knight. The memoir chronicles the history of Nike from its early struggles to its evolution into one of the world’s most recognized and profitable companies. ",

                },
                {
                    name: "Python basics",
                    author: "Liza Kosgu",
                    cost: 199,
                    description: "We Wrong About the World – and Why Things Are Better Than You Think is a 2018 book by Hans Rosling. In his book, Rosling suggests the vast majority of human beings are wrong about the state of the world.",
                }
            ]
        }


    }


    render() {



        return (

            <div>


                <h2 style={{textAlign:"center"}}>  Book List </h2>

               <ul> {
                    this.state.books.map((item) =>
                        <Bookdetails
                            name={item.name}
                            author={item.author}
                            cost={item.cost}
                            desc={item.description}
                        />
                                     )
                }

               </ul>



                 </div>

        );
     }


    }