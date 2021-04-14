import * as React from "react";
import { Formik, Form, Field } from "formik";

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikForm: React.FC = () => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
  };
  return (
    <div>
      <h3>Formik Form</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <div className="formField">
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="First Name" />
          </div>
          <div className="formField">
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Last Name" />
          </div>
          <div className="formField">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Email" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
