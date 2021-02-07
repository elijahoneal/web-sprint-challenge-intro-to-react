import React, {useState} from 'react';
import Films from './Films';
import styled from 'styled-components';

const CharDetails = styled.article`
    border-top: 0.2rem solid #672F14;
    position:relative;
    transition: all 2s ease;
`

const Details = props => {
const detail = props.character;
const [active, setActive] = useState(false);
    const toggle = () => {
    setActive(!active)
    }

    return (
      
        <CharDetails>
            <p>Birth: {detail.birth_year}</p>
            <p>Gender: {detail.gender}</p>
            <p>Height: {detail.height}</p>
            <p>Weight: {detail.mass}</p>
            <button onClick={toggle} >Film Appearances: </button>
           <Films active ={active} films ={detail.films} />
        </CharDetails>

    )
};

export default Details;