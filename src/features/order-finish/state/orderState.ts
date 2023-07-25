import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FormSchemaType } from '../entities/schema'


interface Step {
    title: string;
    description: string;
    url: string
    done: boolean;
}


interface OrderState {
    personInformation: FormSchemaType | undefined
    setPersonInformation: (information: FormSchemaType) => void
    steps: Step[]
    activeStep: number
    setActiveStep: (stepIndex: number) => void
    markStepDone: (stepIndex: number) => void
}




const useOrderStore = create<OrderState>()(
    devtools(persist(

        (set) => ({
            personInformation: undefined,
            setPersonInformation: (information) => set({ personInformation: information }),
            activeStep: 0,
            setActiveStep: (stepIndex) => set((state) => ({ activeStep: stepIndex < state.steps.length ? stepIndex : state.activeStep })),
            markStepDone: (stepIndex) => set((state) => ({
                steps: (function () {
                    const newSteps = [...state.steps]
                    newSteps[stepIndex].done = true;
                    return newSteps;
                })()
            })),
            steps: [
                { title: 'Rekapitulace', description: 'Rekapitulace objednávky', done: false, url: '' },
                { title: 'Doprava', description: 'Doprava a osobní informace', done: false, url: 'doprava' },
                { title: 'Platba', description: 'Přesměrování na platební bránu', done: false, url: 'platba' }
            ]
        }),
        {
            name: 'order-storage'
        }

    ))
)
export default useOrderStore;
