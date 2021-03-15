// Shows a single Pokemon, with the name image and type
import React, { Component } from 'react'
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)

export default class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
    return (
      <div className='Pokecard'>
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt='char' className='pokemon-img' />
        <p className='Pokecard-data'>Type: {this.props.type}</p>
        <p className='Pokecard-data'>Exp: {this.props.exp} </p>
      </div>
    )
  }
}
