import React from 'react'
import './Rowpost.css'
import YouTube from 'react-youtube';
import { useEffect,useState } from 'react'
import axios from '../../axios'
import {image_url , API_KEY} from '../../Constants/constants'
function Rowpost(props) {
  const [ movies, setmovies ] = useState([])
  const [UrlId,setUrls] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      setmovies(response.data.results)
    }).catch((err) => {
      alert('Network Error')
    })
  },[])
  const size={
    height :'360',
    width : '100%',
    playerVars:{
      autoplay:0,
    },
  };
  const handle = (id)=>{
    console.log(id)
    
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        console.log(response.data.results[0])
      setUrls(response.data.results[0])
      }else{
        alert('Details Not Found')
      }
    }).catch((error) => {
      alert('Details Not Found')
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img onClick={()=>handle(obj.id)} className={props.isSmall ? 'smallposter' :'poster'} alt='loading...' src={`${image_url+obj.backdrop_path}`}></img>
      )}
      </div>
      { UrlId && <YouTube opts={size} videoId= {UrlId.key} /> }
    </div>
  )
}

export default Rowpost
