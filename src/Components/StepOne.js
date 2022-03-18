import React from "react";
import {MainContainer} from "./MainContainer";
import Typography from "@material-ui/core/Typography";
import {Form} from "./Form";
import {Input} from "./Input";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./PrimaryButton";

export const StepOne = () => {
    const {register, handleSubmit, errors} = useForm({
        mode: "onBlur"
    })

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Step 1
            </Typography>
            <Form>
                <Input
                    {...register('firstName')}
                    type="text"
                    label="First Name"
                    name="firsName"
                />
                <Input
                    {...register('lastName')}
                    type="text"
                    label="Last Name"
                    name="lastName"
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
};