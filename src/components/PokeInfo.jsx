import React from 'react'
import './style.css';

const PokeInfo = () => {
  return (
    <>
      <h1>Pikachu</h1>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"  alt="" />
      <div className="abilities">
        <div className="group">
          <h3>blaze</h3>
        </div>
        <div className="group">
          <h3>solar power</h3>

        </div>

      </div>
      <div className="base-state">
        <h3>Hp:40</h3>
        <h3>Attack:80</h3>
        <h3>Speed:32</h3>
        <h3>Defence:54</h3>
        <h3>Special-Attack:80</h3>


      </div>
    </>
  )
}

export default PokeInfo
