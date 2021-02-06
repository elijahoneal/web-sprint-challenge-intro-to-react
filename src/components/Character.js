// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'


const Card = styled.div`
display:flex;
flex-flow: row wrap;
justify-content: space-evenly;
width:90%;
margin: 2rem auto;

`
const CharStyle = styled.section`
    background-color: rgba( 225 , 225 , 225 , 0.75 );
    width: 30%;
    margin: 1rem auto;
    h3 {
        color: #672F14;
    }
    section {
        color: 
        text-align : center;
        ul {

            margin: 0;
            padding: 0;
        }
        li {
            list-style: none;
            line-height:1.5;
        }

    }

`


const Character = props => {
    const characters = props.people;
   
   

    return (
        <Card>
       { characters.map( character => {
            return (
                <CharStyle>
                    <h3>Name: {character.name}</h3>
                    <section>
                        <p>Birth: {character.birth_year}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Height: {character.height}</p>
                        <p>Weight: {character.mass}</p>
                        <ul> Film Appearances:
                            {character.films.map( film => {
                        return <li key = {Math.random()}>{film}</li>
                        })}
                    </ul>
                    </section>
                </CharStyle>
            )
            
        } )}
        </Card>
    )
}

export default Character;