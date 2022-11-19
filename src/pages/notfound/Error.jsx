import React from 'react'
import { Link } from "react-router-dom";
import "./Error.scss"

const Error = () => {
  return (
	<div className='notfound'>
	  <h1 className='err-header'>4🦠4</h1>
    	<h3>Ooops! The page you're looking for isn't available</h3>
		<h4>Please go 🔽</h4>
		<button className="btn btn-primary">
        <Link className="error__home__btn" to="/">
          Home
        </Link>
      </button>
	</div>
  )
}

export default Error
