import Hero from '@/components/hero/Hero'
import React from 'react'
import image1 from '/public/s3.jpg'
import image2 from '/public/screen_2x.jpg'
import image3 from '/public/screen.jpg'


const About = () => {
  return (
    <div>
        <Hero
        image={image1}
        mainHeader={'About TravelX'}
        secondaryHeader={'Build, personalize, and optimize your itineraries with our free AI trip planner'}
        tertiaryHeader={'Designed for vacations, workations, and everyday adventures.'}
        />
        <div className='p-8'></div>
        <Hero
        image={image2}
        mainHeader={'The most optimal'}
        secondaryHeader={'Craft your perfect itinerary with Itinerary Builder.'}
        tertiaryHeader={'Enter destination, days, and budget preferences to create a personalized itinerary.'}
        />
        <div className='p-8'></div>
        <Hero
        image={image3}
        mainHeader={"The only tool you'll ever need!"}
        secondaryHeader={'Say goodbye to the stress of planning and hello to efficient and seamless itineraries'}
        />
    </div>
  )
}

export default About