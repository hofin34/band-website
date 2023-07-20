import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Center, Divider, Flex, Grid, GridItem, HStack, Heading, Hide, IconButton, Show, Spacer, VStack, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useShopStore from '../features/eshop/state/shopState';

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
                    <Heading>Špajz Bojz</Heading>
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
                    </Flex>
                </GridItem>

            </Grid>
            <Heading>{cartItems.length}</Heading>
        </>
    )
}

export default NavigationBar