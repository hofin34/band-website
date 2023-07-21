import React from 'react'
import useShopStore from '../eshop/state/shopState';
import { Heading, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

function Recapitulation() {
    const cartItems = useShopStore((state) => state.cartItems);

    return (
        <>
            <Heading>Recapitulation</Heading>

            <TableContainer>
                <Table variant='striped'>

                    <Thead>
                        <Tr>
                            <Th>Položka</Th>
                            <Th>Počet</Th>
                            <Th>Cena</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cartItems.map((item) => (
                                <Tr>
                                    <Td>{item.name}</Td>
                                    <Td>1</Td>
                                    <Td>{item.price}</Td>
                                </Tr>
                            )
                            )
                        }

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th>Celkem: 400 Kč</Th>
                        </Tr>
                    </Tfoot>
                </Table>

            </TableContainer>
        </>

    )
}

export default Recapitulation