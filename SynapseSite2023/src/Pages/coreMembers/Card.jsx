import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    chakra,
    Container,
    Link,
    SimpleGrid,
    VisuallyHidden,
    Input,
    IconButton,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiLogoGmail, BiMailSend } from 'react-icons/bi';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
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
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};


export default function ContentCard() {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'5px 10px 20px 0px rgba(129, 198, 232, 0.30)'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'auto'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={
                            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        layout={'fill'}
                    />
                </Box>
                <Stack>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Aayush
                    </Heading>
                    <Text
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        president
                    </Text>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum.
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'LinkedIn'} href={'#'}>
                            <FaLinkedin />
                        </SocialButton>
                        <SocialButton label={'Gmail'} href={'#'}>
                            <BiLogoGmail />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                        <SocialButton label={'Github'} href={'#'}>
                            <FaGithub />
                        </SocialButton>
                    </Stack>
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>

                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}