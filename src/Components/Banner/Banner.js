import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,image_url} from '../../Constants/constants'
import axios from '../../axios'
function Banner(){
  const[movie , setmovie]=useState()
  useEffect(()=>{
    axios.get(`/trending/movie/day?api_key=${API_KEY}&language=en-US`).then((res)=>{
      setmovie(res.data.results[Math.floor(Math.random() * res.data.results.length)])
    })
  },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? image_url+movie.backdrop_path:" "})`}}
    className='banner'>
        <div className='content'>
          <h1 className='title'>{ movie ? movie.title : " "}</h1>
          <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
          </div>
            <h1 className='desc'>{ movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
