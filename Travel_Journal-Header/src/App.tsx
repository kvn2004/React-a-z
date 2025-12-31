import React from 'react'
import Header from './Components/Header'
import Entry from './Components/Entry'

function App() {
  return (
    <>
      <Header />
      <Entry 
      location='JAPAN' 
      placeName='Mount Fuji' 
      dates='12 Jan, 2021 - 24 Jan, 2021' 
      description='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.' mainImageSrc='/src/images/mount-fuji.jpg' 
      googleMapsLink='https://www.google.com/maps/place/Mount+Fuji/@35.3606255,138.7273634,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634' />
      <Entry 
      location='JAPAN' 
      placeName='Mount Fuji' 
      dates='12 Jan, 2021 - 24 Jan, 2021' 
      description='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.' mainImageSrc='/src/images/mount-fuji.jpg' 
      googleMapsLink='https://www.google.com/maps/place/Mount+Fuji/@35.3606255,138.7273634,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634' />
    </>
  )
}

export default App