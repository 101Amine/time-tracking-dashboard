import React from 'react'
import './headerCard.css'


export const HeaderCard = () => {
  return (
    <div className='long_card'>

        <div className='upper_side'>
            <img className='avatar' src='./images/image-jeremy.png' alt='jeremy_avatar' />

            <h3>Report for</h3>

            <h1> Jeremy Robson </h1>
        </div>

        <div className='bottom_side'>

            <ul>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>

            </ul>

        </div>


    </div>
  )
}
