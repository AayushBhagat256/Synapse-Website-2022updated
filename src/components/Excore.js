import React, { useEffect, useState } from 'react'
import './Excore.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
//import  { useEffect } from 'react'
import { FaLinkedinIn  } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Excore() {
    useEffect(
        ()=>{
            Aos.init({duration:2000});
        },[]
    )
    const [displayexcore, setDisplayexcore] = useState([]);
    const fetchApi = () => {
        fetch("https://synapseop.pythonanywhere.com/exmember/")
            .then((data) => {
                console.log(data)
                return data.json();
            })
            .then((objectData) => {
                console.log(objectData)
                console.log(objectData.payload)
                setDisplayexcore(objectData.payload)
            })
    }
    let imgurl = "https://synapseop.pythonanywhere.com"
    let slash = "/";

    useEffect(
        () => {
            fetchApi();
        }, []
    )
    return (
        <div className='excore'>
            
            <div className="container">
                <h1 className='hello1excore' style={{fontSize:35}}>Founders</h1>
                <div className="row">
                    {displayexcore.map(map =>
                        <div className="col-md-4" key={map.SapId}>
                            {/* <h1>hello</h1> */}
                            <div data-aos="fade-up" class="card my-1" style={{ width: "23rem" }}>
                                <img src={imgurl + map.Profilepic} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">{map.Fname} {map.Lname}</h5>
                                    <p class="card-text">{map.Position} <br />{map.testimonial} <br />{map.fk_contactid.github}</p>
                                    <a href={map.fk_contactid.linkedin + slash} class="btn btn-primary" id='linkin'><FaLinkedinIn/></a>
                                    <a href={map.fk_contactid.insta} class="btn btn-primary mx-1" id='insta'><FaInstagram/></a>
                                    <a href={"mailto:"+map.fk_contactid.email } class="btn btn-primary mx-1" id='gmail'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 5H4V4h2v1zm3 1H4v1h5V6zm5-.48V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5.52c0-.33.16-.63.42-.81L2 3.58V3c0-.55.45-1 1-1h1.2L7 0l2.8 2H11c.55 0 1 .45 1 1v.58l1.58 1.13c.27.19.42.48.42.81zM3 7.5L7 10l4-2.5V3H3v4.5zm-2 6l4.5-3-4.5-3v6zm11 .5l-5-3-5 3h10zm1-6.5l-4.5 3 4.5 3v-6z"></path></svg></a>
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

export default Excore
