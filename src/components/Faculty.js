import React, { useEffect } from 'react'
import './Faculty.css'
import { useState } from 'react'
//import Logo from './synapselogo.jpg'
//import IAF from './IAF.png'

function Faculty() {
    const [display, setDisplay] = useState([]);
    const fetchApi = () => {
        fetch("https://synapseop.pythonanywhere.com/faculty/")
            .then((data) => {
                console.log(data)
                return data.json();
            })
            .then((objectData) => {
                console.log(objectData)
                console.log(objectData.payload)
                setDisplay(objectData.payload)
            })
    }
    let imgurl = "https://synapseop.pythonanywhere.com"
    let slash="/"

    useEffect(
        () => {
            fetchApi();
        }, []
    )


    return (
        <div className='faculty'>
            <div className="container">
                <h1 className='hello1'>Faculty Members</h1>
                <div className="row ">
                    {display.slice(0,2).map(map =>
                        <div className="col-md-4" key={map.id}>
                            {/* <h1>hello</h1> */}
                            <div class="card my-1" style={{ width: "23rem" }}>
                                <img src={imgurl + map.Profilepic} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title" id='nameee'>{map.Fname} {map.Lname}</h5>
                                    <h4><p class="card-text" id='poss'>{map.Designation} </p></h4>
                                    <p class="card-text" id='testii'>{map.testimonial} </p>
                                    {/* <a href="/" class="btn btn-primary">Button</a> */}
                                    <a href={map.fk_contactid.linkedin} class="btn btn-primary" id='linkin'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
                                    
                                    <a href={map.fk_contactid.email+slash} class="btn btn-primary mx-1" id='gmail'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 5H4V4h2v1zm3 1H4v1h5V6zm5-.48V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5.52c0-.33.16-.63.42-.81L2 3.58V3c0-.55.45-1 1-1h1.2L7 0l2.8 2H11c.55 0 1 .45 1 1v.58l1.58 1.13c.27.19.42.48.42.81zM3 7.5L7 10l4-2.5V3H3v4.5zm-2 6l4.5-3-4.5-3v6zm11 .5l-5-3-5 3h10zm1-6.5l-4.5 3 4.5 3v-6z"></path></svg></a>
                                </div>
                            </div>
                        </div>
                    )

                    }

                </div>
            </div>




        </div>
    )
}

export default Faculty
