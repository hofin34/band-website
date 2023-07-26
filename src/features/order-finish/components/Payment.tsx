import { Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useShopStore, { getTotalPrice } from '../../eshop/state/shopState';


function Payment() {
    const cartItems = useShopStore((state) => state.cartItems);
    return (
        <>
            <Heading mb='30px'>Platba</Heading>

            <Text mb='30px' color='blue.600'>TODO - dokončit propojení s platební bránou</Text>



            <Link to='/gratulace' >

                <Button colorScheme='blue'>Zaplatit {getTotalPrice(cartItems)} Kč</Button>
            </Link>

        </>
    )
}

export default Payment