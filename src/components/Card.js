import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
      <div className='card--container'>

          {/* passing images as props through template literals */}

          <img src={props.imageUrl} alt="" className='card--image'/>

          <div className='card--details'>


               <div className='card--location'>
                  
                    <img src="../images/cursor.png" alt="" className='card-cursor' />
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl}> View on Google Map </a>
                  

                    
                </div>
              
              <h1>{props.title}</h1>
              <h5>{props.startDate} - {props.endDate}</h5>
              <p>{props.description }</p>


          </div>
          


    </div>
  )
}
