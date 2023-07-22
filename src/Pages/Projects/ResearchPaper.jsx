import React, { useEffect, useState } from 'react'
import { Center, ChakraProvider, Heading } from '@chakra-ui/react'
import {
  SimpleGrid,
} from '@chakra-ui/react'
import ContentCards from './Cards'
import axios from 'axios'
import Loader from '../../Components/Loader/Loader'
import Navbar from '../../Components/Navbar'
import Nav from '../../Components/Navigation/Nav'

function Projects() {
  const [projectData, setprojectData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(
    () => {
      projectDataApi()
    }, []
  )
  const projectDataApi = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://synapseop.pythonanywhere.com/projects/',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setprojectData(response.data.payload)
        setLoading(true)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  console.log(projectData)
  return (
    <ChakraProvider>
      {/* <Navbar/> */}
      <Nav />
      {
        loading ? (<><Heading textAlign={'center'} fontSize={'43px'}>Projects</Heading>
          <br />
          <Center>
            {/* <br /> */}
            <SimpleGrid gap={'12'} columns={{ base: 1, md: 3 }}>
              {
                projectData.map((map, i) => {
                  return (
                    <ContentCards title={map.title} 
                    field={map.field}
                    description={map.description.slice(0,390)+'...'}
                    link={map.link} 
                    />
                  )
                })
              }
            </SimpleGrid>
          </Center>
        </>
        ) : (<Loader />)
      }

    </ChakraProvider>
  )
}

export default Projects