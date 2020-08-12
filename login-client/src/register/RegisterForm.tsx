import { Button } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import axios from "axios";
import { RegisterField } from "./RegisterField";

interface Values {
  username: string;
  password: string;
}

export default class RegisterForm extends React.Component<any, Values>{

  render() {
    return (
      <div>
        <Formik
          initialValues={{ username: "", password: "", role: "" }}
          onSubmit={values => {
            axios.post('http://localhost:3000/user', {
              username: values.username,
              password: values.password,
              role: values.role,
              headers: {
                'token': localStorage.getItem('user') ? localStorage.getItem('user') : null,
                'Content-Type': 'application/json'
              }
            })
              .then(function (response: any) {
                if (response.data) {

                }

              }).catch(function (error: any) {
                console.log('error ' + error);
              });
          }}>

          {({ values }) => (
            <Form>
              <div>
                <Field
                  name="username"
                  placeholder="Username"
                  component={RegisterField}
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  component={RegisterField}
                />
              </div>
              <div className="dropdown">
                <select
                  name="role">
                  <option value="" label="Select a role" />
                  <option value="USER" label="User" />
                  <option value="ADMIN" label="Admin" />
                </select>
              </div>
              <Button type="submit">submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }

};