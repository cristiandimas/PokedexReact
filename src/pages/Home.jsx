import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'

const Home = () => {
 const dispatch = useDispatch()
 const navigate = useNavigate()

const handleSubmit = e =>{
   e.preventDefault()
   dispatch(setTrainerGlobal(e.target.trainerName.value.trim()))  
   e.target.trainerName.value= '' 
   navigate('/pokedex')
}


  return (
    <div>
      <img src="/Home/pokedex.png" alt="" />
      <h1>Hi Trainer</h1>
      <p>Give me your name to start</p>
        <form onSubmit={handleSubmit}>
        <input type="text" id='trainerName' />
        <button>Start</button>
        </form>
    </div>
  )
}

export default Home