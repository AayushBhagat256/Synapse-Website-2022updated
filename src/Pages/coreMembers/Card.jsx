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


export default function ContentCard(props) {
    const k = "https://synapseop.pythonanywhere.com/"
    return (
        <Center py={0}>
            <Box
                data-aos="fade-up"
                maxW={'400px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'5px 10px 20px 0px rgba(129, 198, 232, 0.30)'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    // h={'auto'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={k + props.image}
                        // layout={'fill'}
                        maxW={'445px'}
                        w={'full'}
                        objectFit={'cover'}
                    />
                </Box>
                <Stack>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'18px'}
                        fontWeight={600}
                        fontFamily={'body'}>
                        {props.name}
                    </Heading>
                    <Text
                        fontWeight={400}
                        fontSize={'14px'}
                        letterSpacing={1.1}>
                        {props.post}
                    </Text>
                    <Text color={'gray.500'}>
                        {props.testimonial}
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'LinkedIn'} href={props.LinkedIn}>
                            <FaLinkedin />
                        </SocialButton>
                        <SocialButton label={'Gmail'} href={'mailto:' + props.gmail}>
                            <BiLogoGmail />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={props.Instagram}>
                            <FaInstagram />
                        </SocialButton>
                        <SocialButton label={'Github'} href={props.github}>
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