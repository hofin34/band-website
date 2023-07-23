import { Box, Button, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const steps = [
    { title: 'Rekapitulace', description: 'Rekapitulace objednávky' },
    { title: 'Doprava', description: 'Doprava a osobní informace' },
    { title: 'Platba', description: 'Přesměrování na platební bránu' }
]

function OrderFinishLayout() {
    const { activeStep, setActiveStep } = useSteps({ index: 1, count: steps.length })
    return (
        <>

            <Stepper index={activeStep} mb='30px'>
                {steps.map((step, index) => (
                    <Step key={index} onClick={() => {
                        setActiveStep(index);
                    }}>
                        <StepIndicator>
                            <StepStatus complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />} />
                        </StepIndicator>

                        <Box flexShrink='0'>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>
                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>

            <Outlet />

            <Button m='15px' colorScheme='blue' onClick={() => setActiveStep(activeStep + 1)}>Pokračovat dále</Button>
        </>
    )
}

export default OrderFinishLayout