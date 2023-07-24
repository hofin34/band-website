import { Heading } from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

type Inputs = {
    example: string
    exampleRequired: string
}

const schema = z.object({
    username: z.string()
})

function ShippingInfo() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    return (
        <>
            <Heading>ShippingInfo</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue='default' {...register("example")} />
                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <p>this is required</p>}

                <input type="submit" />

            </form>

        </>
    )
}

export default ShippingInfo