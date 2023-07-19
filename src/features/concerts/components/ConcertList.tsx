import axios from 'axios';
import React, { useEffect } from 'react'
import useConcerts from '../api/useConcerts';
import { Text } from '@chakra-ui/react';

function ConcertList() {
    const { data, error, isLoading } = useConcerts();
    return (
        <>
            {data?.result.map((concert) => <Text key={concert._id}>{concert.name}</Text>)}
        </>

    )
}

export default ConcertList