import React from "react";
import Typography from "@material-ui/core/Typography";
import {Form} from "./Components/Form";
import {Input} from "./Components/Input";
import {useForm} from "react-hook-form";
import {MainContainer} from "./Components/MainContainer";
import {PrimaryButton} from "./Components/PrimaryButton";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import {useData} from "./DataContext";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field")
});

export const StepOne = () => {
    const history = useNavigate();
    const {data, setValues} = useData();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.lastName },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        history("/step2");
        setValues(data);
    };

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                🦄 Step 1
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('firstName')}
                    id="firstName"
                    type="text"
                    label="First Name"
                    name="firstName"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                <Input
                    {...register('lastName')}
                    id="lastName"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
};