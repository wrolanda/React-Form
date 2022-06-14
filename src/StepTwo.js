import React from "react";
import Typography from "@material-ui/core/Typography";
import {Form} from "./Components/Form";
import {Input} from "./Components/Input";
import {useForm} from "react-hook-form";
import {MainContainer} from "./Components/MainContainer";
import {PrimaryButton} from "./Components/PrimaryButton";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from 'react-router-dom';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import Checkbox from "@material-ui/core/Checkbox";
import {useData} from "./DataContext";

const schema = yup.object().shape({
   email: yup
      .string()
      .email("Email should have correct format")
      .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
   const phoneNumber = parsePhoneNumberFromString(value);
   if (!phoneNumber) {
      return value
   }
   return (
      phoneNumber.formatInternational()
   )
};

export const StepTwo = () => {
   const {data, setValues} = useData();
   const history = useNavigate();
   const {register, handleSubmit, watch, formState: {errors}} = useForm({
      defaultValues: {
         email: data.email,
         hasPhone: data.hasPhone,
         phoneNumber: data.phoneNumber,
      },
      mode: "onBlur",
      resolver: yupResolver(schema)
   });

   const hasPhone = watch("hasPhone");

   const onSubmit = (data) => {
      history("/step3");
      setValues(data);
      //alert(JSON.stringify(data));
   };

   return (
      <MainContainer>
         <Typography component="h2" variant="h5">
            🦄 Step 2
         </Typography>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
               {...register("email")}
               id="email"
               type="email"
               label="Email"
               name="email"
               required
               error={!!errors.email}
               helperText={errors?.email?.message}
            />
            <FormControlLabel control={
               <Checkbox {...register("hasPhone")}
                         defaultValue={data.hasPhone}
                         defaultChecked={data.hasPhone}
                         name="hasPhone"
                         color="primary"
               />
            } label="Do you have a phone"/>

            {hasPhone && (
               <Input
                  {...register("phoneNumber")}
                  id="phoneNumber"
                  type="tel"
                  label="Phone Number"
                  name="phoneNumber"
                  onChange={(event) => {
                     event.target.value = normalizePhoneNumber(event.target.value);
                  }}
               />
            )}

            <PrimaryButton>Next</PrimaryButton>
         </Form>
      </MainContainer>
   );
};