import React from 'react'
import { Link } from 'react-router-dom'

function Component4() {
  return (
    <div className='comp-4'>
        <h1 className='comp4-h1'>Why wait? Embark on the magical insurance journey now!</h1>
        <div className='comp4-buttons'>
            <Link className='comp-b1' to={"/compare"}>Start Comparing</Link>
            <Link className='comp-b2' to={"/"}>Learn More</Link>
        </div>
    </div>
  )
}

export default Component4