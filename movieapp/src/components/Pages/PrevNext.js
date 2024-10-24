import React, { Fragment } from 'react'
import './PrevNext.css'

const PrevNext = (props) => {
  return <Fragment>
    <div className="pagesBtn">
        <button className='prevBtn' disabled={props.page===1 ? true : false } onClick={props.prevFunc}>Prev</button>
      <span>{props.page} / { props.count } pages</span>
      <button className='nextBtn' disabled={props.page === props.count?true:false} onClick={props.nextFunc}>Next</button>
    </div>
  </Fragment>
}

export default PrevNext
