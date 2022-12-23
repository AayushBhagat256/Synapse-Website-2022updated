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
    useEffect(
      () => {
          fetchApi();
      }, []
  )
  return (
    events.map(event=>
        <div class="timeline">
  <div class="econtainer left">
    <div class="econtent">
       <h1>{event.title}</h1> 
      <h4>{event.date}</h4>
      <p>{event.description}</p>
    </div>
  </div>
  {/* <div class="econtainer right">
    <div class="econtent">
      <h2>2016</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div> */}
  </div>)
  )
}

export default Timeline
