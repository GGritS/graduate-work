import { FC } from "react";
import { useProductsContext } from "../../../../context/products/ProductsContext";
import { Box, LinearProgress } from "@mui/material";
import { ProductCard } from "../common/productCard";

export const Products: FC = () => {
  const { products, handleEditProduct, handleRemoveProduct } =
    useProductsContext();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {!products.length ? (
        <LinearProgress />
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleChangeProduct={handleEditProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))
      )}
    </Box>
  );
};
