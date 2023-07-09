import React, { useEffect, useState } from 'react'
import { Center, ChakraProvider, Heading } from '@chakra-ui/react'
import {
  SimpleGrid,
} from '@chakra-ui/react'
import ContentCard from './Card'
import axios from 'axios'

function Excore() {
  const [coreData, setCoreData] = useState([])
  useEffect(
    () => {
      CoreDataApi()
    }, []
  )
  const CoreDataApi = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://synapseop.pythonanywhere.com/exmember/',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setCoreData(response.data.payload)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  console.log(coreData)
  return (
    <div>
      <ChakraProvider>
        <Heading textAlign={'center'} fontSize={'43px'}>Founders</Heading>
        <br />
        <Center>
          {/* <br /> */}
          <SimpleGrid gap={'12'} columns={{ base: 1, md: 2 }}>
            {
              coreData.map(map => {
                return (
                  <ContentCard image={map.Profilepic} name={map.Fname + " " + map.Lname} post={map.Position}
                    github={map.fk_contactid.github} gmail={map.fk_contactid.email} LinkedIn={map.fk_contactid.linkedin} Instagram={map.fk_contactid.insta}
                    testimonial={map.testimonial} />
                )
              })
            }
          </SimpleGrid>
        </Center>
        {/* <br /> */}

      </ChakraProvider>
    </div>
  )
}

export default Excore