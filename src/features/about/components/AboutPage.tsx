import { Heading, Text } from '@chakra-ui/react'
import MemberTile from './MemberTile'

function AboutPage() {
    return (
        <>
            <Heading size='lg'>Biografie</Heading>
            <Text>
                Integer lacinia. Et harum quidem rerum facilis est et expedita distinctio. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Integer malesuada. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nam quis nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Praesent vitae arcu tempor neque lacinia pretium. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Mauris dictum facilisis augue. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Fusce nibh.
            </Text>
            <Heading mt='30px' mb='15px' size='lg'>Členové kapely</Heading>
            <MemberTile />
        </>
    )
}

export default AboutPage