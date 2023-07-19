import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import { Flex, Spacer, VStack } from '@chakra-ui/react'

function Layout() {
    return (
        <>
            <Flex direction="column">
                <NavigationBar />
                <Outlet />
                <Spacer />
                <Footer />

            </Flex>

        </>
    )
}

export default Layout