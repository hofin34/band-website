import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import { Flex, Spacer, VStack, Container, Box } from '@chakra-ui/react'

function Layout() {
    return (
        <>
            <Box minHeight='100vh' minWidth='100vh'>

                <Flex direction="column" height='100vh'>
                    <NavigationBar />
                    <Box m='15px'>
                        <Outlet />
                    </Box>
                    <Spacer />
                    <Box >
                        <Footer />
                    </Box>

                </Flex>
            </Box>

        </>
    )
}

export default Layout