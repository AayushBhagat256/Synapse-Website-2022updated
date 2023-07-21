import React from 'react'
import './Timeline.css'
import { useEffect } from 'react';
import { useState } from 'react';

function Timeline() {
    const [events, setEvents] = useState([]);
    const fetchApi = () => {
        fetch("https://synapseop.pythonanywhere.com/past_events/")
            .then((data) => {
                console.log(data)
                return data.json();
            })
            .then((objectData) => {
                console.log(objectData)
                console.log(objectData.payload)
                setEvents(objectData.payload)
            })
    }
    let imgurl2 = "https://synapseop.pythonanywhere.com"
    useEffect(
        () => {
            fetchApi();
        }, []
    )
    return (
        <div>
            <h1 className='etimetitle' style={{fontSize:30, color:'#1a1a1a'}}><b>Events</b></h1>
            {
                events.map(event =>
                    <div class="timeline">
                        {event.id % 2 === 0 ? (
                            <>
                                <div class="econtainer left">
                                    <div class="econtent">
                                        <h1 className='timetitle'>{event.title}</h1>
                                        <h4 className='timedate'>{event.date}</h4>
                                        <p className='timedesc'>{event.description}</p>
                                        <img src={imgurl2 + event.images[0]} alt='' className='etimeimg img-fluid' ></img>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div class="econtainer right">
                                    <div class="econtent">
                                        <h1 className='timetitle'>{event.title}</h1>
                                        <h4 className='timedate'>{event.date}</h4>
                                        <p className='timedesc'>{event.description}</p>
                                        <img src={imgurl2 + event.images[0]} alt='' className='etimeimg img-fluid' ></img>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>)
            }
        </div>
    )
}

export default Timeline