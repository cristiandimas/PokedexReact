import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/pokeCard.css'

const PokeCard = ({url}) => {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
  axios.get(url)
  .then((res) => {setPokemon(res.data)
    
  }).catch((err) => {console.log(err)
    
  });
  }, [])
  
  const navigate = useNavigate()

  const handleClick = () => {
   navigate(`/pokedex/${pokemon.id}`)
  }
  return (
    <article className={`poke__card border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <header className={`poke__card-header bg-${pokemon?.types[0].type.name}`}>
        <img className='poke__card-sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='poke__card-body'>
        <h3 className={`poke__card-name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul className='poke__card__types-container'>
          {
            pokemon?.types.map(type => (
              <li className='poke__card-type' key={type.type.name}>{type.type.name}</li>
            ))
          }
        </ul>
      </section>
      <footer className='poke__card-footer'>
          <ul className='poke__card__stats-container'>
          {
          pokemon?.stats.map(stat => (
            <li className='poke__card-stat' key={stat.stat.name}>
              <span className='poke__card-stat-label'>{stat.stat.name}</span>
              <span className='poke__Card-stat-number'>{stat.base_stat}</span></li>
          ))
          }
          </ul>
      </footer>
    </article>
  )
}

export default PokeCard