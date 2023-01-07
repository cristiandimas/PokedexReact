import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokeInfo.css'

const PokedexInfo = () => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [id])

  console.log(pokemon);



  return (

    <article className={`poke__info border-${pokemon?.types[0].type.name}`}>
      <header className={`poke__info-header bg-${pokemon?.types[0].type.name}`} >
        <img className='poke__info-sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='poke__info-body'>
        <div className='container___info-id'><h3 className='poke__info-id'>#{pokemon?.id}</h3></div>
        <h3 className={`poke__info-name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>

        <div className='container__types-and-habilities'>
          <div className='container__info-type'>
            <h4>Type</h4>
            <ul className='poke__info-type'>
              {
                pokemon?.types.map(type => (
                  <li className={`item__info-type bg-${type?.type.name} `} key={type.type.name}>{type.type.name}</li>
                ))
              }
            </ul>
          </div>
          <div  className='container__info-habilities' >
            <h4>Habilities</h4>
            <ul className='poke__info-habilities'>
              {
                pokemon?.abilities.map(abilitie => (
                  <li className='item__info-habilities' key={abilitie.ability.name}>{abilitie.ability.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
      <section className='poke__info-stats'>
        <h3 className='title__stats'>Stats <div className='line__stats'></div></h3>
        <ul className='poke__info__stats-container'>
          {
            pokemon?.stats.map(stat => (
              <li key={stat.stat.name}>
                <div className='stats__description'>
                <span >{stat.stat.name}</span>
                <span >{stat.base_stat} /150</span>
                </div>
                <div className='bar__stats'><div style={{width: `${(stat.base_stat * 100) / 150}%`}} className='grafic__stats'></div></div>
                </li>
            ))
          }
        </ul>
      </section>
      <footer className='poke__info-stats'>
        <h3 className='title__Movements'>Movements</h3>
        <ul className='poke__info-move'>
          {
            pokemon?.moves.map(move =>(
              <li key={move.move.name} className='poke__move-item'> {move.move.name}</li>
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokedexInfo

