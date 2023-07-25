import React, { useState } from 'react'
import './UpcomingEventcard.css'
import { useEffect } from 'react';
import LoadingAnimation from './Loader/LoaderJson';

const UpcomingEventcard = () => {
  const [newevents, setNewEvents] = useState([]);
  const [loading, setLoading] = useState(false)
  const fetchApi = () => {
    fetch("https://synapseop.pythonanywhere.com/upcomming_events/")
      .then((data) => {
        console.log(data)
        setLoading(true)
        return data.json();
      })
      .then((objectData) => {
        console.log(objectData)
        console.log(objectData.payload)
        setNewEvents(objectData.payload)
      })
  }
  let imgurl1 = "https://synapseop.pythonanywhere.com"
  useEffect(
    () => {
      fetchApi();
    }, []
  )
  console.log(newevents)
  return (
    <>
      {
        loading ? (
          newevents.map(ecard =>
            <div>
              <h1 className='upheading'>Upcoming Events</h1>
              <div class="artboard" >
                <div class="upcard" key={ecard.id}>

                  <div class="card__side card__side--back">
                    <div class="card__details">
                      <h1>{ecard.title}</h1>
                      <p>{ecard.description}</p>
                      <h3>{ecard.date}</h3>
                    </div>
                  </div>

                  <div class="card__side card__side--front">

                    <img src={imgurl1 + ecard.images[0]} alt='imageref' className='imagearea' />
                  </div>


                </div>
              </div>
            </div>

          )
        ) : (<LoadingAnimation />)
      }
    </>
  )
}

export default UpcomingEventcard