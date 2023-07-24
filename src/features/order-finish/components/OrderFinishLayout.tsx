import { Box, Button, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import useShopStore from '../../eshop/state/shopState'
import useOrderStore from '../state/orderState'
import { ImCross } from 'react-icons/im'


function OrderFinishLayout() {
    const activeStep = useOrderStore((state) => state.activeStep)
    const setActiveStep = useOrderStore((state) => state.setActiveStep)
    const steps = useOrderStore((state) => state.steps)
    const cartItems = useShopStore((state) => state.cartItems);
    const markStepDone = useOrderStore((state) => state.markStepDone)
    const navigate = useNavigate()

    useEffect(() => {
        navigate(steps[activeStep].url);
    }, [activeStep])


    const nextButtonClick = () => {
        if (activeStep + 1 < steps.length) {
            setActiveStep(activeStep + 1);
            markStepDone(activeStep);
        } else {
            navigate('/gratulace');
        }
    }

    return (
        <>

            <Stepper index={activeStep} mb='30px'>
                {steps.map((step, index) => (
                    <Step key={index} onClick={() => {
                        if ((index === 0 || steps[index - 1].done === true) && cartItems.length !== 0) {
                            setActiveStep(index);
                        }
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

            <Button isDisabled={cartItems.length > 0 ? false : true} m='15px' colorScheme='blue' onClick={nextButtonClick}>
                {activeStep + 1 === steps.length ?
                    "Dokončit objednávku" : "Pokračovat dále"
                }
            </Button>
        </>
    )
}

export default OrderFinishLayout