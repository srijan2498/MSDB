import React, { Fragment} from 'react'
import { FcSearch } from 'react-icons/fc';
import './Poster.css'

const Poster = () => {

  return <Fragment>
    <div className="posterIni">
        <div className="containerPoster">
              <FcSearch/>
              <h1 className="headingPoster">Make search for your favourite movies</h1>
        </div>
    </div>
    
  </Fragment>
}

export default Poster
