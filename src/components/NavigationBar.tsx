import { HamburgerIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Center, Divider, Flex, Grid, GridItem, HStack, Heading, Hide, IconButton, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Show, Spacer, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useShopStore from '../features/eshop/state/shopState';
import { BsCircleFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import CartIcon from '../features/eshop/components/CartIcon';

const btnStyle = (isActive: boolean, isPending: boolean) => {
    return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? "red" : "black",
    };
}

function NavigationBar() {
    const [navShowed, setNavShowed] = useState(false);
    const cartItems = useShopStore((state) => state.cartItems);

    return (
        <>
            <Grid templateAreas={{
                base: `"logo burger"
                    "link link"` ,
                md: `"logo link"`
            }} padding='15px' mb='30px'>
                <GridItem area={'logo'}>

                    <Heading>
                        <NavLink to="/">
                            Špajz Bojz

                        </NavLink>
                    </Heading>
                </GridItem>
                <Hide above='md'>
                    <GridItem area={'burger'}>
                        <Flex justifyContent='flex-end'>
                            <IconButton onClick={() => setNavShowed(!navShowed)} aria-label='hamburger-menu' icon={<HamburgerIcon />} />
                        </Flex>
                    </GridItem>
                </Hide>
                <GridItem area={'link'}>
                    <Flex height='100%' gap="15px" justifyContent='flex-end' alignItems='center' direction={{ base: "column", md: "row" }} display={{ base: navShowed ? "flex" : "none", md: "flex" }}>
                        <NavLink to="o-nas"
                            style={({ isActive, isPending }) => btnStyle(isActive, isPending)}>O nás</NavLink>
                        <NavLink to="koncerty"
                            style={({ isActive, isPending }) => btnStyle(isActive, isPending)}>Koncerty</NavLink>
                        <NavLink to="eshop"
                            style={({ isActive, isPending }) => btnStyle(isActive, isPending)}>Eshop</NavLink>
                        <CartIcon cartItems={cartItems} />
                    </Flex>
                </GridItem>

            </Grid>
        </>
    )
}

export default NavigationBar