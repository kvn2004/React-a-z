import React from 'react'

function Entry() {
  return (
    <article className='journal-entry'>
        <div className='main-img-container'>
            <img src="/src/images/mount-fuji.jpg" alt="" className='main-img' />
        </div>
        <div>
            <div>
                <img src="/src/images/marker.png" alt="Location Pin" className='marker-img'/>
                <span className='location'>JAPAN</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606255,138.7273634,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
            <div>
                <h2 className='place-name'>Mount Fuji</h2>
                <p className='dates'>Dates: 12 Jan, 2021 - 24 Jan, 2021</p>
                <p className='des'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet). 
                Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    </article>
  )
}

export default Entry