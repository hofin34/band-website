import { Card, CardBody, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import useProducts from '../api/useProducts';
import useShopStore from '../state/shopState';
import AddProductButton from './AddProductButton';

const testImg = 'https://images.pexels.com/photos/428311/pexels-photo-428311.jpeg?cs=srgb&dl=pexels-spencer-selover-428311.jpg&fm=jpg'

function getShortText(text: string, length: number) {
    if (text.length < length) {
        return text;
    }
    return text.substring(0, length) + " ..."
}

function EshopPage() {
    const { data, isLoading, error } = useProducts();
    const addProduct = useShopStore((state) => state.addItem)

    console.log(data);
    //TODO: limit description length
    return (
        <>
            <Heading>Produkty</Heading>
            <SimpleGrid spacing="10px" columns={{ base: 1, sm: 1, md: 3, lg: 6 }}>

                {data?.result.map((product) =>
                    <Card maxW='md' key={product._id}>
                        <CardBody>
                            <Image src={testImg} alt='Product image' borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{product.name}</Heading>
                                <Text>{getShortText(product.detail, 30)}</Text>
                                <Flex justifyContent='space-between' alignItems='center'>
                                    <Text color='blue.600' fontSize='2xl'>{product.price} Kč</Text>
                                    <AddProductButton onClickAction={() => addProduct(product)} />
                                </Flex>
                            </Stack>
                        </CardBody>

                    </Card >)
                }
            </SimpleGrid>
        </>


    )
}

export default EshopPage