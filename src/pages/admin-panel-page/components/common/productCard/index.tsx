import {
  Box,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Product } from "../../../../../context/products";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

type ProductCardProps = {
  product: Product;
  handleChangeProduct: (product: Product) => void;
  handleRemoveProduct: (fid: string) => void;
};

export const ProductCard: FC<ProductCardProps> = ({
  product,
  handleRemoveProduct,
  handleChangeProduct,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [values, setValues] = useState<Product>(product);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleRemove = (fid: string) => {
    handleRemoveProduct(fid);
  };
  const handleEditProduct = (value: string | number, field: string) => {
    setValues({ ...values, [field]: value });
  };
  const handleSaveChanges = (values: Product) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1 * 1000);
    setIsEdit(false);
    handleChangeProduct(values);
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "2rem",
        backgroundColor: "#fff",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: "flex", padding: "10px" }}>
          <Box sx={{ width: "120px", height: "120px" }}>
            <img
              src={product.image}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {isEdit ? (
              <>
                <TextField
                  value={values.name}
                  onChange={(e) => handleEditProduct(e.target.value, "name")}
                />
                <TextField
                  value={values.description}
                  onChange={(e) =>
                    handleEditProduct(e.target.value, "description")
                  }
                />
                <TextField
                  inputProps={{
                    min: 0,
                    max: 10_000,
                  }}
                  type="number"
                  value={values.price}
                  onChange={(e) => handleEditProduct(e.target.value, "price")}
                />
              </>
            ) : (
              <>
                <Typography sx={{ mt: "5px" }} variant="h6">
                  {product.name}
                </Typography>
                <Typography>{product.description}</Typography>
                <Typography>{product.price} грн/шт</Typography>
              </>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              onClick={() =>
                isEdit ? handleSaveChanges(values) : setIsEdit(true)
              }
            >
              {isEdit ? (
                <CloudDoneIcon fontSize="large" color="success" />
              ) : (
                <EditIcon fontSize="large" color="info" />
              )}
            </IconButton>
            <IconButton onClick={() => handleRemove(product.fid)}>
              <DeleteForeverIcon fontSize="large" color="error" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};
