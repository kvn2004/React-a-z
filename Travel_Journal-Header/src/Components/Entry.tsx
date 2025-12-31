import React from 'react'

interface EnttriesProps {
    location: string;
    placeName: string;
    dates: string;
    description: string;
    mainImageSrc: string;
    googleMapsLink: string;
}

function Entry({location, placeName, dates, description, mainImageSrc, googleMapsLink}: EnttriesProps) {
  return (
    <article className='journal-entry'>
        <div className='main-img-container'>
            <img src={mainImageSrc} alt="" className='main-img' />
        </div>
        <div>
            <div>
                <img src="/src/images/marker.png" alt="Location Pin" className='marker-img'/>
                <span className='location'>{location}</span>
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
            <div>
                <h2 className='place-name'>{placeName}</h2>
                <p className='dates'>Dates: {dates}</p>
                <p className='des'>{description}</p>
            </div>
        </div>
    </article>
  )
}

export default Entry