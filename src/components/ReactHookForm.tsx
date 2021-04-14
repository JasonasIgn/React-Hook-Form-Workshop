import React from "react";
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FieldErrors,
} from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export const ReactHookForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));

  const onError: SubmitErrorHandler<FormValues> = (
    errors: FieldErrors<FormValues>
  ) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <h3>React Hook Form</h3>
      <div className="formField">
        <label>First Name</label>
        <input {...register("firstName", { required: true })} />
      </div>

      <div className="formField">
        <label>Last Name</label>
        <input {...register("lastName")} />
      </div>

      <div className="formField">
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} />
      </div>

      <input type="submit" />
    </form>
  );
};
