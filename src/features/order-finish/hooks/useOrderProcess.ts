import { useNavigate } from "react-router-dom";
import useShopStore from "../../eshop/state/shopState";
import useOrderStore from "../state/orderState";

interface ReturnInterface {
    nextButtonClick: () => void
    buttonText: string
}

function useOrderProcess(): ReturnInterface {
    const activeStep = useOrderStore((state) => state.activeStep)
    const setActiveStep = useOrderStore((state) => state.setActiveStep)
    const steps = useOrderStore((state) => state.steps)
    const navigate = useNavigate()
    const cartItems = useShopStore((state) => state.cartItems);
    const markStepDone = useOrderStore((state) => state.markStepDone)

    const nextButtonClick = () => {
        if (activeStep + 1 < steps.length) {
            setActiveStep(activeStep + 1);
            markStepDone(activeStep);
        } else {
            navigate('/gratulace');
        }
    }

    let buttonText = (
        activeStep + 1 === steps.length ? "Dokončit objednávku" : "Pokračovat dále"
    )


    return { nextButtonClick, buttonText }


}

export default useOrderProcess;
