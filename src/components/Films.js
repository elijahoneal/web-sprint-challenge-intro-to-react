import React from 'react'
import styled from 'styled-components'

const List = styled.ul`

    list-style:none;
    text-align:center;
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 10rem;
    border: 1px solid red;
    
    li {
        transition: all 2s ease;
        transform: ${({active}) => active ? 'translateY(0)' : 'translateY(-1000%)' };
        opacity: ${({active}) => active ? '100%' : '0' };
        background: background-color: rgba( 225 , 225 , 225 , 0.75 );
        
    }
    

`

const Films = props => {
    const { active , films} = props;
    console.log(props)
const filmTitle = films;
    return (
        <List active = {active}>
       { filmTitle.map( film => {
            return <li key = {Math.random()}>{film}</li>
            })}
            </List>
    )
}

export default Films;