import React, { Fragment } from 'react'
import './MovieInfoItem.css'
import { AiFillStar } from 'react-icons/ai';

const MovieInfoItem = ({ data }) => {
  return <Fragment>
    <div className="movieInfo">
      <div className="movieInfoContainer">
        <div className="left" style={{ backgroundImage: `url(${data.Poster !== "N/A" ? data.Poster :"https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})` }}></div>
        <div className="right">
          <h1>{data.Title}</h1>
          <div className="imdbRating" style={{backgroundColor: `${data.imdbRating>=7?"green":"red"}`}}>
            <AiFillStar /><span>{data.imdbRating}</span>
          </div>
          <table>
            <tbody>
              <tr>
                <td className='dhead'>Type :</td>
                <td className='capital'>{data.Type}</td>
              </tr>
              <tr>
                <td className='dhead'>Actors :</td>
                <td>{data.Actors}</td>
              </tr>
              <tr>
                <td className='dhead'>Released :</td>
                <td>{data.Released}</td>
              </tr>
              <tr>
                <td className='dhead'>Writer :</td>
                <td>{data.Writer}</td>
              </tr>
              <tr>
                <td className='dhead'>Director :</td>
                <td>{data.Director}</td>
              </tr>
              <tr>
                <td className='dhead'>Time :</td>
                <td>{data.Runtime}</td>
              </tr>
              <tr>
                <td className='dhead'>Country :</td>
                <td>{data.Country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Fragment>
}

export default MovieInfoItem
