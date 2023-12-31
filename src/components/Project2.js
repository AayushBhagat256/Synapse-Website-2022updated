// import React from 'react'
import * as React from 'react'
import './Project2.css'
import { Box, CardHeader } from '@chakra-ui/react'
import {
  Card, CardBody, CardFooter,
  SimpleGrid, Heading, Text, Button
} from '@chakra-ui/react'
import {
  
  useDisclosure
} from '@chakra-ui/react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useState,useEffect } from 'react'
import Loader from './Loader'


function Project2() {
  useEffect(
    ()=>{
        Aos.init({duration:2000});
    },[]
)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading,setLoading] = useState(true)
  const [projects, setProjects] = useState([]);
  const fetchApi = () => {
    fetch("https://synapseop.pythonanywhere.com/projects/")
      .then((data) => {
        console.log(data)
        return data.json();
      })
      .then((objectData) => {
        console.log(objectData)
        console.log(objectData.payload)
        setProjects(objectData.payload)
        setLoading(false)
      })
  }

  useEffect(
    () => {
      fetchApi();
    }, []
  )
  return (
    <div>
      <Heading size='md' style={{textAlign:'center',fontSize:35,color:'#81C6E8'}}>Some of our projects...</Heading>
      <br />
      <SimpleGrid spacing={4} columns={{ base: 1, md: 2, md: 3 }} style={{padding:'6px'}}>
        {
          loading?(<Loader/>):(
            projects.map((map)=>(
              <Card className='project2card  'data-aos="fade-up" style={{ background: 'transparent', background: 'rgba(84, 84, 142, 0.25)', boxShadow: '0 8px 32px 0 rgba(91, 38, 135, 0.37)', borderRadius: '2em', border: '1px solid rgba(97, 149, 187, 0.555)', overflow: 'hidden', WebkitBackdropFilter: 'blur(1px)', backdropFilter: 'blur(1px)', color: '#81C6E8' }}>
            <CardHeader className='cardheader' >
              <Heading size='md' style={{ color: '#C9EEFF' }}>{map.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text style={{color:'#C9EEFF',fontSize:20}}>{map.field}</Text>
              <br />
              <Text>{map.description.slice(0,390)+'...'}</Text>
            </CardBody>
            <CardFooter>
              <a href={map.link}><Button  style={{ background: 'transparent', border: '1px solid rgba(97, 149, 187, 0.555)', borderRadius: '2em',textDecoration:'none',color:'#ECF9FF' }}>Read more</Button></a>
              
            </CardFooter>
          </Card>
            ))
          )
        }
        


      </SimpleGrid>
    </div>
  )
}

export default Project2
