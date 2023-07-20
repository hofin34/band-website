import { Heading } from '@chakra-ui/react'
import React from 'react'
import useProducts from '../api/useProducts'

function EshopPage() {
    const { data, isLoading, error } = useProducts();
    console.log(data);
    return (
        <Heading>Produkty</Heading>



    )
}

export default EshopPage