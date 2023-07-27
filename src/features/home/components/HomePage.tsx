import { Heading, Text } from '@chakra-ui/react'
import ImageGallery from "react-image-gallery";
import concertPhoto1 from "../assets/melodka_1.jpg"
import concertPhoto2 from "../assets/melodka_2.jpg"
import concertPhoto3 from "../assets/melodka_3.jpg"

import "react-image-gallery/styles/css/image-gallery.css"

const images = [
    {
        original: concertPhoto2,
        thumbnail: concertPhoto2,
    },
    {
        original: concertPhoto1,
        thumbnail: concertPhoto1,
    },
    {
        original: concertPhoto3,
        thumbnail: concertPhoto3,
    }
];

function HomePage() {
    return (
        <>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugiat consectetur vel mollitia perferendis quos corporis magnam itaque esse, ratione sit, tempora reiciendis optio expedita possimus neque est, ut enim.</Text>

            <Heading mb='15px' mt='30px' size='lg'>Aktuality</Heading>

            <Text>

                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis amet cupiditate rerum, nostrum est suscipit. Autem, cupiditate! Necessitatibus perspiciatis odio animi, odit corrupti impedit eaque! At architecto rem reiciendis, tempore iste doloremque qui voluptas magni recusandae earum harum ad mollitia tenetur, amet nostrum quas ut odit? Quae illo aliquam suscipit dicta nemo, reiciendis voluptas amet porro quidem perferendis itaque corrupti debitis adipisci, fugiat deserunt voluptate sequi aperiam? Doloribus id ut error placeat doloremque. Dolores vel eligendi nesciunt fugit corrupti repellendus dolor exercitationem facere, dolorum dolorem ad velit, officiis sequi repellat beatae sit, possimus asperiores quibusdam in minima modi consectetur quod.
            </Text>

            <Heading mb='30px' mt='30px' size='lg'>Výběr fotek z koncertů</Heading>

            <ImageGallery items={images} />

        </>
    );
}

export default HomePage