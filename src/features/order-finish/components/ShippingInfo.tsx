import { Button, Card, CardBody, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import useOrderProcess from '../hooks/useOrderProcess';
import { FormSchemaType, schema } from '../entities/schema'


const FORM_CONTROL_MARGIN = '10px'

function ShippingInfo() {

    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<FormSchemaType>({ resolver: zodResolver(schema), mode: 'onBlur' })
    const { nextButtonClick, buttonText } = useOrderProcess();

    const onSubmit: SubmitHandler<FormSchemaType> = (data) => console.log(data);

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
                            <Input type='email' id='email' {...register("email")} />
                            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={errors.name !== undefined} mt={FORM_CONTROL_MARGIN}>
                            <FormLabel htmlFor='name'>
                                Jméno a příjmení
                            </FormLabel>
                            <Input id='name' {...register("name")} />
                            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={errors.address !== undefined} mt={FORM_CONTROL_MARGIN}>
                            <FormLabel htmlFor='address'>
                                Adresa
                            </FormLabel>
                            <Input id='address' {...register("address")} />
                            <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
                        </FormControl>

                        <Button type="submit" isDisabled={!isValid} m='15px' colorScheme='blue' onClick={nextButtonClick}>
                            {buttonText}
                        </Button>

                    </form>

                </CardBody>
            </Card>

        </>
    )
}

export default ShippingInfo