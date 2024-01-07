import React, { Fragment } from 'react'
import './MovieItems.css';

const MovieItems = ({ movieDetails, openMovie }) => {
  
  
  return <Fragment>
    <div className='singlePoster' onClick={()=>{openMovie(movieDetails.imdbID)}}>
        <h3 className='movieTitle'>{movieDetails.Title}</h3>
      <div className="filmPoster" style={{ backgroundImage: `url(${movieDetails.Poster === "N/A" ? "https://images.unsplash.com/photo-1580130775562-0ef92da028de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" : movieDetails.Poster})`}}>
        </div>
        <p className='type'><span>Type : </span>{movieDetails.Type}</p>
        <p className='year'><span>Year : </span> {movieDetails.Year}</p>
    </div>
  </Fragment>
}

export default MovieItems
