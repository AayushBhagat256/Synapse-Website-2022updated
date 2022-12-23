import React from 'react';
import './Upcomingevents.css';
import { useEffect } from 'react';
import { useState } from 'react';
//import IAF from './IAF.png'
const Upcomingevents = () => {
  const [newevents, setNewEvents] = useState([]);
    const fetchApi = () => {
        fetch("https://synapseop.pythonanywhere.com/upcomming_events/")
            .then((data) => {
                console.log(data)
                return data.json();
            })
            .then((objectData) => {
                console.log(objectData)
                console.log(objectData.payload)
                setNewEvents(objectData.payload)
            })
    }
    let imgurl1 = "https://synapseop.pythonanywhere.com"
    //let image_list = images[0]
    //let slash="/";
    useEffect(
      () => {
          fetchApi();
      }, []
  )
  
  return (
    newevents.map(card=>
      <div class='ecard mx-4' key={card.id}>
       
      <img src={imgurl1 +card.images[0]} className='eimg' alt=''></img>
      {console.log(imgurl1+card.images[0])}
      <div className='ecardinfo'>
        <h1 className='etitle'>{card.title}</h1>
        <p className='einfo'>{card.description}</p>
         <h3 className='edate'>{card.date}</h3>
         <div className='ebtn'>
         <button className='ereg'>register</button>
         </div>
      </div>
    </div>
      )
    // <div>
    //     <div class='ecard' >
    //    <img src={IAF} className='eimg' alt=''></img>
    //    <div className='ecardinfo'>
    //      <h1 className='etitle'>hjfl</h1>
    //      <p className='einfo'>ffhfhf</p>
    //       <h3 className='edate'>fhgfuf</h3>
    //       <div className='ebtn'>
    //       <button className='ereg'>register</button>
    //       </div>
    //    </div>
    //  </div>
    // </div>
  )
}

export default Upcomingevents
