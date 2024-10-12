import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function MoveiApii() {
    const keyy='4844ce49';

  let [movies,setMovei]=useState([]);
  let [love ,setLove]=useState([]);
  let[drama,setDrama]=useState([]);
  let [merge,setTotal]=useState([]);
  useEffect(()=>{
axios.get(`http://www.omdbapi.com/?apikey=${keyy}&s=action`).then(response=>{if(response.data.Search){setMovei(response.data.Search)}}).catch(error=>console.log(error));
  },[]);
 
  useEffect(()=>{
axios.get(`http://www.omdbapi.com/?apikey=${keyy}&s=love`).then(response=>{if(response.data.Search){setLove(response.data.Search)}}).catch(error=>{console.log(error)});
  },[]);

  useEffect(()=>{
    axios.get(`http://www.omdbapi.com/?apikey=${keyy}&s=drama`).then(response=>{if(response.data.Search){setDrama(response.data.Search)}}).catch(error=>{console.log(error)})
  });
 
 useEffect(()=>{
    if(love.length>0 && movies.length>0){
        setTotal([...movies, ...love,...drama]);
    }
 },[movies,love,drama]);

    return ( <div>
<div className='move'>
   { merge.map(movie =>(<div key={movie.imdbID} className='moveiTarget'>
    
    {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
<h2>{movie.Title}</h2>
<p><h4>{movie.Year}</h4></p>
    </div>))

}
</div>
    </div>
    );
}

