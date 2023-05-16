import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import PokeCard from '../components/PokeCard'
import './styles/pokedex.css'


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const { trainer } = useSelector(state => state)
  const [types, setTypes] = useState()
  const [typeSelected, setTypeSelected] = useState('All pokemons')

  const navigate = useNavigate()

  useEffect(() => {
    if(typeSelected !== 'All pokemons'){
        axios.get(typeSelected)
        .then((res) => {setPokemons(res.data.pokemon.map(e => e.pokemon))          
        }).catch((err) => {console.log(err);
          
        });
    }else {
    const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=999999999'    
    axios.get(URL)
      .then((res) => {
        setPokemons(res.data.results)
      }).catch((err) => {
        console.log(err)
      });
  }}, [typeSelected])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type')
    .then((res) => { setTypes(res.data.results)
      
    }).catch((err) => { console.log(err)
      
    });
  }, [])  

  const handleSubmit = e => {
    e.preventDefault()
    const input = e.target.SearchPoke.value.trim().toLowerCase()
    navigate(`/pokedex/${input}`)
  }

  const handleChange = e =>{    
    setTypeSelected(e.target.value)   
  }

  //Lógica paginación

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(6)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage
  const maxPage = pokemons && Math.ceil(pokemons.length / pokePerPage)

  return (
    <div className='pokedex__container'>
      <h2>Welcome {trainer}, here you can find your favorite pokemon</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id='SearchPoke' />
        <button>Search</button>
      </form>
      <select onChange={handleChange}>
        <option value="All pokemons">All Pokemons</option>
        {
         types?.map(type => (
          <option  key={type.url} value={type.url}>{type.name}</option>
         ))
        }
      </select>
      <Pagination 
      page={page}
      maxPage={maxPage}
      setPage={setPage}/>
      <div className='poke-container'>
      {
        pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
          <PokeCard key={pokemon.url}
            url={pokemon.url} />
        ))
      }
      </div>
    </div>
  )
}

export default Pokedex