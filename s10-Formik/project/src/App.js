// 84, 85, 86, 87, 88
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikHooks } from "./components/FormikHooks";
import { TextInput } from "./components/TextInput";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  }
  if (values.name.length < 2) {
    errors.name = "El nombre es muy corto";
  }
  if (!values.lastname) {
    errors.lastname = "Requerido";
  }
  if (values.lastname.length < 2) {
    errors.lastname = "El apellido es muy corto";
  }

  if (!values.email) {
    errors.lastname = "Requerido";
  }

  if (!values.newname) {
    errors.newname = "Requerido";
  }

  return errors;
};

function App() {
  return (
    <div>
      <FormikHooks />
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
        }}
        validate={validate}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          {/* 92 */}
          <TextInput name="newname" label="new name" />
          <label> Nombre </label>
          <Field name="name" type="text"></Field>
          <ErrorMessage name="name" />
          <br />
          <label> Apellido </label>
          <Field name="lastname" type="text"></Field>
          <ErrorMessage name="lastname" />
          <br />
          <label> Correo electrónico </label>
          <Field name="email" type="email"></Field>
          <ErrorMessage name="email" />
          <br />

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
