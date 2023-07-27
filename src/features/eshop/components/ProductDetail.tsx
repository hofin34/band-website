import { Container, Flex, Heading, Spinner, Text } from "@chakra-ui/react"
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import { useParams } from "react-router-dom"
import defaultImage from "../../../assets/default_image.jpg"
import { urlFor } from "../../../services/sanity-client"
import useProduct from "../api/useProduct"
import useShopStore from "../state/shopState"
import AddProductButton from "./AddProductButton"

function ProductDetail() {
    const addProduct = useShopStore((state) => state.addItem)
    const { id } = useParams()
    if (id === undefined) {
        return <Text color="red">Nebyla specifikována identifikace produktu.</Text>
    }

    const { data, error, isLoading } = useProduct(id)

    if (error) {
        return <Text color="red">Nastala chyba.</Text>
    }

    if (data?.result.length === 0) {
        return <Text color="red">Produkt s tímto id neexistuje</Text>
    }


    const images = data?.result[0].images.map((image) =>
        ({ original: urlFor(image.asset._ref).url(), thumbnail: urlFor(image.asset._ref).url() })) ?? [{ original: defaultImage, thumbnail: defaultImage }];

    return (
        <>
            {isLoading && <Spinner />}
            {error && <Text color="red">Nastala chyba</Text>}
            {data?.result.map((product) => (
                <Flex key={product._id}>
                    <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
                    <Flex ml='15px' direction="column">

                        <Heading>{product.name}</Heading>
                        <Text mt='20px'>{product.detail}</Text>
                        <Container mt='30px'>

                            <AddProductButton onClickAction={() => addProduct(product)} />
                        </Container>
                    </Flex>
                </Flex >
            ))
            }
        </>
    )
}

export default ProductDetail