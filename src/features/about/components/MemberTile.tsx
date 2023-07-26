import { Card, CardBody, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import guitarPlayer from '../assets/guitar_player.jpeg'

function MemberTile() {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [isActive, setIsActive] = useState(false);

    const hoverStyle = { filter: "none", cursor: "pointer", transform: "scale(1.1)" }

    return (
        <>
            <Card onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} onClick={onOpen} width={{ base: "300px", md: "400px" }} transition="all .2s ease-in-out;" _hover={hoverStyle}>
                <Image borderTopRadius='md' overflow="hidden" filter={isActive ? undefined : "grayscale(100%)"} objectFit='cover' src={guitarPlayer} />
                <CardBody>
                    <Heading size='md'>Jan Novák</Heading>
                </CardBody>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Jan Novák
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, temporibus saepe quasi earum reprehenderit libero. Sapiente corrupti fugiat esse ea molestias iusto quasi, quas pariatur aspernatur, dolorum est fugit neque.
                    </ModalBody>

                </ModalContent>

            </Modal>
        </>
    )
}

export default MemberTile