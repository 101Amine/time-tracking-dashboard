import React from 'react'
import './headerCard.css'


export const HeaderCard = ({setTimeType, timeType}) => {


  const handleClick = (e) => {
    setTimeType(e.currentTarget.dataset.id)

  }

  return (
    <div className='long_card'>

        <div className='upper_side'>
            <img className='avatar' src='./images/image-jeremy.png' alt='jeremy_avatar' />

            <h3>Report for</h3>

            <h1> Jeremy Robson </h1>
        </div>

        <div className='bottom_side'>

            <ul>
                <li data-id='Daily' 
                style={{color: timeType==='Daily' ? 'azure' : ''}}
                 onClick={handleClick}>Daily</li>
                <li  style={{color: timeType==='Weekly' ? 'azure' : ''}} data-id='Weekly'  onClick={handleClick}>Weekly</li>
                <li style={{color: timeType==='Monthly' ? 'azure' : ''}} data-id='Monthly' onClick={handleClick}>Monthly</li>

            </ul>

        </div>


    </div>
  )
}
