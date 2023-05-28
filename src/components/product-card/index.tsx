import { Box, Button, Paper, TextField } from "@mui/material";
import React, { ChangeEvent, FC } from "react";
import { GridDeleteIcon } from "@mui/x-data-grid";
import { ProductCardValue } from "../../types";
import { calculateProductTotalPrice } from "../../helpers/calculateProductTotalPrice";

type ProductCardProps = {
  product: ProductCardValue;
  setSelectedProducts: React.Dispatch<React.SetStateAction<ProductCardValue[]>>;
  setProduct: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ProductCard: FC<ProductCardProps> = ({
  product,
  setSelectedProducts,
  setProduct,
}) => {
  const { description, name, id, quantity, price, photo } = product;
  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: number
  ) => {
    const { value } = event.target;
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: Number(value),
          };
        }
        return product;
      })
    );
  };

  const handleRemoveProduct = (productId: number) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== productId
      );
      const updatedProductNames = updatedProducts.map(
        (product) => product.name
      );
      setProduct(updatedProductNames);
      return updatedProducts;
    });
  };

  return (
    <Paper
      key={id}
      elevation={2}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          width: "",
          display: "flex",
          flexDirection: "row-reverse",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "10px",
          }}
        >
          <Box
            sx={{ fontSize: "20px", marginBottom: "10px", fontWeight: "bold" }}
          >
            {name}
          </Box>
          <Box mb={"10px"}>{description}</Box>
          <Box mb={"10px"}>{price} грн з одиницю</Box>
        </Box>
        <img
          width={"200px"}
          height={"150px"}
          style={{
            marginBottom: "10px",
          }}
          src={photo}
          alt="product photo"
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "15px",
        }}
      >
        <TextField
          value={quantity || ""}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleQuantityChange(event, id)
          }
          variant="outlined"
          label="Кількість"
          type="number"
          style={{ width: "50%", padding: "5px" }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Загальна ціна"
          value={calculateProductTotalPrice(product)}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Button
        onClick={() => handleRemoveProduct(id)}
        variant="outlined"
        color="error"
        startIcon={<GridDeleteIcon />}
        style={{ width: "60%", cursor: "pointer", marginTop: "20px" }}
      >
        Видалити з замовлення
      </Button>
    </Paper>
  );
};
