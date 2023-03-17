// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { VerticalTimeline } from 'react-vertical-timeline-component';
// import { VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { BsFillCalendarEventFill } from "react-icons/bs";
// import './Timeline.css';
// const Timeline = () => {
//     const [events, setEvents] = useState([]);
//     const fetchApi = () => {
//         fetch("https://synapseop.pythonanywhere.com/past_events/")
//             .then((data) => {
//                 console.log(data)
//                 return data.json();
//             })
//             .then((objectData) => {
//                 console.log(objectData)
//                 console.log(objectData.payload)
//                 setEvents(objectData.payload)
//             })
//     }
//     useEffect(
//       () => {
//           fetchApi();
//       }, []
//   )
//   return (
//     <div className='events'>
//       {events.map(event=>
//       <VerticalTimeline lineColor='#fff'>
//       <VerticalTimelineElement className='etimeline' iconStyle={{background:'#fff',color:"#0E86D4"}} icon={<BsFillCalendarEventFill/>}
//       date={event.date} style={{color:'#fff'}}>
//           <h3 className='etimetitle'>{event.title}</h3>
//           <p>{event.description}</p>
//       </VerticalTimelineElement>
//     </VerticalTimeline>
//         )}
//     </div>
//   )
// }

// export default Timeline
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
            <h1 className='etimetitle' style={{fontSize:35}}><b>Events</b></h1>
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
