import { FC, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import { UploadImage } from "../common/uploadImage";
import { useProductsContext } from "../../../../context/products/ProductsContext";

export const AddProduct: FC = () => {
  const [image, setImage] = useState<string>("");
  const { handleAddProduct } = useProductsContext();
  const formik = useFormik({
    initialValues: {
      description: "",
      name: "",
      price: 0,
    },
    onSubmit: (values) => {
      handleAddProduct({
        description: values.description,
        name: values.name,
        price: values.price,
        image,
      });
      formik.setValues({ description: "", name: "", price: 0 });

      setImage("");
    },
    validationSchema,
  });

  return (
    <Box>
      <Typography variant="h3">Додати новий продукт:</Typography>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Box>
          <Typography>Назва продукту</Typography>
          <TextField
            fullWidth
            placeholder="name"
            type="text"
            onChange={formik.handleChange}
            id="name"
            helperText={formik.errors.name && formik.errors.name}
            value={formik.values.name}
          />
        </Box>
        <Box>
          <Typography>Опис товару</Typography>
          <TextField
            fullWidth
            placeholder="description"
            type="text"
            onChange={formik.handleChange}
            id="description"
            helperText={formik.errors.description && formik.errors.description}
            value={formik.values.description}
          />
        </Box>
        <Box>
          <Typography>Ціна за шт (грн.):</Typography>
          <TextField
            fullWidth
            placeholder="price"
            type="number"
            inputProps={{
              min: 0,
              max: 10_000,
            }}
            onChange={formik.handleChange}
            id="price"
            helperText={formik.errors.price && formik.errors.price}
            value={formik.values.price}
          />
        </Box>
        <Box>
          <Typography>Фото товару</Typography>
          <UploadImage
            onUpload={(image: string) => setImage(image)}
            image={image}
          />
        </Box>
        <Button
          variant="contained"
          disabled={
            formik.values.description.length <= 0 ||
            formik.values.name.length <= 0 ||
            formik.values.price <= 0 ||
            image.length <= 0 ||
            !!formik.errors.name ||
            !!formik.errors.description ||
            !!formik.errors.price
          }
          type="submit"
          color="secondary"
        >
          додати товар
        </Button>
      </form>
    </Box>
  );
};
