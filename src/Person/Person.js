import React from 'react';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
width: 60%;
margin: 20px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;
`;

const person = (props) => {
    return (
        // < className="Person">
        <StyledDiv>
            <p onClick = {props.click}>Hi, my name is {props.name} and I'm {props.age} years old. I am currently {props.job}.</p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.change} value = {props.name}/>
        </StyledDiv>
    )
}

export default person;
