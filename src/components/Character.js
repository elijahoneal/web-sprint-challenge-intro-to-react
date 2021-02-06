// Write your Character component here
import React from 'react'


const Character = props => {
    const characters = props.people;

    return (
        characters.map( character => {
            return (
                <section>
                    <h3>Name: {character.name}</h3>
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
            )
            
        } )
        
    )
}

export default Character;