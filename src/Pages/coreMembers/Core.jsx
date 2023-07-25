import React, { useEffect, useState } from 'react'
import { Center, ChakraProvider, HStack, Heading } from '@chakra-ui/react'
import {
  SimpleGrid,
} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ContentCard from './Card'
import axios from 'axios'
import Loader from '../../Components/Loader/Loader'
import LoadAni from '../../Components/Loader/LoaderJson'
import Navbar from '../../Components/Navbar'
import Nav from '../../Components/Navigation/Nav'
import Footer from '../../Components/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Core() {
  const [coreData, setCoreData] = useState([])
  const [loading, setLoading] = useState(false)
  const [year, setYear] = useState('2022')
  // const [showFullTestimonial, setShowFullTestimonial] = useState(false);
  const [showFullTestimonialArray, setShowFullTestimonialArray] = useState(
    // Array(coreData.length).fill(false)
    coreData ? Array(coreData.length).fill(false) : []
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
  const intyear = parseInt(year)
  useEffect(
    () => {
      CoreDataApi(intyear)
    }, []
  )


  const CoreDataApi = (intyear) => {



    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      // url: 'https://synapseop.pythonanywhere.com/core/',
      url: `https://synapseop.pythonanywhere.com/core/?year=${intyear}`,
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
  const handleClick = async (event) => {
    const selectedValue = event.target.textContent;
    setYear(selectedValue);
    console.log(year);
    const intyear = parseInt(selectedValue); // Use selectedValue instead of year
    CoreDataApi(intyear);
  };
  return (
    <ChakraProvider>
      {/* <Navbar/> */}
      <Nav />
      {
        loading ? (<>
          <HStack  >
            <Center margin={'auto'}>
              <Heading textAlign={'center'} fontSize={'43px'}>Core</Heading>
              <Menu>
                <MenuButton backgroundColor={'rgba(129, 198, 232, 0.50)'} as={Button} marginLeft={3} rightIcon={<ChevronDownIcon />}
                  _hover={{ backgroundColor: 'rgba(129, 198, 232, 0.50)' }}
                >
                  {year}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleClick}>2022</MenuItem>
                  <MenuItem onClick={handleClick}>2023</MenuItem>
                </MenuList>
              </Menu>
            </Center>
          </HStack>
          <br />
          <Center>
            {/* <br /> */}
            <SimpleGrid gap={'12'} columns={{ base: 1, md: 3 }}>
              {
                coreData.map((map, i) => {
                  // const limitedTestimonial = map.testimonial.substr(0, 120);
                  // const shouldShowReadMore = map.testimonial.length > 35 && !showFullTestimonial;
                  const limitedTestimonial = map.testimonial.substr(0, 120);
                  const shouldShowReadMore = map.testimonial.length > 120 && !showFullTestimonialArray[i];
                  return (
                    <ContentCard image={map.Profilepic} name={map.Fname + " " + map.Lname} post={map.Position}
                      github={map.fk_contactid.github} gmail={map.fk_contactid.email} LinkedIn={map.fk_contactid.linkedin} Instagram={map.fk_contactid.insta}
                      // testimonial={map.testimonial}
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
        ) : (<LoadAni />)
      }
    </ChakraProvider>
  )
}

export default Core
