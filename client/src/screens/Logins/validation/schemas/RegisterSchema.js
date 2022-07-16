import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(15, "Máximo 15 caracteres.")
    .required("Ingrese su nombre.")
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
      "Ingrese un nombre válido"
    ),
  lastName: yup
    .string()
    .max(15)
    .required("Ingrese su apellido.")
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
      "Ingrese un nombre válido"
    ),
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
    .required("Ingrese su contraseña nuevamente.")
    .oneOf([yup.ref("password")], "Las contraseñas deben coincidir."),
});
