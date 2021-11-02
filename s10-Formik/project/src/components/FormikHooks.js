// previous lessons

import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  }
  if (values.name.length < 5) {
    errors.name = "El nombre es muy corto";
  }
  if (!values.lastname) {
    errors.lastname = "Requerido";
  }
  if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }

  if (!values.email) {
    errors.lastname = "Requerido";
  }
  if (values.lastname.length < 5) {
    errors.lastname = "El apellido es muy corto";
  }

  return errors;
};

export const FormikHooks = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    onSubmit: (values) => console.log(values),
    // 86
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label> Nombre </label>
      {/* <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
      /> */}
      {/* 88 */}
      <input type="text" {...formik.getFieldProps("name")} />
      {formik.touched.name && formik.errors.name ? (
        <div>
          <div>{formik.errors.name}</div>
        </div>
      ) : null}

      <br />
      <label> Apellido </label>
      <input type="text" {...formik.getFieldProps("lastname")} />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>
          <div>{formik.errors.lastname}</div>
        </div>
      ) : null}

      <br />
      <label> Correo electrónico </label>
      <input type="text" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div>
          <div>{formik.errors.email}</div>
        </div>
      ) : null}
      <br />

      <button type="submit">Enviar</button>
    </form>
  );
};
