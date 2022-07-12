import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(255)
    .required("Ingrese su nombre."),
  lastName: yup
    .string()
    .max(255)
    .required("Ingrese su apellido."),
  email: yup
    .string()
    .email("Ingrese un email válido.")
    .required("Ingrese su mail."),
  password: yup
    .string()
    .required("Ingrese su contraseña.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      "Su contraseña debe incluir, al menos, 8 caracteres, una mayúscula, una minúscula y un número."
    ),
  passwordConfirmation: yup
    .string()
    .required('Ingrese su contraseña nuevamente.')
    .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir.')
});

