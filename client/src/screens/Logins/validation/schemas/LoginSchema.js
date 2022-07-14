import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Ingrese su mail."),
  password: yup
    .string()
    .required("Ingrese su contraseña.")
});
