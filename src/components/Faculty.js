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

    useEffect(
        () => {
            fetchApi();
        }, []
    )


    return (
        <div className='faculty'>
            <h1 className='heading'>This is faculty </h1>


            <div className="container">
                <h1 className='hello1'>hello Faculty</h1>
                <div className="row">
                    {display.map(map =>
                        <div className="col-md-4" key={map.id}>
                            {/* <h1>hello</h1> */}
                            <div class="card my-1" style={{ width: "18rem" }}>
                                <img src={imgurl + map.Profilepic} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">{map.Fname} {map.Lname}</h5>
                                    <p class="card-text">{map.Designation} <br />{map.testimonial} <br />{map.fk_contactid.github}</p>
                                    <a href="/" class="btn btn-primary">Button</a>
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
