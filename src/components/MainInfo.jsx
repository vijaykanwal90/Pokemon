import React from 'react'
import Card from './Card';
import './style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PokeInfo from './PokeInfo';
const MainInfo = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    // console.log(res.data.results);
    getPokemon(res.data.results);
    setLoading(false);
    // console.log(pokeData)
  }
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      // console.log(result.data);
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b)=>a.id>b.id?1:-1)
        return state;
      })
    })
  }
  useEffect(() => {
    pokeFun();
  }, [url])


  return (
    <>
      <div className="container">
        <div className="leftContent">
          <Card pokemon={pokeData} loading={loading} />
          <div className="buttons">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
        <div className="rightContent">
          <PokeInfo />

        </div>
      </div>

    </>
  )
}

export default MainInfo
