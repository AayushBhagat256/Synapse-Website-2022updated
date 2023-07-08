import React from 'react'
import { Center, ChakraProvider, Heading } from '@chakra-ui/react'
import {
  SimpleGrid,
} from '@chakra-ui/react'
import ContentCard from './Card'

function Core() {
  return (
    <ChakraProvider>
      <Center>
        <Heading>Core</Heading>
      </Center>
      <SimpleGrid gap={'2'} columns={{ base: 1, md: 3 }}>
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </SimpleGrid>
    </ChakraProvider>
  )
}

export default Core
