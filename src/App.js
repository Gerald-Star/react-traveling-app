import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'
import { TravelingData } from './components/travelingData'


export default function App() {

  const cards = TravelingData.map(item => {
    return (
      <Card
        key={item.id}
        imageUrl={item.imageUrl}
        googleMapsUrl={item.googleMapsUrl}
        location={item.location}
        title={item.title}
        description={item.description}
        startDate={item.startDate}
        endData={item.endDate}

      
      
      
      
      
      
      />



    )}
  
)






  return (
    <div>
      
      <Hero /> 
      

      <section className='card-lists'>
        {cards}

      </section>
    </div>
  )
}

