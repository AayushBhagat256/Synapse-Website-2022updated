import React, { useEffect, useState } from 'react'
import { Center, ChakraProvider, Heading } from '@chakra-ui/react'
import {
  SimpleGrid,
} from '@chakra-ui/react'
import ContentCard from './Card'
import axios from 'axios'
import Loader from '../../Components/Loader/Loader'
import Navbar from '../../Components/Navbar'
import Nav from '../../Components/Navigation/Nav'
import Footer from '../../Components/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css'
import LoadingAnimation from '../../Components/Loader/LoaderJson'

function Faculty() {
  const [coreData, setCoreData] = useState([])
  const [loading, setLoading] = useState(false)
  const [showFullTestimonialArray, setShowFullTestimonialArray] = useState(
    Array(coreData.length).fill(false)
  );

  const handleReadMoreClick = (index) => {
    // setShowFullTestimonial(!showFullTestimonial);
    const updatedShowFullTestimonialArray = [...showFullTestimonialArray];
    updatedShowFullTestimonialArray[index] = !updatedShowFullTestimonialArray[index];
    setShowFullTestimonialArray(updatedShowFullTestimonialArray);
  };

  useEffect(
    () => {
      Aos.init({ duration: 2000 });
    }, []
  )

  useEffect(
    () => {
      CoreDataApi()
    }, []
  )
  const CoreDataApi = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://synapseop.pythonanywhere.com/faculty/',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setCoreData(response.data.payload)
        setLoading(true)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  console.log(coreData)
  return (
    <div>
      {/* <Navbar/> */}
      <Nav />
      <ChakraProvider>
        {
          loading ? (<><Heading textAlign={'center'} fontSize={'43px'}>Faculty</Heading>
            <br />
            <Center>
              {/* <br /> */}
              <SimpleGrid gap={'12'} columns={{ base: 1, md: 2 }}>
                {
                  coreData.map((map, i) => {
                    const limitedTestimonial = map.testimonial.substr(0, 120);
                    const shouldShowReadMore = map.testimonial.length > 120 && !showFullTestimonialArray[i];
                    return (
                      <ContentCard image={map.Profilepic} name={map.Fname + " " + map.Lname} post={map.Position}
                        github={map.fk_contactid.github} gmail={map.fk_contactid.email} LinkedIn={map.fk_contactid.linkedin} Instagram={map.fk_contactid.insta}
                        // testimonial={(shouldShowReadMore ? limitedTestimonial : map.testimonial)}
                        testimonial={
                          shouldShowReadMore ? (
                            <span>
                              {limitedTestimonial} <button style={{ color: '#166BBD' }} onClick={() => handleReadMoreClick(i)}>...Read More</button>
                            </span>
                          ) : (
                            map.testimonial
                          )
                        }
                      />
                    )
                  })
                }
              </SimpleGrid>
            </Center>
            <br />
            <Footer />
          </>
          // ) : (<Loader />)
          ) : (<LoadingAnimation/>)
        }
      </ChakraProvider>
    </div>
  )
}

export default Faculty
