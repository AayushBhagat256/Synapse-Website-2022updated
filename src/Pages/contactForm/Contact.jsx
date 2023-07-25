import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  CircularProgress,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  ChakraProvider,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import './Contact.css'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import Navbar from '../../Components/Navbar';
import axios from 'axios'
import { useState } from 'react';
import Nav from '../../Components/Navigation/Nav';
import Footer from '../../Components/Footer';

export default function Contact() {
  const toast = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState()
  const [number, setNumber] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState(false)
  const [load, setLoad] = useState(false)
  const validate = () => {
    let hasError = false;

    if (name.length < 3) {
      hasError = true
      toast({
        position: 'top',
        title: 'Form Incomplete',
        description: 'Please fill you correct Name',
        status: 'error',
        duration: 2500,
        isClosable: true,
      })
    }
    if (number.length != 10) {
      hasError = true
      toast({
        position: 'top',
        title: 'Form Incomplete',
        description: 'Please fill your 10 Digit Contact Number',
        status: 'error',
        duration: 2500,
        isClosable: true,
      })
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ((!emailPattern.test(email)) || email.length < 3) {
      hasError = true;
      toast({
        position: 'top',
        title: 'Form Incomplete',
        description: 'Enter your Email ID',
        status: 'error',
        duration: 2500,
        isClosable: true,
      })
    }
    if (msg.length < 3) {
      hasError = true
      toast({
        position: 'top',
        title: 'Form Incomplete',
        description: 'Please fill your Message',
        status: 'error',
        duration: 2500,
        isClosable: true,
      })
    }

    console.log("Form validator error is : " + hasError)
    setError(hasError)
    return hasError
  }
  const sendMessage = () => {
    // const axios = require('axios');
    const err = validate();
    console.log("API validator is " + err)
    if (err) {
      // alert("Plz fill the detials")
      console.log("Fill in proper detials")
    }
    else {
      setLoad(true)
      let data = JSON.stringify({
        "name": name,
        "email": email,
        "number": number,
        "message": msg
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://synapseop.pythonanywhere.com/sendMessage/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setLoad(false)
          toast({
            position: 'top',
            title: 'Your message has reached',
            description: response.data.message,
            status: 'success',
            duration: 2500,
            isClosable: true,
          })

          setEmail('')
          setMsg('')
          setName('')
          setNumber('')

        })
        .catch((error) => {
          console.log(error);
        });

    }

  }
  return (
    <ChakraProvider>
      {/* <Navbar /> */}
      <Nav />
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="122" height="95" viewBox="0 0 122 95" fill="none">
            <g clip-path="url(#clip0_1092_157)">
              <path d="M111.044 32.4334C98.4985 30.111 91.007 30.7977 83.5784 41.6568C78.8699 48.5396 75.1692 57.8678 74.4567 66.2143C74.0437 71.0522 78.6416 64.855 79.3851 63.5966C87.9874 49.0375 87.494 29.3851 74.8936 17.2852C66.6816 9.39935 57.1609 13.4434 49.9316 20.4665C38.9068 31.1768 35.6651 47.9776 37.009 62.7815C37.4561 67.7061 37.9508 82.6933 44.4328 84.1655C49.8033 85.3853 49.0485 75.6507 48.6759 72.7124C48.1448 68.5232 46.6777 59.5163 42.7517 57.1144C37.121 53.6698 30.2291 62.2643 27.9933 66.2697C23.7477 73.8761 21.8128 83.5705 19.4952 91.9214C19.3246 92.5363 22.1742 89.6987 22.6772 89.2068C24.1185 87.7982 26.07 87.038 27.3914 85.5031C28.3717 84.3642 32.2107 77.2539 28.0939 80.5741C26.6429 81.7443 21.2818 92.2943 20.8545 92.1701C19.1085 91.6642 16.4875 80.2721 16.0196 78.1628C14.8936 73.0831 24.2354 80.0702 25.3274 81.2002" stroke="black" stroke-width="2" stroke-linecap="round" />
            </g>
            <defs>
              <clipPath id="clip0_1092_157">
                <rect width="106" height="67" fill="white" transform="translate(121.069 65.4727) rotate(164.361)" />
              </clipPath>
            </defs>
          </svg>
          <Heading>Send Us a Message</Heading>
        </Flex>
        <Flex>
          <Box
            //inside color
            color="black"
            borderRadius="lg"
            // p={{ sm: 5, md: 5, lg: 16 }}
            m={{ sm: 4, md: 16, lg: 10 }}
          >
            <Box p={0} mt={0}>
              {/* <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}> */}
              <SimpleGrid gap={12} columns={{ base: 1, md: 2 }} mt={0}>

                <WrapItem>
                  <Box border={'1px solid #F2F4F7'} boxShadow={'5px 10px 20px 0px rgba(129, 198, 232, 0.30)'} borderRadius="lg" width={'500px'} ml={{ base: 5 }} textAlign={'center'} id='conbox'>
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          {/* <FormLabel>Your Name</FormLabel> */}
                          <InputGroup borderColor="#E0E1E7" className='inpfie'>
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Name' size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          {/* <FormLabel>Mail</FormLabel> */}
                          <InputGroup borderColor="#E0E1E7" className='inpfie'>
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" value={email} onChange={e => setEmail(e.target.value)} size="md" placeholder='Email' />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          {/* <FormLabel>Phone</FormLabel> */}
                          <InputGroup borderColor="#E0E1E7" className='inpfie'>
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdPhone color="gray.800" />}
                            />
                            <Input type="text" value={number} onChange={e => setNumber(e.target.value)} size="md" placeholder='Phone' />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" >
                          {/* <FormLabel>Message</FormLabel> */}
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            className='inpfie'
                            value={msg}
                            onChange={e => setMsg(e.target.value)}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          {/* <Button
                            onClick={sendMessage}
                            variant="solid"
                            bg="#81C6E8"
                            border={'1px solid rgba(0, 0, 0, 0.50)'}
                            // color="white"
                            _hover={{}}>
                            Sent !
                          </Button> */}
                          {/* <button onClick={sendMessage} className='btn12send'>
                            <div class="svg-wrapper-1">
                              <div class="svg-wrapper">
                                <svg height="20" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                            <span>Send</span>
                          </button> */}
                          <button onClick={sendMessage} className='btn12send'>
                            {
                              !load ? (
                                <>
                                  <span>Send</span>
                                  <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </>
                              ) : (<CircularProgress isIndeterminate color='black' />)
                            }
                          </button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>

                <WrapItem>
                  <Box bg={'linear-gradient(180deg, #81C6E8 0%, rgba(129, 198, 232, 0.43) 100%)'} boxShadow={'5px 10px 20px 0px rgba(129, 198, 232, 0.30)'} className='infobox' borderRadius={'lg'} id='conbox'  >
                    <Heading ml={'40px'} >Contact us at</Heading>
                    <Text ml={'40px'} mt={{ sm: 2, md: 2, lg: 2 }} color="gray.500">
                      Get in touch with us..
                    </Text>
                    <Box marginTop={0} id='box123' py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} ml={{ base: 0, md: 5 }} align={'flex-start'} spacing={2} >
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="black"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone size="20px" />}>
                          +91-988888888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="black"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail size="20px" />}>
                          hello@abc.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="black"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn size="20px" />}
                        >
                          Mumbai , India
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="black"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<FaLinkedinIn size="20px" />}>
                          www.linkedin.com/company/djs-synapse/
                        </Button>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </SimpleGrid>
              {/* </Wrap> */}
            </Box>
          </Box>
        </Flex>
      </Container>
      <br />
      <Footer />
    </ChakraProvider>

  );
}