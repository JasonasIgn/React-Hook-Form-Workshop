import { TextField } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export const MaterialUiForm = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="materialUiForm">
      <h3>Material UI Form</h3>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField label="First Name" {...field} />}
      />

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField label="Last Name" {...field} />}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField label="Email" {...field} />}
      />

      <input type="submit" />
    </form>
  );
};
