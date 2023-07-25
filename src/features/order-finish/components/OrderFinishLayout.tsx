import { Box, Button, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useBreakpointValue, } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import useShopStore from '../../eshop/state/shopState'
import useOrderStore from '../state/orderState'
import { ImCross } from 'react-icons/im'
import { useMediaQuery } from 'react-responsive'


type Orientation = "horizontal" | "vertical";

function OrderFinishLayout() {
    const activeStep = useOrderStore((state) => state.activeStep)
    const setActiveStep = useOrderStore((state) => state.setActiveStep)
    const steps = useOrderStore((state) => state.steps)
    const cartItems = useShopStore((state) => state.cartItems);
    const navigate = useNavigate()


    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });



    useEffect(() => {
        navigate(steps[activeStep].url);
    }, [activeStep])


    return (
        <>

            <Stepper index={activeStep} mb='30px' orientation={isMobile ? 'vertical' : undefined}>
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

        </>
    )
}

export default OrderFinishLayout