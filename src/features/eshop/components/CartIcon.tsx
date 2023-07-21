import { Badge, Button, HStack, Heading, IconButton, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Text } from '@chakra-ui/react'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

interface Props {
    cartItems: Product[]
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
                        <Text>Položek: {cartItems.length}</Text>
                        <Text>
                            Celkem: {cartItems.reduce((accumulator, currVal) => (accumulator + currVal.price), 0)} Kč
                        </Text>
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