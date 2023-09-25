import React from 'react';
import './pokeCard.css';
// const POKI_API='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKI_API =  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padtothree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = (props) => {
    let imgSrc=`${POKI_API}${padtothree(props.id)}.png`;
  return (
    <div className='pokeCard'>
      <h1 className='pokecard-title'>{props.name}</h1>
      
    <div className='pokecard-image'>
    <img src={imgSrc} alt={props.name} />
    </div>

      <div className='pokecard-data'>Type: {props.type}</div>
      <div className='pokecard-data'>Exp: {props.exp}</div>
    </div>
  )
}

export default Pokecard;
