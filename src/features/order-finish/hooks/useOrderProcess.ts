import { useNavigate } from "react-router-dom";
import useOrderStore from "../state/orderState";

interface ReturnInterface {
    nextButtonClick: () => void
}

function useOrderProcess(): ReturnInterface {
    const activeStep = useOrderStore((state) => state.activeStep)
    const setActiveStep = useOrderStore((state) => state.setActiveStep)
    const steps = useOrderStore((state) => state.steps)
    const navigate = useNavigate()
    const markStepDone = useOrderStore((state) => state.markStepDone)

    const nextButtonClick = () => {
        if (activeStep + 1 < steps.length) {
            setActiveStep(activeStep + 1);
            markStepDone(activeStep);
        } else {
            navigate('/gratulace');
        }
    }


    return { nextButtonClick }


}

export default useOrderProcess;
