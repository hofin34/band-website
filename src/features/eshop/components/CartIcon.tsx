import { Badge, Button, HStack, Heading, IconButton, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Text } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import ProductInCart from '../entities/productInCart'
import { getTotalPrice } from '../state/shopState'

interface Props {
    cartItems: ProductInCart[]
}

function CartIcon({ cartItems }: Props) {
    return (
        <Popover>
            <PopoverTrigger>
                <HStack>
                    <IconButton aria-label='show-cart' icon={<FaShoppingCart />} />
                    <Badge fontSize='md' colorScheme='purple' style={{ transform: 'translate(-15px, -10px)', transformOrigin: 'top' }}>{cartItems.length}</Badge>
                </HStack>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverHeader><Heading size='sm'>Nákupní košík</Heading></PopoverHeader>
                    <PopoverBody>
                        {cartItems.map((item) => (
                            <HStack key={item.product._id}>
                                <Text color='gray'>{item.quantity} x</Text>
                                <Text>{item.product.name}</Text>
                            </HStack>
                        ))}
                        <HStack mt='10px'>
                            <Text>Celkem: </Text>
                            <Text fontWeight='lg'>
                                {getTotalPrice(cartItems)} Kč
                            </Text>

                        </HStack>
                    </PopoverBody>
                    <PopoverFooter>
                        <NavLink to="rekapitulace">

                            <Button variant='outline'>Přejít k pokladně</Button>

                        </NavLink>

                    </PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}

export default CartIcon