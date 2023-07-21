import React from 'react'
import useShopStore from '../eshop/state/shopState';
import { Button, Heading, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';



function Recapitulation() {
    const cartItems = useShopStore((state) => state.cartItems);

    return (
        <>
            <Heading>Rekapitulace</Heading>

            <TableContainer>
                <Table variant='striped'>

                    <Thead>
                        <Tr>
                            <Th>Položka</Th>
                            <Th>Počet</Th>
                            <Th>Cena za kus</Th>
                            <Th>Odstranit</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cartItems.map((item) => (
                                <Tr>
                                    <Td>{item.product.name}</Td>
                                    <Td>{item.quantity}</Td>
                                    <Td>{item.product.price} .-</Td>
                                    <Td><Button colorScheme='red' variant='outline'>Odstranit</Button></Td>
                                </Tr>
                            )
                            )
                        }

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th fontSize='md'>Celkem: 400 Kč</Th>
                        </Tr>
                    </Tfoot>
                </Table>

            </TableContainer>
        </>

    )
}

export default Recapitulation