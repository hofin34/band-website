import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

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