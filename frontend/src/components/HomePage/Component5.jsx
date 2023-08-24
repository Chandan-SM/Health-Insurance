import React from 'react'
import pic1 from '../media/1.png'
import pic2 from '../media/2.png'

function Component5() {
  return (
    <div className='comp5'>
        <div className='comp5-left'>
          <img className='img' src={pic2} alt="" />
        </div>
        <div className='comp5-right'>
          <img className='img' src={pic1} alt="" />
        </div>
    </div>
  )
}

export default Component5