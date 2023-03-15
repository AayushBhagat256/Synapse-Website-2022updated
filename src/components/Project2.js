// import React from 'react'
import * as React from 'react'
import './Project2.css'
import { Box, CardHeader } from '@chakra-ui/react'
import {
    Card, CardBody, CardFooter,
    SimpleGrid, Heading, Text, Button
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'


function Project2() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Card className='project2card' style={{background:'transparent',background: 'rgba(84, 84, 142, 0.25)',boxShadow: '0 8px 32px 0 rgba(91, 38, 135, 0.37)',borderRadius: '2em',border: '1px solid rgba(97, 149, 187, 0.555)',overflow:'hidden',WebkitBackdropFilter:'blur(1px)',backdropFilter:'blur(1px)',color: '#81C6E8'}}>
                    <CardHeader className='cardheader' >
                        <Heading size='md' style={{color: '#81C6E8'}}> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={onOpen} style={{background:'transparent',border: '1px solid rgba(97, 149, 187, 0.555)',borderRadius: '2em'}}>View here</Button>
                    </CardFooter>
                    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              You can scroll the content behind the modal
            </Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dolorem accusamus excepturi.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                        
                </Card>


            </SimpleGrid>
        </div>
    )
}

export default Project2
