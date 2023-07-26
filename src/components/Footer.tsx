import { Box, Flex, HStack, IconButton, Spacer, Text } from '@chakra-ui/react'
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'


function Footer() {
    return (
        <Box mt='50px' height='130px' backgroundColor='blackAlpha.50'>
            <Flex p='15px' direction='row' height='100%'>
                <Flex direction='column'  >
                    <Text mb='10px' color='gray.500' size='sm'>Kontakt</Text>
                    <HStack ml='15px'>
                        <BsFillTelephoneFill />
                        <Text>+420 728 987 953</Text>
                    </HStack>
                    <HStack ml='15px'>
                        <GrMail />
                        <Text>spajzbojzz@gmail.com</Text>
                    </HStack>
                </Flex>
                <Spacer />
                <Flex direction='column' >
                    <Text mb='10px' color='gray.500' size='sm'>Sledujte nás</Text>
                    <HStack ml='20px'>
                        <IconButton aria-label='fb-link' onClick={() => window.open("https://www.facebook.com/spajzbojz", '_blank')} icon={<BsFacebook size='30px' />} />
                        <IconButton aria-label='ig-link' onClick={() => window.open("https://instagram.com/spajzbojz", '_blank')} icon={<BsInstagram size='30px' />} />
                    </HStack>
                </Flex>
            </Flex>

        </Box>
    )
}

export default Footer