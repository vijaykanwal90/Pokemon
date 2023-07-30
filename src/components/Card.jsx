import React from 'react'
import './style.css';

const Card = ({pokemon ,loading}) => {
  console.log(pokemon);
  return (
    <>
    {
      loading ? <h1>Loading ....</h1>:
      pokemon.map((item)=>{
        return <>
            <div className='cardItem'>
        <h2>{item.id}</h2>
        <img src={item.sprites.front_default} alt="" />
        <h2>{item.name}</h2>

      </div>
        </>
      })
    }
  
    </>
  )
}

export default Card
