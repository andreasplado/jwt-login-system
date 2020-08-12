import { Button } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import axios from "axios";
import { MyField } from "./LoginField";

interface Values {
  username: string;
  password: string;
}

export default class LoginForm extends React.Component<any, Values>{

  render() {
    return (
      <div>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={values => {
            axios.post('http://localhost:3000/auth/login', {
              username: values.username,
              password: values.password
            })
              .then(function (response: any) {
                if (response.data) {
                  localStorage.setItem('user', response.data);
                }
                axios.get('http://localhost:3000/user/', { headers: { auth: response.data } })
                  .then(response => {
                    window.location.reload();
                    console.log(response.data);
                  })
                  .catch((error) => {
                    console.log('error ' + error);
                  });
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
                  component={MyField}
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  component={MyField}
                />
              </div>
              <Button type="submit">submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }

};