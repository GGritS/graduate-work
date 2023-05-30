import * as Yup from "yup";

export const validationSchema = Yup.object({
  description: Yup.string()
    .min(5, "Опис зандто короткий")
    .max(100, "Опис зандто довгий")
    .required("Обов'язкове поле"),
  name: Yup.string()
    .min(5, "Назва зандто коротка")
    .required("Обов'язкове поле"),
  price: Yup.number().required("Обов'язкове поле"),
});
