import React from 'react'
import './card.css'

export const Card = ({title, time, tracking, color}) => {
  return (
    <section className='card' >
        <div className='colorful_banner' style={{backgroundColor: `${color}`,height:'60px',overflow:'hidden'}}>
                <img className='icon_work' src='./images/icon-work.svg' alt='icon-work' />
        </div>

        <div className='card_content grid col-2'>
            <h2> {title}</h2>

            <img className='icon_ellipsis' src='./images/icon-ellipsis.svg' 
                alt='icon_ellipsis' />


            <h3 className='time'> {time}</h3>
            <h4 className='tracking'> Last week - {tracking}</h4>
        </div>
        

           


    </section>
  )
}
