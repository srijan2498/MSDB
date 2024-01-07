import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import './Movie.css'
import MovieItems from './MovieItems';
import NoResult from '../noresult/NoResult';
import PrevNext from '../Pages/PrevNext'

const Movie = (props) => {

    const movieUrl = `https://www.omdbapi.com/?apikey=616211bb&s=${props.searchValue}&page=${props.page}`;

    const [items, setItems] = useState([]);
    const [count, setCount]=useState(0)

    useEffect(() => {
        axios.get(movieUrl).then((res) => {
            setItems(res.data.Search);
            setCount(()=>{
                let c = Math.ceil((res.data.totalResults) / 10)
                return c
            })
        }).catch(err =>
            console.log(err)
        )
    }, [movieUrl]);

    return <Fragment>
        {items ? <div>
            <h1 className="movieHeading" id='movieHeading'>{props.searchValue}</h1>
            <div className="poster">
                {items.map((movieDetails) => {
                    return <MovieItems key={movieDetails.imdbID} movieDetails={movieDetails} openMovie={props.openMovie} />
                })}
            </div>
            <PrevNext prevFunc={props.prevFunc} nextFunc={props.nextFunc} page={props.page} count={count}/>
        </div> : <NoResult search={props.searchValue} />}


    </Fragment>
}

export default Movie
