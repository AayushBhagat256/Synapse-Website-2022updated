import React from 'react';
import {
  Box,
  chakra,
  ChakraProvider,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram} from 'react-icons/bs';
import { LuLinkedin} from 'react-icons/lu';
import { ReactNode } from 'react';
import { color } from 'framer-motion';

// Define your custom theme
const customTheme = {
  colors: {
    // Add the required color here
    '#81C6E8': '#81C6E8',
  },
};

const Logo = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {/* Path Data */}
    </svg>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        color: useColorModeValue('rgba(0, 0, 0, 0.65)'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
   <ChakraProvider>
     <Box
    bgGradient={'linear(to-t, #81C6E8 0%, #81C6E8 5%,rgba(129, 198, 232, 0.54) 45% )'}
    // bgGradient={'linear-gradient(360deg, #81C6E8 0%, rgba(129, 198, 232, 0.54) 44.58%, rgba(129, 198, 232, 0.00) 100%)'}
      color={useColorModeValue('#1a1a1a')}
     >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Logo />
        <Stack direction={'row'} spacing={6} fontWeight={'semibold'}  _hover={useColorModeValue('#1a1a1a')}>
          <Link href={'#'} >About us</Link>
          <Link href={'#'}>Projects</Link>
          <Link href={'#'}>Events</Link>
        </Stack>
        <Stack textAlign={'center'} fontWeight={'medium'}>
            <p >Want to get in touch with us? Send a <Link href={'#'} fontWeight={'bold'}>message</Link></p>
        </Stack>
      </Container>

      <Box
        borderTopWidth={0.1}
        borderStyle={'outset'}
        borderColor={useColorModeValue('rgba(0, 0, 0, 0.50)')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text fontSize={'xl'} fontWeight={'medium'} color={'#1a1a1a'}>Teaching machines to learn</Text>
          <Stack direction={'row'} spacing={6} fontSize={'2xl'}>
            <SocialButton label={'Github'} href={'#'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'#'}>
              <LuLinkedin />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <BsInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
   </ChakraProvider>
  );
};

export default Footer;
