import { Heading, useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function FinishCongratulation() {
    const { height, width } = useWindowSize()
    return (
        <>

            <Heading>Vaše objednávka byla úspěšně dokončena.</Heading>
            <Confetti width={width} height={height} />
        </>
    )
}

export default FinishCongratulation