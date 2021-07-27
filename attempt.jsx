import React, { Component } from 'react';
import './style.css';

export default class UserAttempt extends Component {


    state = { 
         
        greetings: 'Hello, ',
        
        users: [['maria', 'fenyane','lebowakgomo',22],
                ['Monicca', 'Dusana','Lydenburg' ,35],
                ['Keabswi', 'Monngoa','Ga-Mphahlele',55],
                ['Tebatso', 'Magae','Polokwane',25]]

     };
     
    render() { 
        return ( 
            <div className=" cover">
                
                <ul>
                    <h1>{this.state.greetings}</h1>
                    <li>    {this.state.users.map(element =>  [element[0] + '| '+ element[1] + ' | ' + element[3] + ' | ' + this.checkAge(element[3]) + '!!!! '] )}
                    </li>
                    {/* { this.state.users.map(element =><li>{ element } </li> )}  */}
                </ul>
            </div>
            
         );
    };
    checkAge( age){
        if(age < 18){
         return   "you are not allowed to code";
        }else
        return "you are allowed to code";
    
    };
};

