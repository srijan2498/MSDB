import React, { Fragment } from 'react';
import './Navbar.css';

const Navbar = (props) => {
  return <Fragment>
    <nav>
      <h3>Movie App</h3>
      <div className="inputs">
        <form onSubmit={props.searchFunc}>
          <input type="text" placeholder='Search your movie' id='searchInput' />
          <input type="submit" value="Search" id='submitInput'/>
        </form>
      </div>
    </nav>
  </Fragment>
}

export default Navbar
