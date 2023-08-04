import React from 'react'
import './style.css';

const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <>
      {
        loading ? <h1>Loading ....</h1> :(
    <>
         {pokemon.filter((item , index,self, infoPokemon) => self.findIndex(p => p.id ===item.id) ===index).map((item) =>(
          
      <div className='cardItem' key = {item.id} onClick={() => infoPokemon(item)}>
        <h2>{item.id}</h2>
        <img src={item.sprites.front_default} alt="" />
        <h2>{item.name}</h2>
      </div>
          
    ))
         }
    </>)
      
}
    </>
  )
}

export default Card
   //       (
    //         <div>
    //  { pokemon.map((item)=>{


    //             <div className='cardItem' key={item.id} onClick={() => infoPokemon(item)}>
    //               <h2>{item.id}</h2>
    //               <img src={item.sprites.front_default} alt="" />
    //               <h2>{item.name}</h2>

    //             </div>

                
    //           })
    //         }
    //         </div>
    //       )