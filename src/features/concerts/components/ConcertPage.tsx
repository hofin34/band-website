import { Heading } from '@chakra-ui/react'
import ConcertList from './ConcertList'

function ConcertPage() {
    return (
        <>
            <Heading size='lg'>Koncerty</Heading>
            <ConcertList />
        </>
    )
}

export default ConcertPage