import { Box, Flex, HStack, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const btnStyle = (isActive: boolean, isPending: boolean) => {
    return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? "red" : "black",
    };
}

function NavigationBar() {
    return (
        <>
            <Flex p="15px">
                <NavLink to="/">

                    <Heading>Špajz Bojz</Heading>
                </NavLink>
                <Spacer />

                <HStack spacing="20px">
                    <NavLink to="o-nas"
                        style={({ isActive, isPending }) => btnStyle(isActive, isPending)}>O nás</NavLink>
                    <NavLink to="koncerty"
                        style={({ isActive, isPending }) => btnStyle(isActive, isPending)}>Koncerty</NavLink>
                    <NavLink to="eshop"
                        style={({ isActive, isPending }) => btnStyle(isActive, isPending)}>Eshop</NavLink>
                </HStack>
            </Flex >
        </>
    )
}

export default NavigationBar