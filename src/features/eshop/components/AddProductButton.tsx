import { Button, Text } from '@chakra-ui/react'
import { BsCartFill } from 'react-icons/bs';
import React, { useState } from 'react'

interface Props {
    onClickAction: () => void;
}

function AddProductButton({ onClickAction }: Props) {
    const [isLoading, setIsLoading] = useState(false);

    const buttonClickAction = () => {
        onClickAction();
        setIsLoading(true);
    }

    if (isLoading) {
        return <Text fontSize='lg' color='green'>Přidáno.</Text>
    }
    else {
        return <Button leftIcon={<BsCartFill />} variant='solid' colorScheme='blue' onClick={buttonClickAction} >Do košíku</Button>
    }
}

export default AddProductButton