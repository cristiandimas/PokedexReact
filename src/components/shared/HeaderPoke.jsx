import React from 'react'
import './styles/headerPoke.css'

const HeaderPoke = () => {
  return (
    <header className="header">
    <img src="/Home/pokedex.png" alt="" style={{width: '80%', height: 60}}/>
      <div className="header__black">
        <div className="header__cicle"></div>
      </div>
    </header>
  )
}

export default HeaderPoke