import { Button, Card, CardBody, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import useOrderProcess from '../hooks/useOrderProcess';
import { FormSchemaType, schema } from '../entities/schema'
import useOrderStore from '../state/orderState';


const FORM_CONTROL_MARGIN = '10px'

function ShippingInfo() {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormSchemaType>({ resolver: zodResolver(schema), mode: 'onBlur' })
    const { nextButtonClick } = useOrderProcess();
    const setPersonInformation = useOrderStore((state) => state.setPersonInformation)
    const personInformation = useOrderStore((state) => state.personInformation)

    const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
        setPersonInformation(data);
        nextButtonClick();
    };

    return (
        <>
            <Heading>Osobní informace</Heading>
            <Card maxW='md' mx='30px'>
                <CardBody >

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isRequired isInvalid={errors.email !== undefined}>
                            <FormLabel htmlFor='email' >
                                Email
                            </FormLabel>
                            <Input type='email' id='email' defaultValue={personInformation?.email} {...register("email")} />
                            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={errors.name !== undefined} mt={FORM_CONTROL_MARGIN}>
                            <FormLabel htmlFor='name'>
                                Jméno a příjmení
                            </FormLabel>
                            <Input id='name' defaultValue={personInformation?.name} {...register("name")} />
                            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={errors.address !== undefined} mt={FORM_CONTROL_MARGIN}>
                            <FormLabel htmlFor='address'>
                                Adresa
                            </FormLabel>
                            <Input id='address' defaultValue={personInformation?.address} {...register("address")} />
                            <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
                        </FormControl>

                        <Button type="submit" isDisabled={!isValid} m='15px' colorScheme='blue' >
                            Uložit a pokračovat dále
                        </Button>

                    </form>

                </CardBody>
            </Card>

        </>
    )
}

export default ShippingInfo