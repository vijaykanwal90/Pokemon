import React from 'react'
import Card from './Card';
import './style.css';
import PokeInfo from './PokeInfo';
const MainInfo = () => {
  return (
    <>
      <div className="container">
        <div className="leftContent">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>
        <div className="rightContent">
         <PokeInfo/>
            
        </div>
      </div>
      <div className="buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </>
  )
}

export default MainInfo
