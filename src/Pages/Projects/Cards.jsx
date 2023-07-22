import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Button,
} from '@chakra-ui/react';


export default function ContentCards(props) {
    const k = "https://synapseop.pythonanywhere.com/projects/"
    return (
        <Center py={0}>
            <Box
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
                </Box>
                <Stack>
                    <Heading
                        color={'gray.900'}
                        fontSize={'18px'}
                        fontWeight={600}
                        fontFamily={'body'}>
                        {props.title}
                    </Heading>
                    <Text
                        fontWeight={500}
                        fontSize={'14px'}
                        letterSpacing={1.1}>
                        {props.field}
                    </Text>
                    <Text color={'gray.700'}>
                        {props.description}
                    </Text>
                        <a href={props.link}> <Button color={'#166BBD'}>
                            Read More..</Button></a>

                </Stack>
            </Box>
        </Center>
    );
}