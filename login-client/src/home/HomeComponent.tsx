
import { Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as React from "react";

export class HomeComponent extends React.Component {

  logout = () => {
    localStorage.clear();
    window.location.href = '/users';

  }
  render() {
    return (
      <div>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={values => {
            this.logout();
          }}>

          {({ values }) => (
            <Form>

              <Button type="submit">Logout</Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }

};
