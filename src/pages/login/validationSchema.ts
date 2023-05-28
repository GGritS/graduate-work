import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Почту введно не правильно")
    .min(2, "Почта занадто кортока")
    .max(30, "Забагато символів")
    .required("Обов'язкове поле"),
  password: Yup.string()
    .min(6, "Пароль занадто короткий")
    .required("Обов'язкове поле")
    .max(30, "Забагато символів"),
});
