import React from 'react'
import pic4 from '../media/4.png'
import pic3 from '../media/3.png'

function Component3() {
  return (
    <div className='comp-3'>
        <div className='comp3-1'>
            <div className='comp3-1-1'>
                <h1 className='comp3-1-1-h1'>3</h1>
                <h3 className='comp3-1-1-h3'>Minutes to compare</h3>
            </div>
            <div className='comp3-1-2'>
                <img className='img' src={pic4} alt="" />
            </div>
        </div>
        <div className='comp3-2'>
            <div className='comp3-2-1'>
                <img className='img' src={pic3} alt="" />
            </div>
            <div className='comp3-2-2'>
                <h1 className='comp3-2-2-h1'>100 +</h1>
                <h3 className='comp3-2-2-h3'>Providers to choose from</h3>
            </div>
        </div>
    </div>
  )
}

export default Component3