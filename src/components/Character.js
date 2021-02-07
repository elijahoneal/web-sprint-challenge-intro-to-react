// Write your Character component here
import React from 'react'
import Details from './Details'
import styled from 'styled-components'


const Card = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poller+One&display=swap');
display:flex;
flex-flow: row wrap;
justify-content: space-evenly;
width:90%;
margin: 2rem auto;

`
const CharStyle = styled.section`
    background-color: rgba( 225 , 225 , 225 , 0.75 );
    font-family: 'Poller One', cursive;
    width: 30%;
    margin: 1rem auto;
    position: relative;
    color: #672F14;

`


const Character = props => {

    const characters = props.people;
   
   

    return (
        <Card>
       { characters.map( character => {
            return (
                <CharStyle>
                    <h3>Name: {character.name}</h3>
                    <Details character = {character} />
                </CharStyle>
            )
            
        } )}
        </Card>
    )
}

export default Character;