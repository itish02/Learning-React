import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick = {props.click}>Hi, my name is {props.name} and I'm {props.age} years old. I am currently {props.job}.</p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.change} value = {props.name}/>
        </div>
    )
}

export default person;