import React, { useEffect } from 'react'
import './Faculty.css'
import { useState } from 'react'
//import Logo from './synapselogo.jpg'
import IAF from './IAF.png'

function Faculty() {
    const [display, setDisplay] = useState([]);
    const fetchApi = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => {
                console.log(data)
                return data.json();
            })
            .then((objectData) => {
                console.log(objectData)
                setDisplay(objectData)
            })
    }

    useEffect(
        () => {
            fetchApi();
        }, []
    )


    return (
        <div className='faculty'>
            <h1 className='heading'>This is faculty </h1>

            {/* {display.map(map =>
                <div className="col-md-4 ">
                    <div class="card" style={{ width: "18rem;" }}>
                        <img src="/" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">{map.name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" class="btn btn-primary">{map.email}</a>
                        </div>
                    </div>
                </div>
            )} */}
            <div className="container">
                <h1>hello</h1>
                <div className="row">
                    {display.map(map=>
                    <div className="col-md-4">
                    {/* <h1>hello</h1> */}
                    <div class="card my-1" style={{ width: "18rem;" }}>
                <img src={IAF} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{map.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">{map.email}</a>
                </div>
            </div>
                </div>
                    )
                    
}
                    {/* <div className="col-md-4">
                        <h1>hello</h1>
                    </div>
                    <div className="col-md-4">
                        <h1>hello</h1>
                    </div> */}
                </div>
            </div>




        </div>
    )
}

export default Faculty
