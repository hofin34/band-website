import React from 'react'
import useShopStore, { getTotalPrice } from '../../eshop/state/shopState';
import { Button, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';



function Recapitulation() {
    const cartItems = useShopStore((state) => state.cartItems);
    const deleteAllItemsWithId = useShopStore((state) => state.removeAllItems);
    const setItemQuantity = useShopStore((state) => state.setProductQuantity);

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
                                <Tr key={item.product._id}>
                                    <Td>{item.product.name}</Td>
                                    <Td>
                                        <NumberInput defaultValue={item.quantity} min={1} maxW={20} onChange={(value) => setItemQuantity(item.product._id, parseInt(value))}>
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </Td>
                                    <Td>{item.product.price} .-</Td>
                                    <Td><Button onClick={() => deleteAllItemsWithId(item.product._id)} colorScheme='red' variant='outline'>Odstranit</Button></Td>
                                </Tr>
                            )
                            )
                        }

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th fontSize='md'>Celkem: {getTotalPrice(cartItems)} Kč</Th>
                        </Tr>
                    </Tfoot>
                </Table>

            </TableContainer>
        </>

    )
}

export default Recapitulation