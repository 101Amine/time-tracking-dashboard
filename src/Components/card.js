import React from 'react'
import './card.css'

export const Card = (props) => {

  const timeCurrent = props.timeType === 'Daily' ? props.data.timeframes.daily.current : props.timeType === 'Weekly' ? props.data.timeframes.weekly.current : props.timeType === 'Monthly' ? props.data.timeframes.monthly.current : 'NaN';


  const timePrev = props.timeType === 'Daily' ? props.data.timeframes.daily.previous : props.timeType === 'Weekly' ? props.data.timeframes.weekly.previous : props.timeType === 'Monthly' ? props.data.timeframes.monthly.previous : 'NaN'


  

  return (
    <section className='card' >
        <div className='colorful_banner' 
        style={{backgroundColor: `${props.color}`,height:'60px',overflow:'hidden'}}
        >
                <img className='icon' src={props.data.path} alt='icon' />
        </div>

        <div className='card_content grid col-2'>
            {props.data.title && <h2> {props.data.title}</h2>} 

            <img className='icon_ellipsis' src='./images/icon-ellipsis.svg' 
                alt='icon_ellipsis' />


            <h3 className='time'> {timeCurrent}hrs </h3>
            <h4 className='tracking'> Last week - {timePrev}hrs </h4>
        </div>
        

           


    </section>
  )
}
