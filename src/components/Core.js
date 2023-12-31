// import React, { useEffect } from 'react'
// import './Core.css'
// import { useState } from 'react'
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// import { SimpleGrid } from '@chakra-ui/react';
import * as React from 'react'
import './Project2.css'
import { Box, CardHeader } from '@chakra-ui/react'
import {
    Card, CardBody, CardFooter,
    SimpleGrid, Heading, Text, Button, Image
} from '@chakra-ui/react'

import Aos from 'aos';
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'
import Loader from './Loader'

//import Logo from './synapselogo.jpg'
//import IAF from './IAF.png'

function Faculty() {
    useEffect(
        () => {
            Aos.init({ duration: 2000 });
        }, []
    )
    const [displaycore, setDisplaycore] = useState([]);
    const fetchApi = () => {
        fetch("https://synapseop.pythonanywhere.com/core/")
            .then((data) => {
                console.log(data)
                return data.json();
            })
            .then((objectData) => {
                console.log(objectData)
                console.log(objectData.payload)
                setDisplaycore(objectData.payload)
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
        <>
            <div>
                <Heading size='md' style={{ textAlign: 'center', fontSize: 35, color: '#81C6E8' }}>Core</Heading>
                <br />
                <SimpleGrid spacing={4} columns={{ base: 1, md: 2, md: 3 }} style={{ padding: '20px' }}>
                    {
                        (
                            displaycore.map((map) => (
                                <Card className='project2card' data-aos="fade-up" style={{ background: 'transparent', background: 'rgba(84, 84, 142, 0.25)', boxShadow: '0 8px 32px 0 rgba(91, 38, 135, 0.37)', borderRadius: '2em', border: '1px solid rgba(97, 149, 187, 0.555)', overflow: 'hidden', WebkitBackdropFilter: 'blur(1px)', backdropFilter: 'blur(1px)', color: '#81C6E8' }}>
                                    <CardHeader className='cardheader' >
                                        <Heading size='md' style={{ color: '#C9EEFF' }}>{map.title}</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Image
                                            src={imgurl + map.Profilepic}
                                            alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                            boxSize='400px'
                                            objectFit='cover'
                                            marginLeft={'auto'}
                                            marginRight={'auto'}
                                            display={'block'}
                                        />
                                        <br />
                                        <Text style={{ color: '#C9EEFF', fontSize: 20,textAlign:'center' }}>{map.Fname} {map.Lname}</Text>
                                        <Text style={{ color: '#C9EEFF', fontSize: 16,textAlign:'center' }}>{map.Position} </Text>
                                        <br />
                                        <Text textAlign={'center'}>{map.testimonial}</Text>
                                    </CardBody>
                                    <CardFooter display={'flex'} justifyContent={'center'}>
                                        <a href={map.fk_contactid.linkedin}><Button style={{ background: 'transparent', fontSize:'1.5rem',  textDecoration: 'none', color: '#ECF9FF' }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></Button></a>
                                        <a href={map.fk_contactid.insta}><Button style={{ background: 'transparent', fontSize:'1.5rem', borderRadius: '2em', textDecoration: 'none', color: '#ECF9FF', marginLeft: '4px' }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></Button></a>
                                        <a href={"mailto:" + map.fk_contactid.email}><Button style={{ background: 'transparent', fontSize:'1.5rem', textDecoration: 'none', color: '#ECF9FF', marginLeft: '4px' }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 5H4V4h2v1zm3 1H4v1h5V6zm5-.48V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V5.52c0-.33.16-.63.42-.81L2 3.58V3c0-.55.45-1 1-1h1.2L7 0l2.8 2H11c.55 0 1 .45 1 1v.58l1.58 1.13c.27.19.42.48.42.81zM3 7.5L7 10l4-2.5V3H3v4.5zm-2 6l4.5-3-4.5-3v6zm11 .5l-5-3-5 3h10zm1-6.5l-4.5 3 4.5 3v-6z"></path></svg></Button></a>
                                        <a href={map.fk_contactid.github}><Button style={{ background: 'transparent', fontSize:'1.5rem', textDecoration: 'none', color: '#ECF9FF', marginLeft: '4px' }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></Button></a>

                                    </CardFooter>
                                </Card>
                            ))
                        )
                    }
                </SimpleGrid>
            </div>
        </>
    )
}

export default Faculty
