import React, { Fragment } from 'react'
import { MdOutlineSearchOff } from 'react-icons/md';
import '../Poster/Poster.css'

const NoResult = ({search}) => {
    return (
        <Fragment>
            <div className="posterIni">
                <div className="containerPoster">
                    <MdOutlineSearchOff />
                    <h1 className="headingPoster">No result found for <span className='searchValue'>{search}</span>.</h1>
                </div>
            </div>

        </Fragment>
    )
}

export default NoResult
